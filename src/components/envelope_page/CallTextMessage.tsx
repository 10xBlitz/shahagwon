import { useState } from "react";
import Table from "../common/Table";
import { branchTabs } from "@/etc/tabs";
import SquareTabs from "../common/SquareTabs";
import { callTextMessageTemp } from "@/etc/temp";
import { callTextMessageTableConfig } from "@/etc/table_config";

const communicationTabs = [
  {
    label: "전체",
    value: "all",
  },
  {
    label: "문자",
    value: "text",
  },
  {
    label: "통화",
    value: "call",
  },
];

export default function CallTextMessage() {
  const [selectedBranchTab, setSelectedBranchTab] = useState(branchTabs[0].value);
  const [selectedCommunicationTab, setSelectedCommunicationTab] =
    useState(communicationTabs[0].value);

  return (
    <div className="mt-[54px] max-w-[1700px]">
      <div className="flex flex-row justify-between">
        <div className="mb-[16px] flex flex-row">
          <SquareTabs
            tabs={branchTabs}
            selectedTab={selectedBranchTab}
            onClick={(tab) => setSelectedBranchTab(tab)}
          />
        </div>
        <div className="mb-[16px] flex flex-row">
          <SquareTabs
            tabs={communicationTabs}
            selectedTab={selectedCommunicationTab}
            onClick={(tab) => setSelectedCommunicationTab(tab)}
          />
        </div>
      </div>
      <Table
        rows={callTextMessageTemp}
        columns={callTextMessageTableConfig}
        density="compact"
        hideFooterPagination
        height={560}
      />
    </div>
  );
}
