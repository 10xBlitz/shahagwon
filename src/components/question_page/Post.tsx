"use client";

import React from "react";
import Image from "next/image";
import { ThumbsUp } from "lucide-react";
import Avatar from "../common/Avatar";

export default function Post() {
  return (
    <div className="min-h-auto w-[800px] rounded-lg bg-white p-[30px]">
      <div className="mb-6 flex items-center gap-4">
        <Avatar />
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">gy2551</h3>
          <p className="text-xs text-gray-500">2025/9/25 9:7 AM</p>
        </div>
      </div>
      <div className="mb-6 h-px bg-[#D9D9D9]" />
      <h2 className="mb-4 text-xl font-medium">독서 15번</h2>
      <p className="mb-6">3,4,5번 선지 해설 부탁드려요</p>
      <div className="relative mb-[18px] flex h-[400px] w-full items-center rounded-2xl bg-[#F3F3F3]">
        <Image
          alt=""
          fill
          src="/images/temp/notice_card_image_1.jpeg"
          className="h-auto rounded-lg border object-contain"
        />
      </div>
      <div className="mb-6 flex w-auto items-center gap-2 hover:cursor-pointer">
        <ThumbsUp size={16} color="#707070" />
        <p className="text-sm text-[#9F9F9F]">이해됐어요</p>
      </div>
      <div className="mb-6 h-px bg-[#D9D9D9]" />
      <textarea
        placeholder="메시지를 입력하세요 (ENTER로 줄바꿈이 가능합니다)"
        className="w-full rounded-lg border border-gray-300 p-3 text-sm placeholder-gray-400 focus:outline-none"
      />
    </div>
  );
}
