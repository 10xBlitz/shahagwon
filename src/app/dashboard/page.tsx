"use client";

import { useState } from "react";
import NoticeCard from "@/components/common/NoticeCard";
import { useAnnouncements } from "@/queries/announcements";
import StudyScheduleCard from "@/components/page-components/home/StudyScheduleCard";
import StudyTimeDialogue from "@/components/page-components/home/StudyTimeDialogue";

export default function Dashboard() {
  const { data } = useAnnouncements({ page: 1, limit: 4 });
  const announcements = data?.data ?? [];

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
          <NoticeCard key={index} notice={each} />
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
