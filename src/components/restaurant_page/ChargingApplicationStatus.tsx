import { useState } from "react";
import Button from "../common/Button";
import DepositHistory from "./DepositHistory";
import RefundApplicationDetails from "./RefundApplicationDetails";
import Refund from "./Refund";

const tabs = [
  {
    label: "입금 내역",
    value: "deposit_history",
  },
  {
    label: "입금 내역(수성점)",
    value: "deposit_history_susung",
  },
  {
    label: "충전 신청 내역",
    value: "refund_application_details",
  },
  {
    label: "환불하기",
    value: "refund",
  },
];

export default function ChargingApplicationStatus() {
  const [selectedTab, setSelectedTab] = useState("deposit_history");

  return (
    <div className="mt-[26px] flex w-full flex-col">
      <div className="flex max-w-[1152px] flex-row border-b border-[#D7D7D7]">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            onClick={() => {
              setSelectedTab(tab.value);
            }}
            className={`px-[16px] py-[14px] text-sm font-black transition-all duration-100 ${selectedTab === tab.value ? "border-b-2 border-[#1C75D2] text-[#1C75D2]" : "text-[#616161]"}`}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      {selectedTab === "deposit_history" && <DepositHistory />}
      {selectedTab === "deposit_history_susung" && <DepositHistory />}
      {selectedTab === "refund_application_details" && (
        <RefundApplicationDetails />
      )}
      {selectedTab === "refund" && <Refund />}
    </div>
  );
}
