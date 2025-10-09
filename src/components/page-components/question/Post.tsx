"use client";

import React from "react";
import Image from "next/image";
import { ThumbsUp } from "lucide-react";
import Avatar from "@/components/common/Avatar";
import Comment from "@/components/common/Comment";
import { QnaPost } from "@/queries/qnaPosts";
import { convertToYYYYMMDDWithTime } from "@/lib/utils/timeUtils";

interface PostProps {
  post: QnaPost;
  likesCount?: number;
}

export default function Post({ post, likesCount = 0 }: PostProps) {
  return (
    <div className="min-h-auto w-[800px] rounded-lg bg-white p-[30px]">
      <div className="mb-6 flex items-center gap-4">
        <Avatar />
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{post.user_profiles?.name}</h3>
          <p className="text-xs text-gray-500">
            {convertToYYYYMMDDWithTime(post.created_at)}
          </p>
        </div>
      </div>
      <div className="mb-6 h-px bg-[#D9D9D9]" />
      <h2 className="mb-4 text-xl font-medium">{post.title}</h2>
      <p className="mb-6">{post.content}</p>
      {post.images && post.images.length > 0 && (
        <div className="mb-[18px] grid grid-cols-1 gap-4">
          {post.images.map((image, index) => (
            <div
              key={index}
              className="relative h-[400px] w-full rounded-2xl bg-[#F3F3F3]"
            >
              <Image
                alt={`Post image ${index + 1}`}
                fill
                src={image}
                className="h-auto rounded-lg border object-contain"
              />
            </div>
          ))}
        </div>
      )}
      <div className="mb-6 flex w-auto items-center gap-2 hover:cursor-pointer">
        <ThumbsUp size={16} color="#707070" />
        <p className="text-sm text-[#9F9F9F]">
          {likesCount > 0 ? `+${likesCount} ` : ""}이해됐어요
        </p>
      </div>
      {post.qna_posts_comments && post.qna_posts_comments.length > 0 && (
        <>
          <div className="mb-6 h-px bg-[#D9D9D9]" />
          <div className="mb-6 space-y-4">
            {post.qna_posts_comments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
        </>
      )}
      <div className="mb-6 h-px bg-[#D9D9D9]" />
      <textarea
        placeholder="메시지를 입력하세요 (ENTER로 줄바꿈이 가능합니다)"
        className="w-full rounded-lg border border-gray-300 p-3 text-sm placeholder-gray-400 focus:outline-none"
      />
    </div>
  );
}
