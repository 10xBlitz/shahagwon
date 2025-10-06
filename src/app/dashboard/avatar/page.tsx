"use client";

import Image from "next/image";
import { useState } from "react";
import CircularTabs from "@/components/common/CircularTabs";
import SeatingChart from "@/components/page-components/avatar/SeatingChart";
import AllStudentInfo from "@/components/page-components/avatar/AllStudentInfo";
import ViewPenaltyHistory from "@/components/page-components/avatar/ViewPenaltyHistory";
import WinterSeatManagement from "@/components/page-components/avatar/WinterSeatManagement";
import WaitingListManagement from "@/components/page-components/avatar/WaitingListManagement";
import NewWithdrawalSeatChange from "@/components/page-components/avatar/NewWithdrawalSeatChange";
import RegularScheduleManagement from "@/components/page-components/avatar/RegularScheduleManagement";

const studentInfoTabs = [
  { label: "전체 학생정보", value: "all_student-info" },
  { label: "좌석표", value: "seating_chart" },
  { label: "신규/탈원/자리이동", value: "new_withdrawal_seat_change" },
  { label: "정기일정 관리", value: "regular_schedule_management" },
  { label: "벌점내역 보기", value: "view_penalty_history" },
  { label: "대기자 관리", value: "waiting_list_management" },
  { label: "원터 좌석 관리", value: "winter_seat_management" },
];

export default function StudentInformationPage() {
  const [selectedTab, setSelectedTab] = useState(studentInfoTabs[0].value);

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#F5F5F5] p-[48px]">
      <div className="mb-[28px] flex flex-row items-center gap-[12px]">
        <Image
          src="/images/sidebar/off/avatar_off.svg"
          alt="Chat Icon"
          width={20}
          height={20}
        />
        <h1 className="text-[22px] font-extrabold">학생정보</h1>
      </div>
      <CircularTabs
        tabs={studentInfoTabs}
        selectedTab={selectedTab}
        onClick={(tab) => {
          setSelectedTab(tab);
        }}
      />

      {selectedTab === "all_student-info" && <AllStudentInfo />}
      {selectedTab === "seating_chart" && <SeatingChart />}
      {selectedTab === "new_withdrawal_seat_change" && (
        <NewWithdrawalSeatChange />
      )}
      {selectedTab === "regular_schedule_management" && (
        <RegularScheduleManagement />
      )}
      {selectedTab === "view_penalty_history" && <ViewPenaltyHistory />}
      {selectedTab === "waiting_list_management" && <WaitingListManagement />}
      {selectedTab === "winter_seat_management" && <WinterSeatManagement />}
    </div>
  );
}
