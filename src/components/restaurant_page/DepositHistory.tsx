// Should be refactored to take in data props
// This will be reusable in ChargingApplicationStatus

import { useState } from "react";
import Button from "../common/Button";
import Table from "../common/Table";
import { depositHistoryTemp } from "@/etc/temp";
import { depositHistoryTableConfig } from "@/etc/table_config";

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
        {subTabs.map((tab, index) => (
          <Button
            key={index}
            onClick={() => {
              setSelectedSubTab(tab.value);
            }}
            className={`border p-3 text-sm font-medium ${index === 0 ? "rounded-l" : index === subTabs.length - 1 ? "rounded-r" : ""} ${selectedSubTab === tab.value ? "border-[#D1D6DD] bg-[#EDF4FC] text-[#1C75D2]" : "border-[#DFDFDF] text-[#747474]"}`}
          >
            {tab.label}
          </Button>
        ))}
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
