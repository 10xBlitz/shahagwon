import { useState } from "react";
import Input from "../common/Input";
import Table from "../common/Table";
import Button from "../common/Button";
import { branchTabs } from "@/etc/tabs";
import SquareTabs from "../common/SquareTabs";
import { overallMockExamTableConfig } from "@/etc/table_config";
import { ChevronDown } from "lucide-react";

export default function OverallApplicationStatus() {
  const [selectedBranchTab, setSelectedBranchTab] = useState(
    branchTabs[0].value,
  );

  return (
    <div className="mt-[40px] flex max-w-[1800px] flex-col">
      <div className="relative w-full max-w-[350px]">
        <select className="w-full appearance-none rounded border border-[#C3C3C3] py-[8px] hover:border-black"></select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
      <div className="mt-[24px] mb-[32px] flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-[30px]">
          <SquareTabs
            tabs={branchTabs}
            selectedTab={selectedBranchTab}
            onClick={(tab) => {
              setSelectedBranchTab(tab);
            }}
          />
          <Input placeholder="이름 검색" />
          <Button
            onClick={() => {}}
            className="rounded bg-[#E2EEFB] px-[14px] py-[8px] text-sm font-semibold text-[#12467A] hover:bg-[#C6DFF7]"
          >
            단체 메시지 보내기
          </Button>
        </div>
        <div className="flex flex-row items-center gap-[12px]">
          <Button
            onClick={() => {}}
            className="rounded bg-[#FBFCFE] px-[14px] py-[8px] text-sm font-semibold text-[#9FA5AC]"
          >
            취소시키기
          </Button>
          <Button
            onClick={() => {}}
            className="rounded bg-[#FBFCFE] px-[14px] py-[8px] text-sm font-semibold text-[#9FA5AC]"
          >
            추가하기
          </Button>
        </div>
      </div>
      <Table
        height={780}
        checkboxSelection
        columns={overallMockExamTableConfig}
      />
    </div>
  );
}
