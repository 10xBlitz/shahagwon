"use client";

import { useState } from "react";
import BorderlessTabs from "@/components/common/BorderlessTabs";
import ApproveSchedule from "./ApproveSchedule";
import ViewAsTable from "./ViewAsTable";

const regularScheduleTabs = [
  { label: "승인하기", value: "approve" },
  { label: "표로 보기", value: "view_as_table" },
];

export default function RegularScheduleManagement() {
  const [selectedScheduleTab, setSelectedScheduleTab] = useState(
    regularScheduleTabs[0].value,
  );

  return (
    <div className="flex w-full flex-col items-center">
      <div className="mt-[36px] w-full max-w-[900px]">
        <BorderlessTabs
          tabs={regularScheduleTabs}
          selectedTab={selectedScheduleTab}
          onClick={setSelectedScheduleTab}
          alignment={"center"}
        />
      </div>
      {selectedScheduleTab === "approve" && <ApproveSchedule />}
      {selectedScheduleTab === "view_as_table" && <ViewAsTable />}
    </div>
  );
}
