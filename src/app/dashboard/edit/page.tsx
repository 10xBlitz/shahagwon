"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "@/components/common/Button";
import SmallCalendar from "@/components/edit_page/SmallCalendar";
import ReasonInputCard from "@/components/edit_page/ReasonInput";
import StatusSelector from "@/components/edit_page/StatusSelector";
import SubmittedReasonsCard from "@/components/edit_page/SubmittedReasonsCard";

const editTabs = [
  {
    label: "# 사유 제출",
    value: "one",
  },
  {
    label: "내 사유 제출 현황",
    value: "two",
  },
  {
    label: "전체 제출 현황",
    value: "three",
  },
];

export default function AbsenceReasonSubmissionPage() {
  const [selectedTab, setSelectedTab] = useState("one");

  return (
    <div className="flex h-full flex-col bg-[#F5F5F5] p-[48px]">
      <div className="mb-[28px] flex flex-row items-center gap-[12px]">
        <Image
          src="/images/sidebar/off/edit_off.svg"
          alt="Chat Icon"
          width={20}
          height={20}
        />
        <h1 className="text-[22px] font-extrabold">지각/결석 사유 제출</h1>
      </div>
      <div className="mb-8 flex max-w-[1160px] flex-row items-center justify-between">
        <div className="flex flex-row gap-[14px]">
          {editTabs.map((tab, index) => (
            <Button
              key={index}
              onClick={() => {
                setSelectedTab(tab.value);
              }}
              className={`w-[180px] rounded-4xl border border-[#CACACA] py-[12px] font-medium ${tab.value === selectedTab ? "border-[#3D51AF] bg-[#3D51AF] text-white" : "text-[#CACACA]"}`}
            >
              {tab.label}
            </Button>
          ))}
        </div>
        <p className="font-medium"># 이번달 제출 횟수 - 0회</p>
      </div>

      {selectedTab === "one" && (
        <div className="flex flex-row gap-[30px]">
          <SmallCalendar />
          <StatusSelector />
          <ReasonInputCard />
        </div>
      )}
      {selectedTab === "two" && <SubmittedReasonsCard />}
      {selectedTab === "three" && <p>3</p>}
    </div>
  );
}

// # 사유 제출
// 내 사유 제출 현황
// 전체 제출 현황
