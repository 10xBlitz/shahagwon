import { useState } from "react";
import BorderlessTabs from "../common/BorderlessTabs";
import RegistrationFeeSetup from "./RegistrationFeeSetup";
import RefundPolicySettings from "./RefundPolicySettings";
import CashReceiptInfoSettings from "./CashReceiptInfoSettings";
import PaymentSettings from "./PaymentSettings";

const registrationFeeTabs = [
  { label: "등록비 설정하기", value: "registration_fee_setup" },
  { label: "환불 정책 설정", value: "refund_policy_settings" },
  { label: "현금 영수증 정보 설정", value: "cash_receipt_info_settings" },
  { label: "결제 설정", value: "payment_settings" },
];

export default function RegistrationFeeSettings() {
  const [selectedRegistrationFeeTab, setSelectedRegistrationFeeTab] = useState(
    "registration_fee_setup",
  );

  return (
    <div className="flex w-full max-w-[1500px] flex-col">
      <BorderlessTabs
        tabs={registrationFeeTabs}
        selectedTab={selectedRegistrationFeeTab}
        onClick={(tab) => setSelectedRegistrationFeeTab(tab)}
        alignment="start"
      />
      <div className="mt-4">
        {selectedRegistrationFeeTab === "registration_fee_setup" && (
          <RegistrationFeeSetup />
        )}
        {selectedRegistrationFeeTab === "refund_policy_settings" && (
          <RefundPolicySettings />
        )}
        {selectedRegistrationFeeTab === "cash_receipt_info_settings" && (
          <CashReceiptInfoSettings />
        )}
        {selectedRegistrationFeeTab === "payment_settings" && (
          <PaymentSettings />
        )}
      </div>
    </div>
  );
}

// TO DO
