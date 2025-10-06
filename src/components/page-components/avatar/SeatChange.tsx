import { useState } from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import SquareTabs from "@/components/common/SquareTabs";
import { branchTabs, completionStatusTabs } from "@/etc/tabs";

export default function SeatChange() {
  const [selectedCompletionStatus, setSelectedCompletionStatus] = useState(
    completionStatusTabs[0].value,
  );
  const [selectedBranch, setSelectedBranch] = useState(branchTabs[0].value);

  return (
    <div className="mt-[24px] flex w-full flex-col gap-[20px]">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-[36px]">
          <SquareTabs
            tabs={completionStatusTabs}
            selectedTab={selectedCompletionStatus}
            onClick={setSelectedCompletionStatus}
          />
          <SquareTabs
            tabs={branchTabs}
            selectedTab={selectedBranch}
            onClick={setSelectedBranch}
          />
          <Input placeholder="이름 검색" />
        </div>
        <div className="flex flex-row items-center gap-[16px]">
          <Button
            onClick={() => {}}
            className="rounded bg-[#FBFCFE] px-[12px] py-[6px] text-sm font-semibold tracking-tight text-[#9FA5AC]"
          >
            좌석 사진 업로드
          </Button>
          <Button
            onClick={() => {}}
            className="rounded bg-[#FBFCFE] px-[12px] py-[6px] text-sm font-semibold tracking-tight text-[#9FA5AC]"
          >
            삭제하기
          </Button>
        </div>
      </div>
    </div>
  );
}
