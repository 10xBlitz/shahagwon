import { Tables } from "@/types/supabase";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabaseClient } from "@/lib/supabase/client";

export type Announcement = Tables<"announcements">;

/**
 *  Fetches the details about a single announcement
 */

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

/**
 *  Fetches a list of announcements
 */

export function useAnnouncements({
  page = 1,
  limit = 20,
  orderBy = "created_at",
} = {}) {
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

export function useCreateAnnouncement(
  title: string,
  content: string,
  selectedBranch: string,
  authorId: string,
  imageFiles: File[],
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const uploadedUrls: string[] = [];

      for (const file of imageFiles) {
        const filePath = `announcement-${Date.now()}-${file.name}`;
        console.log("Uploading:", filePath);

        const { error } = await supabaseClient.storage
          .from("announcement_images")
          .upload(filePath, file);

        if (error) {
          console.error("Upload failed:", error.message);
          continue;
        }

        const { data: imageData } = supabaseClient.storage
          .from("announcement_images")
          .getPublicUrl(filePath);

        uploadedUrls.push(imageData.publicUrl);
      }

      console.log("Uploading announcement...");

      const { data, error } = await supabaseClient
        .from("announcements")
        .insert({
          title: title.trim(),
          content: content.trim(),
          branch: selectedBranch,
          author_id: authorId,
          images: uploadedUrls,
        })
        .select();

      if (error) {
        console.error("Insert failed:", error.message);
        throw error;
      }

      console.log("✅ Announcement created:", data);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["announcements"] });
    },
  });
}
