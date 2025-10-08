import { useState } from "react";
import { branchTabs } from "@/etc/tabs";
import { CalendarDays } from "lucide-react";
import Table from "@/components/common/Table";
import { requestStatusTemp } from "@/etc/temp";
import SquareTabs from "@/components/common/SquareTabs";
import { requestStatusTableConfig } from "@/etc/tableConfig";
import DateRangePicker from "@/components/common/DateRangePicker";

export default function ApplicationStatus() {
  const [selectedTab, setSelectedTab] = useState(branchTabs[0].value);

  return (
    <div className="mt-[50px] h-auto w-[1166px] rounded-lg bg-white p-[54px]">
      <div className="mb-[16px] flex flex-row gap-[10px]">
        <CalendarDays color="#989898" />
        <p className="text-lg font-medium">질의응답 신청현황</p>
      </div>
      <DateRangePicker />
      <div className="my-[24px] flex flex-row">
        <SquareTabs
          tabs={branchTabs}
          selectedTab={selectedTab}
          onClick={(tab) => {
            setSelectedTab(tab);
          }}
        />
      </div>
      <Table
        columns={requestStatusTableConfig}
        rows={requestStatusTemp}
        hideFooterPagination={true}
        height={408}
        density="compact"
        // className="mb-[52px]"
      />
      {/* <Table
        columns={requestStatusTableConfig}
        rows={requestStatusTemp}
        hideFooterPagination={true}
        height={354}
        density="comfortable"
      /> */}
    </div>
  );
}
