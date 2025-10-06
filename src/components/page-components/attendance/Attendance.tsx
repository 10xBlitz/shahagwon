import { useState } from "react";
import BorderlessTabs from "@/components/common/BorderlessTabs";
import AttendanceCheck from "./AttendanceCheck";
import TodayPenaltyPoints from "./TodayPenaltyPoints";
import AllEntryRecords from "./AllEntryRecords";
import NetStudyTime from "./NetStudyTime";
import NetStudyTimeRange from "./NetStudyTimeRange";

const attendanceTabs = [
  {
    label: "출석 체크",
    value: "attendance_check",
  },
  {
    label: "오늘의 벌점",
    value: "today_penalty_points",
  },
  {
    label: "전체 출입기록",
    value: "all_entry_records",
  },
  {
    label: "순 공부시간",
    value: "net_study_time",
  },
  {
    label: "순 공부시간 범위",
    value: "net_study_time_range",
  },
];

export default function Attendance() {
  const [selectedAttendanceTab, setSelectedAttendanceTab] =
    useState(attendanceTabs[0].value);

  return (
    <div className="flex flex-col">
      <div className="mt-[32px] mb-[24px]">
        <BorderlessTabs
          tabs={attendanceTabs}
          selectedTab={selectedAttendanceTab}
          onClick={(tab) => setSelectedAttendanceTab(tab)}
          alignment="start"
        />
      </div>
      {selectedAttendanceTab === "attendance_check" && <AttendanceCheck />}
      {selectedAttendanceTab === "today_penalty_points" && (
        <TodayPenaltyPoints />
      )}
      {selectedAttendanceTab === "all_entry_records" && <AllEntryRecords />}
      {selectedAttendanceTab === "net_study_time" && <NetStudyTime />}
      {selectedAttendanceTab === "net_study_time_range" && (
        <NetStudyTimeRange />
      )}
    </div>
  );
}
