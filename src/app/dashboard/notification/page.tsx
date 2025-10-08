"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Pencil } from "lucide-react";
import Button from "@/components/common/Button";
import NoticeCard from "@/components/common/NoticeCard";
import Pagination from "@/components/common/Pagination";
import { useAnnouncements } from "@/queries/announcements";

export default function AnnouncementsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: announcementsData } = useAnnouncements(currentPage, 8);

  const announcements = announcementsData?.data ?? [];
  const totalPages = announcementsData?.totalPages ?? 1;

  return (
    <div className="h-full bg-[#F5F5F5] p-[48px]">
      <div className="mb-[20px] flex flex-row items-center gap-[12px]">
        <Image
          src="/images/sidebar/off/notification_off.svg"
          alt="Chat Icon"
          width={20}
          height={20}
        />
        <h1 className="text-[22px] font-extrabold">최근 공지사항</h1>
      </div>
      <div className="max-w-[1170px]">
        <ul className="grid grid-cols-4 grid-rows-2 gap-x-[18px] gap-y-[40px]">
          {announcements.map((each, index) => (
            <NoticeCard key={index} notice={each} />
          ))}
        </ul>
        <div className="mt-[24px]">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
      <Button
        icon={
          <Pencil strokeWidth={1.5} size={18} fill="#FFFFFF" stroke="#303030" />
        }
        iconPosition="left"
        className="fixed right-4 bottom-4 gap-2 rounded-3xl bg-[#303030] px-[24px] py-[12px] font-semibold text-[#FFFFFF]"
      >
        <Link href="/dashboard/notification/write">신규 게시물 작성</Link>
      </Button>
    </div>
  );
}
