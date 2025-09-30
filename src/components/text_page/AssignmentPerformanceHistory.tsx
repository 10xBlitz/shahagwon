"use client";

import { useState } from "react";
import Table from "../common/Table";
import { branchTabs } from "@/etc/tabs";
import SquareTabs from "../common/SquareTabs";
import { assignmentPerformanceTemp } from "@/etc/temp";
import { assignmentPerformanceTableConfig } from "@/etc/table_config";

const statusTabs = [
  { label: "전체", value: "all" },
  { label: "완료", value: "completed" },
  { label: "미완료", value: "incomplete" },
];

export default function AssignmentPerformanceHistory() {
  const [selectedTab, setSelectedTab] = useState("entire");
  const [selectedStatusTab, setSelectedStatusTab] = useState("all");

  return (
    <div className="w-full max-w-[1200px]">
      <div className="mt-[28px]">
        <SquareTabs
          tabs={branchTabs}
          selectedTab={selectedTab}
          onClick={(tab) => {
            setSelectedTab(tab);
          }}
        />
      </div>
      <div className="mt-[12px]">
        <SquareTabs
          tabs={statusTabs}
          selectedTab={selectedStatusTab}
          onClick={(tab) => {
            setSelectedStatusTab(tab);
          }}
        />
      </div>
      <div className="mt-[12px]">
        <Table
          rows={assignmentPerformanceTemp}
          columns={assignmentPerformanceTableConfig}
          hideFooterPagination
          density="compact"
          height={410}
        />
      </div>
    </div>
  );
}
