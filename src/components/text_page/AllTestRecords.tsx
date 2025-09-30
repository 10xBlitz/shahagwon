"use client";

import { useState } from "react";
import Table from "../common/Table";
import { branchTabs } from "@/etc/tabs";
import SquareTabs from "../common/SquareTabs";
import { allTestRecordsTemp } from "@/etc/temp";
import { allTestRecordsTableConfig } from "@/etc/table_config";

export default function AllTestRecords() {
  const [selectedTab, setSelectedTab] = useState("entire");

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
      <div className="mt-[28px]">
        <Table
          rows={allTestRecordsTemp}
          columns={allTestRecordsTableConfig}
          hideFooterPagination
          density="compact"
          height={410}
        />
      </div>
    </div>
  );
}
