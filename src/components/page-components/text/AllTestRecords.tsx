"use client";

import { useState } from "react";
import Table from "@/components/common/Table";
import { branchTabs } from "@/etc/tabs";
import SquareTabs from "@/components/common/SquareTabs";
import { allTestRecordsTemp } from "@/etc/temp";
import { allTestRecordsTableConfig } from "@/etc/tableConfig";
import DateRangePicker from "@/components/common/DateRangePicker";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

export default function AllTestRecords() {
  const [selectedTab, setSelectedTab] = useState(branchTabs[0].value);

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
      <div className="mb-[12px] flex w-full flex-row items-center justify-between">
        <SquareTabs
          tabs={branchTabs}
          selectedTab={selectedTab}
          onClick={(tab) => {
            setSelectedTab(tab);
          }}
        />
        <Input placeholder="이름을 검색하세요" />
      </div>
      <Table
        rows={allTestRecordsTemp}
        columns={allTestRecordsTableConfig}
        hideFooterPagination
        density="compact"
        height={410}
      />
    </div>
  );
}
