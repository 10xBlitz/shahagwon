import { Tables } from "@/types/supabase";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabaseClient } from "@/lib/supabase/client";

type QnaPost = Tables<"qna_posts">;

export function useQnaPosts(page = 1, limit = 5, orderBy = "created_at") {
  return useQuery({
    queryKey: ["qna_posts", page, limit],
    queryFn: async () => {
      const from = (page - 1) * limit;
      const to = from + limit - 1;

      const { data, error, count } = await supabaseClient
        .from("qna_posts")
        .select("*", { count: "exact" })
        .order(orderBy, { ascending: false })
        .range(from, to);

      if (error) throw error;

      return {
        data: data as QnaPost[],
        count: count ?? 0,
        totalPages: Math.ceil((count ?? 0) / limit),
      };
    },
  });
}

export function useCreateQnaPost(
  title: string,
  content: string,
  authorId: string,
  category?: string,
  imageFiles: File[] = []
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const uploadedUrls: string[] = [];

      for (const file of imageFiles) {
        const filePath = `qna-post-${Date.now()}-${file.name}`;
        console.log("Uploading:", filePath);

        const { error } = await supabaseClient.storage
          .from("qna_post_images")
          .upload(filePath, file);

        if (error) {
          console.error("Upload failed:", error.message);
          continue;
        }

        const { data: imageData } = supabaseClient.storage
          .from("qna_post_images")
          .getPublicUrl(filePath);

        uploadedUrls.push(imageData.publicUrl);
      }

      console.log("Creating Q&A post...");

      const { data, error } = await supabaseClient
        .from("qna_posts")
        .insert({
          title: title.trim(),
          content: content.trim(),
          author_id: authorId,
          category: category?.trim(),
          images: uploadedUrls.length > 0 ? uploadedUrls : null,
        })
        .select();

      if (error) {
        console.error("Insert failed:", error.message);
        throw error;
      }

      console.log(" Q&A post created:", data);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["qna_posts"] });
    },
  });
}