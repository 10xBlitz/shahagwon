import { Tables } from "@/types/supabase";
import { useQuery } from "@tanstack/react-query";
import { supabaseClient } from "@/lib/supabase/client";

type UserProfile = Tables<"user_profiles">;

export function useUserProfile(id: string) {
  return useQuery({
    queryKey: ["userProfile", id],
    queryFn: async () => {
      const { data, error } = await supabaseClient
        .from("user_profiles")
        .select("*")
        .eq("user_id", id)
        .single();

      if (error) throw error;
      return data as UserProfile;
    },
    enabled: !!id,
  });
}
