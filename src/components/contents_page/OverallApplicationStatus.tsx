import { useState } from "react";
import Table from "../common/Table";
import { branchTabs } from "@/etc/tabs";
import SquareTabs from "../common/SquareTabs";
import { overallMockExamTableConfig } from "@/etc/table_config";

export default function OverallApplicationStatus() {
  const [selectedBranchTab, setSelectedBranchTab] = useState("entire");

  return (
    <div className="mt-[40px] flex max-w-[1800px] flex-col">
      <div className="mt-[] mb-[32px] flex flex-row">
        <SquareTabs
          tabs={branchTabs}
          selectedTab={selectedBranchTab}
          onClick={(tab) => {
            setSelectedBranchTab(tab);
          }}
        />
      </div>
      <Table
        height={780}
        checkboxSelection
        columns={overallMockExamTableConfig}
      />
    </div>
  );
}
