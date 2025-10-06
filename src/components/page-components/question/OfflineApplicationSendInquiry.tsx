"use client";

import { Paperclip } from "lucide-react";
import React from "react";

export default function OfflineApplicationSendInquiry() {
  return (
    <div className="h-[360px] w-[300px] rounded-lg bg-white p-[28px]">
      <p className="mb-4 text-lg font-medium">질의 내용 전송 (★권장사항)</p>

      <textarea
        placeholder="내용을 적어주세요.(ENTER로 줄바꿈)"
        className="mb-4 h-48 w-full resize-none rounded border border-gray-300 p-3 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none"
      />

      <div className="flex items-center justify-between">
        <Paperclip size={16} />

        <button className="rounded bg-blue-500 px-6 py-2 font-medium text-white hover:bg-blue-600">
          보내기
        </button>
      </div>
    </div>
  );
}
