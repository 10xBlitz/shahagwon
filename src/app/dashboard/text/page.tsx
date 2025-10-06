"use client";

import Image from "next/image";
import { useState } from "react";
import CircularTabs from "@/components/common/CircularTabs";
import AllTestRecords from "@/components/page-components/text/AllTestRecords";
import AssignmentPerformanceHistory from "@/components/page-components/text/AssignmentPerformanceHistory";

const tabs = [
  {
    label: "시험별로 보기",
    value: "view_by_test",
  },
  {
    label: "Day별로 보기",
    value: "view_by_day",
  },
  {
    label: "전체 시험기록",
    value: "all_test_records",
  },
  {
    label: "과제 수행 내역",
    value: "assignment_performance_history",
  },
];

export default function EnglishVocabularyTestPage() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].value);

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#F5F5F5] p-[48px]">
      <div className="mb-[28px] flex flex-row items-center gap-[12px]">
        <Image
          src="/images/sidebar/off/text_off.svg"
          alt="Chat Icon"
          width={20}
          height={20}
        />
        <h1 className="text-[22px] font-extrabold">영단어 시험 결과</h1>
      </div>
      <CircularTabs
        tabs={tabs}
        selectedTab={selectedTab}
        onClick={(tab) => setSelectedTab(tab)}
      />
      {selectedTab === "all_test_records" && <AllTestRecords />}
      {selectedTab === "assignment_performance_history" && (
        <AssignmentPerformanceHistory />
      )}
    </div>
  );
}
