/**
 *  For a SINGLE announcement
 */

import { Tables } from "@/types/supabase";
import { useQuery } from "@tanstack/react-query";
import { supabaseClient } from "@/lib/supabase/client";

type Announcement = Tables<"announcements">;

export function useAnnouncement(id: string) {
  return useQuery({
    queryKey: ["announcement", id],
    queryFn: async () => {
      const { data, error } = await supabaseClient
        .from("announcements")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      return data as Announcement;
    },
  });
}
