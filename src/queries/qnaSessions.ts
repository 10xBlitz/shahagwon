import { Tables } from "@/types/supabase";
import { supabaseClient } from "@/lib/supabase/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Dayjs } from "dayjs";

export type QnaSession = Tables<"qna_sessions">;

export interface QnaSessionsResponse {
  data: QnaSession[];
  count: number;
  totalPages: number;
}

export function useQnaSessions({
  page = 1,
  limit = 20,
  orderBy = "created_at",
}: {
  page?: number;
  limit?: number;
  orderBy?: string;
} = {}): ReturnType<typeof useQuery<QnaSessionsResponse, Error>> {
  return useQuery({
    queryKey: ["qna_sessions", page, limit],
    queryFn: async () => {
      const from = (page - 1) * limit;
      const to = from + limit - 1;

      const { data, error, count } = await supabaseClient
        .from("qna_sessions")
        .select("*", { count: "exact" })
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

/**
 *  branch,
 *  date,
 *  time,
 *  teacher,
 *  applicant,
 *  student_affiliation,
 *  location
 */

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
