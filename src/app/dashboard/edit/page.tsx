"use client";

import Image from "next/image";
import { useState } from "react";
import CircularTabs from "@/components/common/CircularTabs";
import SmallCalendar from "@/components/common/SmallCalendar";
import ReasonInputCard from "@/components/edit_page/ReasonInput";
import StatusSelector from "@/components/edit_page/StatusSelector";
import TotalSubmissions from "@/components/edit_page/TotalSubmissions";
import SubmittedReasonsCard from "@/components/edit_page/SubmittedReasonsCard";

const editTabs = [
  {
    label: "# 사유 제출",
    value: "submitReason",
  },
  {
    label: "내 사유 제출 현황",
    value: "submissionStatus",
  },
  {
    label: "전체 제출 현황",
    value: "totalSubmissions",
  },
];

export default function AbsenceReasonSubmissionPage() {
  const [selectedTab, setSelectedTab] = useState("submitReason");

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
        <CircularTabs
          tabs={editTabs}
          selectedTab={selectedTab}
          onClick={(tab) => setSelectedTab(tab)}
        />

        <p className="font-medium"># 이번달 제출 횟수 - 0회</p>
      </div>

      {selectedTab === "submitReason" && (
        <div className="flex flex-row gap-[30px]">
          <SmallCalendar />
          <StatusSelector />
          <ReasonInputCard />
        </div>
      )}
      {selectedTab === "submissionStatus" && <SubmittedReasonsCard />}
      {selectedTab === "totalSubmissions" && <TotalSubmissions />}
    </div>
  );
}
