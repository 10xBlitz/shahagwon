import { useState } from "react";
import Table from "../common/Table";
import Button from "../common/Button";
import { branchTabs } from "@/etc/tabs";
import { totalSubmissionsTableConfig } from "@/etc/table_config";
import { totalSubmissionsTemp } from "@/etc/temp";

export default function TotalSubmissions() {
  const [selectedTab, setSelectedTab] = useState("entire");

  return (
    <div className="">
      <div className="mb-[26px] flex flex-row">
        {branchTabs.map((tab, index) => (
          <Button
            key={index}
            onClick={() => {
              setSelectedTab(tab.value);
            }}
            className={`border p-3 text-sm font-medium ${index === 0 ? "rounded-l" : index === branchTabs.length - 1 ? "rounded-r" : ""} ${selectedTab === tab.value ? "border-[#D1D6DD] bg-[#EDF4FC] text-[#1C75D2]" : "border-[#DFDFDF] bg-white text-[#747474]"}`}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      <Table
        columns={totalSubmissionsTableConfig}
        rows={totalSubmissionsTemp}
        hideFooterPagination={true}
        height={324}
        className="max-w-[1500px]"
        toolbar
      />
    </div>
  );
}
