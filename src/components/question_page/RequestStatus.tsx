import Table from "../common/Table";
import Button from "../common/Button";
import { CalendarDays } from "lucide-react";
import { requestStatusTemp } from "@/etc/temp";
import { requestStatusTableConfig } from "@/etc/table_config";
import { useState } from "react";

const branchTabs = [
  { label: "전체 ", value: "entire" },
  { label: "강남점", value: "gangnam_branch" },
  { label: "강남2호점 ", value: "gangnam_2nd_branch" },
  { label: "대치점 ", value: "confrontation_point" },
  { label: "대치3층 ", value: "daechi_3rd_floor" },
  { label: "대치6층", value: "daechi_6th_floor" },
  { label: "송파점", value: "songpa_branch" },
  { label: "대구점", value: "daegu_branch" },
];

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
