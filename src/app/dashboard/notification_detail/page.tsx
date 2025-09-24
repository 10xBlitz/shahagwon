"use client";

import Image from "next/image";
import Button from "@/components/common/Button";
import { SquarePen, Trash2 } from "lucide-react";

export default function NotificationDetail() {
  return (
    <div className="flex h-full flex-col bg-[#F5F5F5] p-[48px]">
      <div className="mb-[20px] flex flex-row items-center gap-[12px]">
        <Image
          src="/images/sidebar/off/notification_off.svg"
          alt="Chat Icon"
          width={20}
          height={20}
        />
        <h1 className="text-[22px] font-medium">최근 공지사항</h1>
      </div>
      <div className="h-[3px] w-full bg-[#707070]" />
      <div className="flex flex-row items-center justify-between border-b border-[#CACACA] px-[30px] py-[28px]">
        <p className="text-[22px] font-medium">10월 연휴 원내 이용 공지</p>
        <div className="flex flex-row items-center gap-[30px]">
          <SquarePen strokeWidth={1.25} size={24} />
          <Trash2 strokeWidth={1.25} size={24} />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between border-b border-[#CACACA] px-[30px] py-[24px]">
        <div className="flex flex-row items-center gap-[50px]">
          <p className="font-medium">작성일</p>
          <p className="font-medium">2025.9.23 (조회 : 666)</p>
        </div>
        <div className="flex flex-row items-center gap-[30px]">
          <p className="font-medium">작성자</p>
          <p className="font-medium">심윤주 부원장</p>
        </div>
      </div>
      <div className="border-b-[3px] border-[#707070] px-[30px] py-[88px]">
        <p>Content here</p>
      </div>
      <Button
        onClick={() => {}}
        className="mt-[50px] w-fit self-center bg-[#3A3A3A] px-20 py-[12px] text-xl font-medium text-white"
      >
        목록
      </Button>
    </div>
  );
}
