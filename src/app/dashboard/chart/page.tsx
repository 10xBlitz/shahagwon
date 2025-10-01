"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import CircularTabs from "@/components/common/CircularTabs";
import { useState } from "react";

const tabs = [
  { label: "#이전 상담일지", value: "previous_counseling_journal" },
  { label: "#출석 기록", value: "attendance_record" },
  { label: "#정기 일정", value: "regular_schedule" },
  { label: "#학생 프로필", value: "student_profile" },
  { label: "#영어 단어", value: "english_vocabulary" },
  { label: "#시험 기록", value: "test_record" },
];

export default function WriteCounselingJournalPage() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].value);
  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#F5F5F5] p-[48px]">
      <div className="mb-[28px] flex flex-row items-center gap-[12px]">
        <Image
          src="/images/sidebar/off/chart_off.svg"
          alt="Chat Icon"
          width={20}
          height={20}
        />
        <h1 className="text-[22px] font-extrabold">상담일지 적기</h1>
      </div>
      <p className="text-xl font-medium">학생선택</p>
      <div className="mt-[18px] mb-[26px] h-px bg-[#CACACA]" />
      <div className="relative mt-4 mb-[38px] w-full max-w-[225px]">
        <select className="w-full appearance-none rounded border border-[#C3C3C3] p-4 pr-10 hover:border-black"></select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
      <CircularTabs
        tabs={tabs}
        selectedTab={selectedTab}
        onClick={(tab) => {
          setSelectedTab(tab);
        }}
      />
    </div>
  );
}
