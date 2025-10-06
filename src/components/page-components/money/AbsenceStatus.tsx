import { useState } from "react";
import Table from "@/components/common/Table";
import { branchTabs } from "@/etc/tabs";
import SquareTabs from "@/components/common/SquareTabs";
import { paymentStatusTemp } from "@/etc/temp";
import { paymentStatusTableConfig } from "@/etc/tableConfig";
import SearchBar from "@/components/common/SearchBar";

export default function AbsenceStatus() {
  const [selectedBranchTab, setSelectedBranchTab] = useState(
    branchTabs[0].value,
  );

  return (
    <div className="flex w-full flex-col">
      <SearchBar className="max-w-[1750px]" placeHolder="" />
      <div className="my-[22px]">
        <SquareTabs
          tabs={branchTabs}
          selectedTab={selectedBranchTab}
          onClick={(tab) => {
            setSelectedBranchTab(tab);
          }}
        />
      </div>
      <div className="flex w-full max-w-[1750px] flex-row gap-[32px]">
        <div className="w-full max-w-[1270px]">
          <Table
            rows={paymentStatusTemp}
            columns={paymentStatusTableConfig}
            height={860}
            hideFooter
          />
        </div>
        <div className="h-auto w-full max-w-[450px] bg-white"></div>
      </div>
    </div>
  );
}
