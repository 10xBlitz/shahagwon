import { useState } from "react";
import Table from "../common/Table";
import { branchTabs } from "@/etc/tabs";
import SquareTabs from "../common/SquareTabs";
import { allSuggestionTemp } from "@/etc/temp";
import { allSuggestionTableConfig } from "@/etc/table_config";

export default function AllSuggestions() {
  const [selectedBranchTab, setSelectedBranchTab] = useState("entire");

  return (
    <div className="mt-[38px] flex w-full max-w-[1200px] flex-col">
      <div className="mb-[18px] flex flex-row items-center justify-between">
        <p className="text-sm text-[#3D51AF]">
          처리현황 변경시 꼭! 확인답변, 완료답변에 상세내용 적어주세요. 학생한테
          전달됩니다.
        </p>
        <p className="text-sm">2025-9-26</p>
      </div>
      <div className="mb-3">
        <SquareTabs
          tabs={branchTabs}
          selectedTab={selectedBranchTab}
          onClick={(tab) => {
            setSelectedBranchTab(tab);
          }}
        />
      </div>
      <Table
        rows={allSuggestionTemp}
        columns={allSuggestionTableConfig}
        hideFooterPagination
        height={760}
      />
      <p className="mt-2 text-sm font-medium">
        * 처리현황은 (미확인, 확인, 처리완료) 세단계로 표기됩니다.
      </p>
      <p className="text-sm font-medium">
        * 경과일은 작성시간 기준 24시간마다 1일이 증가합니다.
      </p>
    </div>
  );
}
