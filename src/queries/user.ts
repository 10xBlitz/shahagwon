import { Tables } from "@/types/supabase";
import { useQuery } from "@tanstack/react-query";
import { supabaseClient } from "@/lib/supabase/client";

export type UserProfile = Tables<"user_profiles">;

export function useUserProfile({
  id,
}: {
  id: string;
}): ReturnType<typeof useQuery<UserProfile | null, Error>> {
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

/**
 *
 *  Fetch all teachers from 'user_profiles' table
 *
 */

export function useTeacher(): ReturnType<
  typeof useQuery<UserProfile[] | null, Error>
> {
  return useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      const { data, error } = await supabaseClient
        .from("user_profiles")
        .select("*")
        .eq("account_type", "teacher");

      if (error) throw error;
      return data as UserProfile[];
    },
  });
}
