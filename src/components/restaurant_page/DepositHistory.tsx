// Should be refactored to take in data props
// This will be reusable in ChargingApplicationStatus

import { useState } from "react";
import Table from "../common/Table";
import { depositHistoryTemp } from "@/etc/temp";
import { depositHistoryTableConfig } from "@/etc/table_config";
import SquareTabs from "../common/SquareTabs";

const subTabs = [
  {
    label: "전체",
    value: "entire",
  },
  {
    label: "비매칭",
    value: "non_matching",
  },
  {
    label: "수동매칭",
    value: "manual_matching",
  },
];

export default function DepositHistory() {
  const [selectedSubTab, setSelectedSubTab] = useState("entire");

  return (
    <div className="mt-[32px]">
      <div className="mb-[12px] flex flex-row">
        <SquareTabs
          tabs={subTabs}
          selectedTab={selectedSubTab}
          onClick={(tab) => {
            setSelectedSubTab(tab);
          }}
        />
      </div>
      <Table
        rows={depositHistoryTemp}
        columns={depositHistoryTableConfig}
        density="compact"
        className="max-w-[1500px]"
        hideFooterPagination
        height={560}
      />
    </div>
  );
}
