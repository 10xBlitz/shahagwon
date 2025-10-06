import { useState } from "react";
import Table from "@/components/common/Table";
import Button from "@/components/common/Button";
import { lunchOrderTemp } from "@/etc/temp";
import SquareTabs from "@/components/common/SquareTabs";
import { branchTabs, lunchSubTabs } from "@/etc/tabs";
import DateRangePicker from "@/components/common/DateRangePicker";
import { lunchOrderTableConfig } from "@/etc/tableConfig";

export default function TotalLunchBoxStatus() {
  const [selectedBranchTab, setSelectedBranchTab] = useState(branchTabs[0].value);
  const [selectedSubTab, setSelectedSubTab] = useState(lunchSubTabs[0].value);

  return (
    <div className="mt-[32px] flex w-full flex-col">
      <DateRangePicker />
      <Button
        onClick={() => {}}
        className="mt-[24px] max-w-[120px] rounded bg-[#DFDFDF] py-[8px] text-[#A3A3A3]"
      >
        조회하기
      </Button>
      <div className="my-[24px]">
        <SquareTabs
          tabs={branchTabs}
          selectedTab={selectedBranchTab}
          onClick={(tab) => {
            setSelectedBranchTab(tab);
          }}
        />
      </div>
      <div className="mb-[24px] flex flex-row">
        <SquareTabs
          tabs={lunchSubTabs}
          selectedTab={selectedSubTab}
          onClick={(tab) => {
            setSelectedSubTab(tab);
          }}
        />
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
