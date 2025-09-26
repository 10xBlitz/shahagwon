"use client";

import Image from "next/image";
import { useState } from "react";
import CircularTabs from "@/components/common/CircularTabs";
import WriteSuggestion from "@/components/search_page/WriteSuggestion";

const tabs = [
  {
    label: "건의사항 작성",
    value: "write_suggestion",
  },
  {
    label: "나의 건의사항",
    value: "my_suggestions",
  },
  {
    label: "전체 건의사항",
    value: "all_suggestions",
  },
];

export default function SendFeedbackPage() {
  const [selectedTab, setSelectedTab] = useState("write_suggestion");

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#F5F5F5] p-[48px]">
      <div className="mb-[28px] flex flex-row items-center gap-[12px]">
        <Image
          src="/images/sidebar/off/chart_off.svg"
          alt="Chat Icon"
          width={20}
          height={20}
        />
        <h1 className="text-[22px] font-extrabold">의견 보내기</h1>
      </div>
      <CircularTabs
        tabs={tabs}
        selectedTab={selectedTab}
        onClick={(tab) => {
          setSelectedTab(tab);
        }}
      />
      {selectedTab === "write_suggestion" && <WriteSuggestion />}
    </div>
  );
}
