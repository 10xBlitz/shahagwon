"use client";

import Image from "next/image";
import { useState } from "react";
import { TabItem } from "@/types/types";
import CircularTabs from "@/components/common/CircularTabs";
import MockExamApplication from "@/components/contents_page/MockExamApplication";
import MyApplicationStatus from "@/components/contents_page/MyApplicationStatus";
import MockExamMenuManagement from "@/components/contents_page/MockExamMenuManagement";
import OverallApplicationStatus from "@/components/contents_page/OverallApplicationStatus";

const contentsTabs: TabItem[] = [
  { label: "모의고사 신청", value: "mock_exam_application" },
  { label: "나의 신청 현황", value: "my_application_status" },
  { label: "전체 신청 현황", value: "overall_application_status" },
  { label: "모의고사 매뉴 관리", value: "mock_exam_menu_management" },
];

export default function MockExamApplicationPage() {
  const [selectedTab, setSelectedTab] = useState("mock_exam_application");

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#F5F5F5] p-[48px]">
      <div className="mb-[28px] flex flex-row items-center gap-[12px]">
        <Image
          src="/images/sidebar/off/contents_off.svg"
          alt="Chat Icon"
          width={20}
          height={20}
        />
        <h1 className="text-[22px] font-extrabold">모의고사 신청</h1>
      </div>
      <CircularTabs
        tabs={contentsTabs}
        selectedTab={selectedTab}
        onClick={(tab) => {
          setSelectedTab(tab);
        }}
      />
      {selectedTab === "mock_exam_application" && <MockExamApplication />}
      {selectedTab === "my_application_status" && <MyApplicationStatus />}
      {selectedTab === "overall_application_status" && (
        <OverallApplicationStatus />
      )}
      {selectedTab === "mock_exam_menu_management" && (
        <MockExamMenuManagement />
      )}
    </div>
  );
}
