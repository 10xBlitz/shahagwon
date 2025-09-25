"use client";

import { useState } from "react";
import { noticeTemp } from "@/etc/temp";
import NoticeCard from "@/components/common/NoticeCard";
import StudyScheduleCard from "@/components/home_page/StudyScheduleCard";
import StudyTimeDialogue from "@/components/home_page/StudyTimeDialogue";

export default function Dashboard() {
  const firstFourNotice = noticeTemp.slice(0, 4);
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
        {firstFourNotice.map((each, index) => (
          <NoticeCard
            key={index}
            image={each.image}
            title={each.title}
            description={each.description}
            date={each.date}
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
