"use client";

import Image from "next/image";
import { Tables } from "@/types/supabase";
import { useRouter } from "next/navigation";
import { convertToYYYYMMDD } from "@/lib/utils/timeUtils";

interface NoticeCardProps {
  notice: Tables<"announcements">;
  isNew?: boolean;
}

export default function NoticeCard({ notice, isNew = false }: NoticeCardProps) {
  const router = useRouter();

  const handleOnClick = () => {
    router.push(`/dashboard/notification/${notice.id}`);
  };

  return (
    <div
      onClick={handleOnClick}
      className="h-[280px] w-[280px] overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-500 hover:scale-105 hover:cursor-pointer"
    >
      {notice.images?.[0] && (
        <div className="relative h-[140px]">
          <Image
            src={notice.images?.[0]}
            alt={notice.title}
            className="h-full w-full object-cover object-top"
            width={280}
            height={160}
          />
        </div>
      )}
      <div
        className={`flex flex-col p-6 ${notice.images?.[0] ? "h-[140px]" : "h-full"}`}
      >
        <div className="flex items-start gap-[40px]">
          <h3 className="line-clamp-2 flex-1 text-lg leading-tight font-bold tracking-tighter">
            {notice.title}
          </h3>
          <div className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#BDBDBD]">
            <span className="text-xl font-medium text-white">심</span>
          </div>
        </div>
        {notice.images?.length === 0 && (
          <p className="mt-8 line-clamp-3 text-sm">{notice.content}</p>
        )}

        <div className="mt-auto flex items-center justify-between">
          {isNew && (
            <span className="rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-600">
              NEW
            </span>
          )}
          <span className="ml-auto text-sm font-medium">
            {convertToYYYYMMDD(notice.created_at)}
          </span>
        </div>
      </div>
    </div>
  );
}
