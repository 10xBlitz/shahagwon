import { useState } from "react";
import SquareTabs from "../common/SquareTabs";
import { branchTabs } from "@/etc/tabs";
import Button from "../common/Button";
import Table from "../common/Table";
import { printManagementTableConfig } from "@/etc/table_config";

const paymentStatusTabs = [
  {
    label: "미결제",
    value: "unpaid",
  },
  {
    label: "결제 완료",
    value: "payment_complete",
  },
];

export default function PrintManagement() {
  const [selectedPaymentStatusTab, setSelectedPaymentStatusTab] =
    useState("unpaid");
  const [selectedBranchTab, setSelectedBranchTab] = useState("entire");

  return (
    <div className="mt-[50px] flex max-w-[1700px] flex-col">
      <div className="mb-[12px] flex w-full flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-[32px]">
          <SquareTabs
            tabs={paymentStatusTabs}
            selectedTab={selectedPaymentStatusTab}
            onClick={(tab) => setSelectedPaymentStatusTab(tab)}
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
            등록비 설정하기
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
        columns={printManagementTableConfig}
        hideFooterPagination
        checkboxSelection
        height={600}
      />
    </div>
  );
}
