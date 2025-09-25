import { useState } from "react";
import Table from "../common/Table";
import { branchTabs } from "@/etc/tabs";
import Button from "../common/Button";
import { CalendarDays } from "lucide-react";
import { requestStatusTemp } from "@/etc/temp";
import { requestStatusTableConfig } from "@/etc/table_config";

export default function RequestStatus() {
  const [selectedTab, setSelectedTab] = useState("entire");

  return (
    <div className="h-auto w-[1166px] rounded-lg bg-white p-[54px]">
      <div className="flex flex-row gap-[10px]">
        <CalendarDays color="#989898" />
        <p className="text-lg font-medium">질의응답 신청현황</p>
      </div>
      <div className="my-[24px] flex flex-row">
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
        columns={requestStatusTableConfig}
        rows={requestStatusTemp}
        hideFooterPagination={true}
        height={408}
        density="compact"
        className="mb-[52px]"
      />
      <Table
        columns={requestStatusTableConfig}
        rows={requestStatusTemp}
        hideFooterPagination={true}
        height={354}
        density="comfortable"
      />
    </div>
  );
}
