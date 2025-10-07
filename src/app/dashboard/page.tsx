"use client";

import { useState } from "react";
import { noticeTemp } from "@/etc/temp";
import NoticeCard from "@/components/common/NoticeCard";
import StudyScheduleCard from "@/components/page-components/home/StudyScheduleCard";
import StudyTimeDialogue from "@/components/page-components/home/StudyTimeDialogue";

import { Tables } from "@/types/supabase";
import { useAnnouncements } from "@/queries/announcements";

export default function Dashboard() {
  const { data: announcements = [] } = useAnnouncements(4) as {
    data: Tables<"announcements">[];
  };

  // const firstFourNotice = noticeTemp.slice(0, 4);
  const [dialogueTitle, setDialogueTitle] = useState<string | null>(null);

  return (
    <div className="h-full bg-[#F5F5F5] p-[48px]">
      <div className="mb-[46px] flex flex-row gap-[28px]">
        <StudyScheduleCard
          title="이번달 공부 시간"
          onButtonClick={() => setDialogueTitle("이번달 공부 시간")}
        />
        <StudyScheduleCard
          title="이번주 공부 시간"
          onButtonClick={() => setDialogueTitle("이번주 공부 시간")}
        />
      </div>
      <p className="mb-[20px] text-[22px] font-extrabold">최근 공지사항</p>
      <ul className="flex flex-row gap-[18px]">
        {announcements.map((each, index) => (
          <NoticeCard
            key={index}
            image={each.images?.[0]}
            title={each.title}
            description={each.content}
            date={each.created_at ?? ""}
          />
        ))}
      </ul>
      {dialogueTitle && (
        <StudyTimeDialogue
          title={dialogueTitle}
          onClose={() => setDialogueTitle(null)}
        />
      )}
    </div>
  );
}
