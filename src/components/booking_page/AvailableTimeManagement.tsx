"use client";

import { useState } from "react";
import Button from "../common/Button";
import TimeSlotGrid from "../common/TimeSlotGrid";

const branches = [
  { label: "강남점", value: "gangnam" },
  { label: "대치점", value: "daechi" },
  { label: "분당점", value: "bundang" },
  { label: "송파점", value: "songpa" },
  { label: "대구점", value: "daegu" },
];

const consultationTypes = [
  { label: "방문상담", value: "in_person" },
  { label: "전화상담", value: "phone" },
];

const timeSlots = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
];

export default function AvailableTimeManagement() {
  const [selectedBranch, setSelectedBranch] = useState("daegu");
  const [selectedConsultationType, setSelectedConsultationType] =
    useState("phone");
  const [weekdayTimes, setWeekdayTimes] = useState<string[]>([]);
  const [saturdayTimes, setSaturdayTimes] = useState<string[]>([]);
  const [sundayTimes, setSundayTimes] = useState<string[]>([]);

  const toggleTime = (time: string, day: "weekday" | "saturday" | "sunday") => {
    const setters = {
      weekday: setWeekdayTimes,
      saturday: setSaturdayTimes,
      sunday: setSundayTimes,
    };
    const currentTimes = {
      weekday: weekdayTimes,
      saturday: saturdayTimes,
      sunday: sundayTimes,
    }[day];

    const setter = setters[day];

    if (currentTimes.includes(time)) {
      setter(currentTimes.filter((t) => t !== time));
    } else {
      setter([...currentTimes, time]);
    }
  };

  return (
    <div className="mt-[40px] w-full max-w-[1400px] space-y-6">
      {/* Branch Selection */}
      <h3 className="mb-6 text-xl font-bold">
        - 어느 지점을 관리하고 싶으신가요?
      </h3>
      <div className="flex gap-4">
        {branches.map((branch) => (
          <label
            key={branch.value}
            className="flex cursor-pointer items-center space-x-2"
          >
            <input
              type="radio"
              name="branch"
              value={branch.value}
              checked={selectedBranch === branch.value}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-lg">{branch.label}</span>
          </label>
        ))}
      </div>
      {/* Consultation Type Selection */}
      <h3 className="mb-6 text-xl font-bold">
        - 어떤 종류의 상담을 관리하고 싶으신가요?
      </h3>
      <div className="flex gap-4">
        {consultationTypes.map((type) => (
          <label
            key={type.value}
            className="flex cursor-pointer items-center space-x-2"
          >
            <input
              type="radio"
              name="consultationType"
              value={type.value}
              checked={selectedConsultationType === type.value}
              onChange={(e) => setSelectedConsultationType(e.target.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-lg">{type.label}</span>
          </label>
        ))}
      </div>
      {/* Time Selection */}

      <h3 className="mb-4 text-xl font-bold">
        - 상담이 가능한 시간을 선택해주세요
      </h3>
      <div className="grid grid-cols-3 gap-6">
        {/* Weekdays */}
        <div className="flex flex-col rounded-lg border border-[#CCD7E0] p-[30px]">
          <h4 className="mb-3 font-bold">평일</h4>
          <TimeSlotGrid
            timeSlots={timeSlots}
            selectedTimes={weekdayTimes}
            onTimeToggle={(time) => toggleTime(time, "weekday")}
          />
        </div>
        {/* Saturday */}
        <div className="flex flex-col rounded-lg border border-[#CCD7E0] p-[30px]">
          <h4 className="mb-3 font-bold">토요일</h4>
          <TimeSlotGrid
            timeSlots={timeSlots}
            selectedTimes={saturdayTimes}
            onTimeToggle={(time) => toggleTime(time, "saturday")}
          />
        </div>
        {/* Sunday */}
        <div className="flex flex-col rounded-lg border border-[#CCD7E0] p-[30px]">
          <h4 className="mb-3 font-bold">일요일</h4>
          <TimeSlotGrid
            timeSlots={timeSlots}
            selectedTimes={sundayTimes}
            onTimeToggle={(time) => toggleTime(time, "sunday")}
          />
        </div>
      </div>
      <div className="flex justify-end pt-4">
        <Button
          onClick={() => {
            console.log("Saving configuration:", {
              branch: selectedBranch,
              consultationType: selectedConsultationType,
              weekdayTimes,
              saturdayTimes,
              sundayTimes,
            });
          }}
          className="rounded bg-[#0C6CCC] px-6 py-2 font-bold text-white hover:bg-[#175EA4]"
        >
          저장하기
        </Button>
      </div>
    </div>
  );
}
