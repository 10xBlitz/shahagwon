import { useState } from "react";
import Button from "../common/Button";
import ScheduleCard from "./ScheduleCard";
import OfflineCalendar from "./OfflineCalendar";
import { scheduleCardTemp } from "../../etc/temp";

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
        <div className="mt-[50px] flex flex-col gap-[20px]">
          {scheduleCardTemp.map((schedule, index) => (
            <ScheduleCard
              key={index}
              date={schedule.date}
              timeSlots={schedule.timeSlots}
              name={schedule.name}
              description={schedule.description}
              additionalInfo={schedule.additionalInfo}
            />
          ))}
          <OfflineCalendar
            year={2025}
            month={12}
            selectedDate={new Date(2025, 11, 15)}
          />
        </div>
      )}
    </div>
  );
}

// 1095px w 330px h
