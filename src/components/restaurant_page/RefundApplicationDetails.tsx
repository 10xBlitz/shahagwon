import { useState } from "react";
import Table from "../common/Table";
import SquareTabs from "../common/SquareTabs";
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
        <SquareTabs
          tabs={subTabs}
          selectedTab={selectedSubTab}
          onClick={(tab) => setSelectedSubTab(tab)}
        />
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
