import { useState } from "react";
import AccountTransferStatus from "./AccountTransferStatus";
import CardPaymentStatus from "./CardPaymentStatus";
import PrintManagement from "./PrintManagement";
import BorderlessTabs from "../common/BorderlessTabs";

const paymentSettingsTabs = [
  { label: "계좌이체 현황", value: "account_transfer_status" },
  { label: "카드결제 현황", value: "card_payment_status" },
  { label: "프린트 관리", value: "print_management" },
];

export default function PaymentSettings() {
  const [selectedPaymentTab, setSelectedPaymentTab] = useState(
    "account_transfer_status",
  );

  return (
    <div className="flex flex-col">
      <div className="flex max-w-[1500px] flex-row">
        <BorderlessTabs
          tabs={paymentSettingsTabs}
          selectedTab={selectedPaymentTab}
          onClick={(tab) => {
            setSelectedPaymentTab(tab);
          }}
          alignment="start"
        />
      </div>
      {selectedPaymentTab === "account_transfer_status" && (
        <AccountTransferStatus />
      )}
      {selectedPaymentTab === "card_payment_status" && <CardPaymentStatus />}
      {selectedPaymentTab === "print_management" && <PrintManagement />}
    </div>
  );
}
