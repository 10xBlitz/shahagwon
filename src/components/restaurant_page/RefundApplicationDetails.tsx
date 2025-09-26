import { useState } from "react";
import Button from "../common/Button";
import Table from "../common/Table";
import { chargeApplicationTemp } from "@/etc/temp";
import { chargeApplicationTableConfig } from "@/etc/table_config";

const subTabs = [
  {
    label: "매칭",
    value: "matching",
  },
  {
    label: "비매칭",
    value: "non_matching",
  },
];

export default function RefundApplicationDetails() {
  const [selectedSubTab, setSelectedSubTab] = useState("matching");

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
        rows={chargeApplicationTemp}
        columns={chargeApplicationTableConfig}
        className="max-w-[1500px]"
        density="standard"
        height={560}
      />
    </div>
  );
}
