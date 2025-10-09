import { Tables } from "@/types/supabase";
import { supabaseClient } from "@/lib/supabase/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export type QnaSession = Tables<"qna_sessions">;

export function useQnaSessions({
  page = 1,
  limit = 20,
  orderBy = "created_at",
} = {}) {
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

export function useCreateQnaSession(
  title: string,
  description: string,
  selectedBranch: string,
  hostId: string,
  scheduledDate: string,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const { data, error } = await supabaseClient
        .from("qna_sessions")
        .insert({
          title: title.trim(),
          description: description.trim(),
          branch: selectedBranch,
          host_id: hostId,
          scheduled_date: scheduledDate,
        })
        .select();

      if (error) {
        console.error("Insert failed:", error.message);
        throw error;
      }

      console.log("✅ Q&A session created:", data);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["qna_sessions"] });
    },
  });
}
