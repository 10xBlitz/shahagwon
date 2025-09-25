import { useState } from "react";
import Button from "../common/Button";
import ScheduleCard from "./ScheduleCard";
import RequestStatus from "./RequestStatus";
import { qnaRequestsTemp } from "../../etc/temp";
import OfflineCalendar from "./OfflineApplicationCalendar";
import OfflineApplicationSendInquiry from "./OfflineApplicationSendInquiry";
import OfflineApplicationTimeSelector from "./OfflineApplicationTimeSelector";

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
  const [selectedTab, setSelectedTab] = useState("request");

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
      {selectedTab === "request" && (
        <div className="mt-[50px] flex flex-col gap-[80px]">
          {qnaRequestsTemp.map((request, index) => (
            <div key={index} className="flex flex-col gap-[36px]">
              <ScheduleCard
                key={index}
                date={request.date}
                timeSlots={request.timeSlots}
                name={request.name}
                description={request.description}
                additionalInfo={request.additionalInfo}
              />
              <div className="mb-[44px] flex flex-row gap-[28px]">
                <OfflineCalendar
                  year={request.year}
                  month={request.month}
                  selectedDate={request.selectedDate}
                />
                <OfflineApplicationTimeSelector />
                <OfflineApplicationSendInquiry />
              </div>
              <div className="h-px bg-[#D7D7D7]" />
            </div>
          ))}
        </div>
      )}
      {selectedTab === "status" && (
        <div className="mt-[50px]">
          <RequestStatus />
        </div>
      )}
    </div>
  );
}
