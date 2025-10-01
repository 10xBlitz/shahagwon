// Should be refactored to take in data props
// This will be reusable in ChargingApplicationStatus

import { useState } from "react";
import Input from "../common/Input";
import Table from "../common/Table";
import SquareTabs from "../common/SquareTabs";
import { depositHistoryTemp } from "@/etc/temp";
import { depositHistoryTableConfig } from "@/etc/table_config";
import Button from "../common/Button";

const subTabs = [
  {
    label: "전체",
    value: "all",
  },
  {
    label: "비매칭",
    value: "non_matching",
  },
  {
    label: "수동매칭",
    value: "manual_matching",
  },
];

export default function DepositHistory() {
  const [selectedSubTab, setSelectedSubTab] = useState(subTabs[0].value);

  return (
    <div className="mt-[32px] w-full max-w-[1500px]">
      <div className="mb-[12px] flex w-full flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-[36px]">
          <SquareTabs
            tabs={subTabs}
            selectedTab={selectedSubTab}
            onClick={(tab) => {
              setSelectedSubTab(tab);
            }}
          />
          <Input placeholder="입금자명" />
        </div>
        <div className="flex flex-row items-center gap-2">
          <Button
            onClick={() => {}}
            className="rounded bg-[#FBFCFE] px-[12px] py-[8px] text-sm font-bold text-[#9FA5AC]"
          >
            비활성화시키기
          </Button>
          <Button
            onClick={() => {}}
            className="rounded bg-[#FBFCFE] px-[12px] py-[8px] text-sm font-bold text-[#9FA5AC]"
          >
            수동 매칭시키기
          </Button>
        </div>
      </div>
      <Table
        rows={depositHistoryTemp}
        columns={depositHistoryTableConfig}
        density="compact"
        hideFooterPagination
        height={560}
      />
    </div>
  );
}
