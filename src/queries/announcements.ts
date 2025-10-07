import { Tables } from "@/types/supabase";
import { useQuery } from "@tanstack/react-query";
import { supabaseClient } from "@/lib/supabase/client";

type Announcement = Tables<"announcements">;

export function useAnnouncements(limit = 20) {
  return useQuery({
    queryKey: ["announcements", limit],
    queryFn: async () => {
      const { data, error } = await supabaseClient
        .from("announcements")
        .select("*")
        .limit(limit);

      if (error) throw error;

      return data as Announcement[];
    },
  });
}
