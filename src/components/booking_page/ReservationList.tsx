"use client";

import { useState } from "react";
import Button from "../common/Button";
import SquareTabs from "../common/SquareTabs";
import { historyTabs, reservationBranchTabs } from "@/etc/tabs";
import Table from "../common/Table";
import { reservationListTableConfig } from "@/etc/table_config";

export default function ReservationList() {
  const [selectedHistoryTab, setSelectedHistoryTab] =
    useState(historyTabs[0].value);
  const [selectedBranchTab, setSelectedBranchTab] = useState(reservationBranchTabs[0].value);

  return (
    <div className="mt-[32px] flex w-full max-w-[1500px] flex-col">
      <SquareTabs
        tabs={historyTabs}
        selectedTab={selectedHistoryTab}
        onClick={(tab) => {
          setSelectedHistoryTab(tab);
        }}
      />
      <div className="mt-4 mb-3 flex w-full flex-row items-center justify-between">
        <SquareTabs
          tabs={reservationBranchTabs}
          selectedTab={selectedBranchTab}
          onClick={(tab) => {
            setSelectedBranchTab(tab);
          }}
        />
        <Button
          onClick={() => {}}
          className="rounded bg-[#FBFCFE] px-[16px] py-[8px] text-sm font-bold text-[#9FA5AC]"
        >
          삭제하기
        </Button>
      </div>
      <Table
        columns={reservationListTableConfig}
        height={500}
        density="compact"
        hideFooterPagination
      />
    </div>
  );
}
