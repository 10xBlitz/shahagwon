"use client";

import Image from "next/image";
import { useState } from "react";
import CircularTabs from "@/components/common/CircularTabs";
import AllWorkReport from "@/components/attendance_page/AllWorkReport";
import TodayWorkReport from "@/components/attendance_page/TodayWorkReport";
import DaechiSuspiciousList from "@/components/attendance_page/DaechiSuspiciousList";
import WorkScheduleAnalysis from "@/components/attendance_page/WorkScheduleAnalysis";
import AntConsultationManagement from "@/components/attendance_page/AntConsultationManagement";
import Attendance from "@/components/attendance_page/Attendance";

const tabs = [
  { label: "오늘 업무보고", value: "today_work_report" },
  { label: "전체 업무보고", value: "all_work_report" },
  { label: "강남점 출석", value: "gangnam_branch_attendance" },
  { label: "강남2호점 출석", value: "gangnam_branch_2_attendance" },
  { label: "대치점 출석", value: "daechi_branch_attendance" },
  { label: "대치3층 출석", value: "daechi_3rd_floor_attendance" },
  { label: "대치6층 출석", value: "daechi_6th_floor_attendance" },
  { label: "송파점 출석", value: "songpa_branch_attendance" },
  { label: "대구점 출석", value: "daegu_branch_attendance" },
  { label: "순환 일지", value: "circulation_log" },
  { label: "앤트상담 관리", value: "ant_counseling_management" },
  { label: "업무 일시 분석", value: "work_schedule_analysis" },
  { label: "대치점 의심 리스트", value: "daechi_branch_suspicious_list" },
];

export default function TaskManagementPage() {
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
        <h1 className="text-[22px] font-extrabold">업무 관리</h1>
      </div>
      <CircularTabs
        tabs={tabs}
        selectedTab={selectedTab}
        onClick={(tab) => setSelectedTab(tab)}
      />
      {selectedTab === "today_work_report" && <TodayWorkReport />}
      {selectedTab === "all_work_report" && <AllWorkReport />}
      {selectedTab === "gangnam_branch_attendance" && <Attendance />}
      {selectedTab === "gangnam_branch_2_attendance" && <Attendance />}
      {selectedTab === "daechi_branch_attendance" && <Attendance />}
      {selectedTab === "daechi_3rd_floor_attendance" && <Attendance />}
      {selectedTab === "daechi_6th_floor_attendance" && <Attendance />}
      {selectedTab === "songpa_branch_attendance" && <Attendance />}
      {selectedTab === "daegu_branch_attendance" && <Attendance />}
      {selectedTab === "ant_counseling_management" && (
        <AntConsultationManagement />
      )}
      {selectedTab === "work_schedule_analysis" && <WorkScheduleAnalysis />}
      {selectedTab === "daechi_branch_suspicious_list" && (
        <DaechiSuspiciousList />
      )}
    </div>
  );
}
