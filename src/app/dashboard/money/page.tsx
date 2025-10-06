"use client";

import Image from "next/image";
import { useState } from "react";
import CircularTabs from "@/components/common/CircularTabs";
import RegistrationFeeSettings from "@/components/page-components/money/RegistrationFeeSettings";
import AbsenceStatus from "@/components/page-components/money/AbsenceStatus";
import ContentMenuManagement from "@/components/page-components/money/ContentMenuManagement";
import AdditionalItemSettings from "@/components/page-components/money/AdditionalItemSettings";

const paymentManagementTabs = [
  { label: "걸제 현황", value: "absence_status" },
  { label: "등록비 설정", value: "registration_fee_settings" },
  { label: "컨텐츠 메뉴 관리", value: "content_menu_management" },
  { label: "부가 항목 설정", value: "additional_item_settings" },
];

export default function PaymentManagementPage() {
  const [selectedPaymentManagementTab, setSelectedPaymentManagemenTab] =
    useState(paymentManagementTabs[0].value);

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#F5F5F5] p-[48px]">
      <div className="flex flex-row items-center gap-[12px]">
        <Image
          src="/images/sidebar/off/money_off.svg"
          alt="Chat Icon"
          width={18}
          height={18}
        />
        <h1 className="text-[22px] font-extrabold">결제 관리</h1>
      </div>
      <div className="my-[40px]">
        <CircularTabs
          tabs={paymentManagementTabs}
          selectedTab={selectedPaymentManagementTab}
          onClick={(tab) => setSelectedPaymentManagemenTab(tab)}
        />
      </div>
      {selectedPaymentManagementTab === "absence_status" && <AbsenceStatus />}
      {selectedPaymentManagementTab === "registration_fee_settings" && (
        <RegistrationFeeSettings />
      )}
      {selectedPaymentManagementTab === "content_menu_management" && (
        <ContentMenuManagement />
      )}
      {selectedPaymentManagementTab === "additional_item_settings" && (
        <AdditionalItemSettings />
      )}
    </div>
  );
}
