/**
 *  For LISTS of announcements
 */

import { Tables } from "@/types/supabase";
import { useQuery } from "@tanstack/react-query";
import { supabaseClient } from "@/lib/supabase/client";

type Announcement = Tables<"announcements">;

// branch = "전체"

export function useAnnouncements(page = 1, limit = 20, orderBy = "created_at") {
  return useQuery({
    queryKey: ["announcements", page, limit],
    queryFn: async () => {
      const from = (page - 1) * limit;
      const to = from + limit - 1;

      const { data, error, count } = await supabaseClient
        .from("announcements")
        .select("*", { count: "exact" })
        .order(orderBy, { ascending: false })
        .range(from, to);

      if (error) throw error;

      return {
        data: data as Announcement[],
        count: count ?? 0,
        totalPages: Math.ceil((count ?? 0) / limit),
      };
    },
  });
}
