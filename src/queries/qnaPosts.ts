import { Tables } from "@/types/supabase";
import { supabaseClient } from "@/lib/supabase/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export type QnaPost = Tables<"qna_posts"> & {
  user_profiles: Tables<"user_profiles">;
  qna_posts_comments: QnaPostComment[];
};

export type QnaPostComment = Tables<"qna_posts_comments"> & {
  user_profile: Tables<"user_profiles">;
};

export interface QnaPostsResponse {
  data: QnaPost[];
  count: number;
  totalPages: number;
}

export function useQnaPosts({
  page = 1,
  limit = 6,
  category = "all",
  filter = "all",
  currentUuid = "",
  orderBy = "created_at",
}: {
  page?: number;
  limit?: number;
  category?: string;
  filter?: string;
  currentUuid?: string;
  orderBy?: string;
}): ReturnType<typeof useQuery<QnaPostsResponse, Error>> {
  return useQuery({
    queryKey: ["qna_posts", page, limit, category, filter, currentUuid],
    queryFn: async () => {
      const from = (page - 1) * limit;
      const to = from + limit - 1;

      let query = supabaseClient.from("qna_posts").select(
        `
          *,
          user_profiles!qna_posts_author_id_fkey (
            name
          ),
          qna_posts_comments (
            id,
            content,
            author_id,
            created_at,
            images,
            user_profiles!qna_posts_comments_author_id_fkey (
              name
            )
          )
        `,
        { count: "exact" },
      );

      if (category && category !== "all") {
        query = query.eq("category", category);
      }

      if (filter === "my" && currentUuid) {
        query = query.eq("author_id", currentUuid);
      }

      const { data, error, count } = await query
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

export function useCreateQnaPost({
  title,
  content,
  authorId,
  category,
  imageFiles = [],
}: {
  title: string;
  content: string;
  authorId: string;
  category?: string;
  imageFiles?: File[];
}): ReturnType<typeof useMutation<QnaPost, Error, void, unknown>> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (): Promise<QnaPost> => {
      const uploadedUrls: string[] = [];

      for (const file of imageFiles) {
        const filePath = `qna-post-${Date.now()}-${file.name}`;
        console.log("Uploading:", filePath);

        const { error } = await supabaseClient.storage
          .from("qna_posts_images")
          .upload(filePath, file);

        if (error) {
          console.error("Upload failed:", error.message);
          continue;
        }

        const { data: imageData } = supabaseClient.storage
          .from("qna_posts_images")
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
        .select()
        .single();

      if (error) {
        console.error("Insert failed:", error.message);
        throw error;
      }

      console.log("Q&A post created:", data);
      return data as QnaPost;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["qna_posts"] });
    },
  });
}

export function useCreateQnaPostComment({
  content,
  postId,
  authorId,
  imageFiles = [],
}: {
  content: string;
  postId: string;
  authorId: string;
  imageFiles?: File[];
}): ReturnType<typeof useMutation<QnaPostComment, Error, void, unknown>> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (): Promise<QnaPostComment> => {
      const uploadedUrls: string[] = [];

      for (const file of imageFiles) {
        const filePath = `qna-comment-${Date.now()}-${file.name}`;
        console.log("Uploading:", filePath);

        const { error } = await supabaseClient.storage
          .from("qna_posts_images")
          .upload(filePath, file);

        if (error) {
          console.error("Upload failed:", error.message);
          continue;
        }

        const { data: imageData } = supabaseClient.storage
          .from("qna_posts_images")
          .getPublicUrl(filePath);

        uploadedUrls.push(imageData.publicUrl);
      }

      console.log("Creating Q&A post comment...");

      const { data, error } = await supabaseClient
        .from("qna_posts_comments")
        .insert({
          content: content.trim(),
          post_id: postId,
          author_id: authorId,
          images: uploadedUrls.length > 0 ? uploadedUrls : null,
        })
        .select()
        .single();

      if (error) {
        console.error("Insert failed:", error.message);
        throw error;
      }

      console.log("Q&A post comment created:", data);
      return data as QnaPostComment;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["qna_posts"] });
    },
  });
}
