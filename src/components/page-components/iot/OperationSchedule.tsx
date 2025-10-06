import { branchTabs } from "@/etc/tabs";
import { useState } from "react";
import Button from "@/components/common/Button";
import SquareTabs from "@/components/common/SquareTabs";
import Table from "@/components/common/Table";
import { operationScheduleTableConfig } from "@/etc/tableConfig";

const activeTabs = [
  { label: "활성", value: "active" },
  { label: "비활성", value: "inactive" },
];

export default function OperationSchedule() {
  const [selectedActiveTab, setSelectedActiveTab] = useState(activeTabs[0].value);
  const [selectedBranchTab, setSelectedBranchTab] = useState(branchTabs[0].value);

  return (
    <div className="mt-[50px] flex flex-col">
      <div className="mb-[32px] flex flex-row items-center gap-[18px]">
        <p className="font-extrabold">반복 창문 작동 통록</p>
        <Button
          onClick={() => {}}
          hasPlus
          className="gap-2 rounded-lg bg-[#0C6CCB] px-[12px] py-[6px] text-sm font-bold text-white"
        >
          추가하기
        </Button>
      </div>
      <div className="mb-[32px] flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-[10px]">
          <SquareTabs
            tabs={activeTabs}
            selectedTab={selectedActiveTab}
            onClick={(tab) => {
              setSelectedActiveTab(tab);
            }}
          />
          <SquareTabs
            tabs={branchTabs}
            selectedTab={selectedBranchTab}
            onClick={(tab) => {
              setSelectedBranchTab(tab);
            }}
          />
        </div>
        <div className="flex flex-row gap-4">
          <Button
            onClick={() => {}}
            className="rounded-sm bg-[#FBFCFE] px-[14px] py-[8px] text-sm font-semibold"
          >
            사전 업로드
          </Button>
          <Button
            onClick={() => {}}
            className="rounded-sm bg-[#FBFCFE] px-[14px] py-[8px] text-sm font-semibold"
          >
            삭제하기
          </Button>
        </div>
      </div>
      <Table
        columns={operationScheduleTableConfig}
        hideFooterPagination
        height={400}
      />
    </div>
  );
}
