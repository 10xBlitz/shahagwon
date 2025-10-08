import { useState } from "react";
import RequestQna from "./RequestQna";
import Button from "@/components/common/Button";
import ApplicationStatus from "./ApplicationStatus";

const offlineApplicationTabs = [
  {
    label: "질의응답 신청",
    value: "request",
  },
  {
    label: "신청현황",
    value: "status",
  },
];

export default function OfflineApplication() {
  const [selectedTab, setSelectedTab] = useState(
    offlineApplicationTabs[0].value,
  );

  return (
    <div className="mt-2 flex flex-col items-center">
      <div className="flex flex-row gap-[24px]">
        {offlineApplicationTabs.map((tab, index) => (
          <Button
            key={index}
            onClick={() => {
              setSelectedTab(tab.value);
            }}
            className={`w-[154px] py-[20px] text-lg font-medium ${tab.value === selectedTab ? "border-b-3 border-[#4B77FF] text-[#4B77FF]" : "border-b-2 border-[#B1B1B1] text-[#747474]"}`}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      {selectedTab === "request" && <RequestQna />}
      {selectedTab === "status" && <ApplicationStatus />}
    </div>
  );
}
