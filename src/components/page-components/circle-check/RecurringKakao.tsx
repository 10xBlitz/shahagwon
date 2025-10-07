import { useState } from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { ChevronDown, Plus } from "lucide-react";
import SquareTabs from "@/components/common/SquareTabs";
import Table from "@/components/common/Table";
import { viewPenaltyHistoryTableConfig } from "@/etc/tableConfig";

const tabs = [
  { label: "전체", value: "all" },
  { label: "매일", value: "daily" },
  { label: "매주", value: "weekly" },
  { label: "매월", value: "monthly" },
];

export default function RecurringKakao() {
  const [selectedTab, setSelectedTab] = useState("all");

  return (
    <div className="flex w-full flex-col">
      <div className="mt-[50px] flex flex-row items-center gap-[20px]">
        <p className="text-lg font-bold">반복 카카오 등록 내역</p>
        <Button
          onClick={() => {}}
          icon={<Plus color="#FFFFFF" size={18} />}
          iconPosition="left"
          className="gap-2 rounded-lg bg-[#0C6CCB] px-[12px] py-[6px] text-sm font-bold text-white"
        >
          추가하기
        </Button>
      </div>
      <div className="mt-[32px] mb-[14px] flex w-full flex-row justify-between">
        <div className="flex w-full max-w-[800px] flex-row items-center gap-[24px]">
          <div className="relative w-full max-w-[350px]">
            <select className="w-full appearance-none rounded border border-[#C3C3C3] py-[8px] hover:border-black"></select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          <Input placeholder="채팅방/내용 검색" />
          <SquareTabs
            tabs={tabs}
            selectedTab={selectedTab}
            onClick={(tab) => {
              setSelectedTab(tab);
            }}
          />
        </div>
        <div className="flex w-auto flex-row items-center gap-[12px]">
          <Button
            onClick={() => {}}
            className="rounded bg-[#FBFCFE] px-[12px] py-[6px] font-semibold text-[#9FA5AC]"
          >
            카카오톡 채팅방 추가하기
          </Button>
          <Button
            onClick={() => {}}
            className="rounded bg-[#FBFCFE] px-[12px] py-[6px] font-semibold text-[#9FA5AC]"
          >
            수정하기
          </Button>
          <Button
            onClick={() => {}}
            className="rounded bg-[#FBFCFE] px-[12px] py-[6px] font-semibold text-[#9FA5AC]"
          >
            삭제하기
          </Button>
        </div>
      </div>
      <Table
        columns={viewPenaltyHistoryTableConfig}
        hideFooterPagination
        height={500}
      />
    </div>
  );
}
