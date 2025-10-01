"use client";

import { useState } from "react";
import Input from "../common/Input";
import Table from "../common/Table";
import Button from "../common/Button";
import { branchTabs } from "@/etc/tabs";
import SquareTabs from "../common/SquareTabs";
import { assignmentPerformanceTemp } from "@/etc/temp";
import DateRangePicker from "../common/DateRangePicker";
import { assignmentPerformanceTableConfig } from "@/etc/table_config";

const statusTabs = [
  { label: "전체", value: "all" },
  { label: "완료", value: "completed" },
  { label: "미완료", value: "incomplete" },
];

export default function AssignmentPerformanceHistory() {
  const [selectedTab, setSelectedTab] = useState(branchTabs[0].value);
  const [selectedStatusTab, setSelectedStatusTab] = useState(statusTabs[0].value);

  return (
    <div className="w-full max-w-[1200px]">
      <div className="mt-[28px]">
        <DateRangePicker />
      </div>
      <Button
        onClick={() => {}}
        className="mt-[24px] mb-[12px] w-full max-w-[120px] rounded bg-[#DFDFDF] py-[8px] text-[#A3A3A3]"
      >
        조회하기
      </Button>
      <SquareTabs
        tabs={branchTabs}
        selectedTab={selectedTab}
        onClick={(tab) => {
          setSelectedTab(tab);
        }}
      />
      <div className="my-[12px] flex w-full flex-row items-center justify-between">
        <SquareTabs
          tabs={statusTabs}
          selectedTab={selectedStatusTab}
          onClick={(tab) => {
            setSelectedStatusTab(tab);
          }}
        />
        <Input placeholder="이름을 검색하세요" />
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
