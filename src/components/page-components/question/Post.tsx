"use client";

import React from "react";
import Image from "next/image";
import { ThumbsUp } from "lucide-react";
import Avatar from "@/components/common/Avatar";
import Comment from "@/components/common/Comment";

interface PostComment {
  username: string;
  userTitle?: string;
  content: string;
  timestamp: string;
  avatarSrc?: string;
}

interface PostProps {
  username: string;
  timestamp: string;
  title: string;
  content: string;
  imageSrc?: string;
  avatarSrc?: string;
  comments?: PostComment[];
  likesCount?: number;
}

export default function Post({
  username,
  timestamp,
  title,
  content,
  imageSrc = "/images/temp/notice_card_image_1.jpeg",
  avatarSrc,
  comments = [],
  likesCount = 0,
}: PostProps) {
  return (
    <div className="min-h-auto w-[800px] rounded-lg bg-white p-[30px]">
      <div className="mb-6 flex items-center gap-4">
        <Avatar src={avatarSrc} />
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{username}</h3>
          <p className="text-xs text-gray-500">{timestamp}</p>
        </div>
      </div>
      <div className="mb-6 h-px bg-[#D9D9D9]" />
      <h2 className="mb-4 text-xl font-medium">{title}</h2>
      <p className="mb-6">{content}</p>
      {imageSrc && (
        <div className="relative mb-[18px] flex h-[400px] w-full items-center rounded-2xl bg-[#F3F3F3]">
          <Image
            alt=""
            fill
            src={imageSrc}
            className="h-auto rounded-lg border object-contain"
          />
        </div>
      )}
      <div className="mb-6 flex w-auto items-center gap-2 hover:cursor-pointer">
        <ThumbsUp size={16} color="#707070" />
        <p className="text-sm text-[#9F9F9F]">
          {likesCount > 0 ? `+${likesCount} ` : ""}이해됐어요
        </p>
      </div>
      {comments.length > 0 && (
        <>
          <div className="mb-6 h-px bg-[#D9D9D9]" />
          <div className="mb-6 space-y-4">
            {comments.map((comment, index) => (
              <Comment
                key={index}
                username={comment.username}
                userTitle={comment.userTitle}
                content={comment.content}
                timestamp={comment.timestamp}
                avatarSrc={comment.avatarSrc}
              />
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
