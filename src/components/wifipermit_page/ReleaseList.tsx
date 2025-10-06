import { useState } from "react";
import Button from "../common/Button";
import { branchTabs } from "@/etc/tabs";
import SquareTabs from "../common/SquareTabs";
import Table from "../common/Table";
import { wifiReleaseListTableConfig } from "@/etc/tableConfig";
import DateRangePicker from "../common/DateRangePicker";

export default function ReleaseList() {
  const [selectedBranchTab, setSelectedBranch] = useState(branchTabs[0].value);

  return (
    <div className="mt-[32px] flex w-full max-w-[1500px] flex-col items-start">
      <DateRangePicker />
      <Button
        onClick={() => {}}
        className="mt-[24px] rounded bg-[#E0E0E0] px-[32px] py-[6px] font-medium text-[#A2A2A2]"
      >
        조회하기
      </Button>
      <div className="flex flex-row justify-between py-[25px]">
        <SquareTabs
          tabs={branchTabs}
          selectedTab={selectedBranchTab}
          onClick={(tab) => {
            setSelectedBranch(tab);
          }}
        />
      </div>
      <Table
        columns={wifiReleaseListTableConfig}
        hideFooterPagination
        height={400}
      />
    </div>
  );
}
