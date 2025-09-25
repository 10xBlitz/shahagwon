import { useState } from "react";
import Button from "../common/Button";
import { branchTabs, lunchSubTabs, subTabs } from "@/etc/tabs";
import Table from "../common/Table";
import { lunchOrderTableConfig } from "@/etc/table_config";
import { lunchOrderTemp } from "@/etc/temp";

export default function TotalLunchBoxStatus() {
  const [selectedTab, setSelectedTab] = useState("entire");
  const [selectedSubTab, setSelectedSubTab] = useState("entire");

  return (
    <div className="mt-[32px] flex w-full flex-col">
      <div className="my-[24px] flex flex-row">
        {branchTabs.map((tab, index) => (
          <Button
            key={index}
            onClick={() => {
              setSelectedTab(tab.value);
            }}
            className={`border p-3 text-sm font-medium ${index === 0 ? "rounded-l" : index === branchTabs.length - 1 ? "rounded-r" : ""} ${selectedTab === tab.value ? "border-[#D1D6DD] bg-[#EDF4FC] text-[#1C75D2]" : "border-[#DFDFDF] text-[#747474]"}`}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      <div className="mb-[24px] flex flex-row">
        {lunchSubTabs.map((tab, index) => (
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
        columns={lunchOrderTableConfig}
        rows={lunchOrderTemp}
        hideFooterPagination={true}
        height={408}
        density="compact"
      />
    </div>
  );
}
