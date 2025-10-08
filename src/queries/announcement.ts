/**
 *  For a SINGLE announcement
 */

import { Tables } from "@/types/supabase";
import { supabaseClient } from "@/lib/supabase/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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
        return;
      }

      console.log("✅ Announcement created:", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["announcements"] });
    },
  });
}
