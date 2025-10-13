import { Tables } from "@/types/supabase";
import { supabaseClient } from "@/lib/supabase/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Dayjs } from "dayjs";
import { getUtcRangeForLocalDay } from "@/lib/utils/timeUtils";

export type QnaSession = Tables<"qna_sessions"> & {
  teacher_profile: {
    name: string | null;
    subjects: string[] | null;
  } | null;
  applicant_profile: {
    name: string | null;
  } | null;
};

export interface QnaSessionsResponse {
  data: QnaSession[];
  count: number;
  totalPages: number;
}

export function useQnaSessions({
  page = 1,
  limit = 20,
  orderBy = "created_at",
  startDate,
  endDate,
  branch = "all",
}: {
  page?: number;
  limit?: number;
  orderBy?: string;
  startDate?: Date | null;
  endDate?: Date | null;
  branch?: string;
} = {}): ReturnType<typeof useQuery<QnaSessionsResponse, Error>> {
  return useQuery({
    queryKey: [
      "qna_sessions",
      page,
      limit,
      startDate,
      endDate,
      branch,
      orderBy,
    ],
    queryFn: async () => {
      const from = (page - 1) * limit;
      const to = from + limit - 1;

      let query = supabaseClient.from("qna_sessions").select(
        `
          *,
          teacher:user_profiles!qna_sessions_teacher_fkey (
            name,
            subjects
          ),
          applicant:user_profiles!qna_sessions_applicant_fkey (
            name
          )
        `,
        { count: "exact" },
      );

      // Apply date range filter if dates are provided
      if (startDate && endDate) {
        const { startUTC, endUTC } = getUtcRangeForLocalDay(startDate, endDate);

        query = query
          .gte("date", startUTC.toISOString())
          .lte("date", endUTC.toISOString());
      }

      // Apply branch filter if branch is specified and not "all"
      if (branch && branch !== "all") {
        query = query.eq("branch", branch);
      }

      const { data, error, count } = await query
        .order(orderBy, { ascending: false })
        .range(from, to);

      if (error) throw error;

      return {
        data: data as QnaSession[],
        count: count ?? 0,
        totalPages: Math.ceil((count ?? 0) / limit),
      };
    },
  });
}

export function useCreateQnaSession({
  branch,
  date,
  time,
  teacher,
  applicant,
  location,
}: {
  branch: string;
  date: Date;
  time: Dayjs;
  teacher: string;
  applicant: string;
  location: string;
}) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (): Promise<QnaSession> => {
      console.log({
        branch,
        date,
        time,
        teacher,
        applicant,
        location,
      });

      const { data, error } = await supabaseClient
        .from("qna_sessions")
        .insert({
          date: date,
          time: time,
          branch: branch,
          teacher: teacher,
          applicant: applicant,
          location: location,
        })
        .select()
        .single();

      if (error) {
        console.error("Insert failed:", error.message);
        throw error;
      }

      console.log("✅ Q&A session created:", data);
      return data as QnaSession;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["qna_sessions"] });
    },
  });
}

export function useDeleteQnaSession({ id }: { id: string }) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (): Promise<void> => {
      const { error } = await supabaseClient
        .from("qna_sessions")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("Delete failed:", error.message);
        throw error;
      }

      console.log("✅ Q&A session deleted:", id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["qna_sessions"] });
    },
  });
}
