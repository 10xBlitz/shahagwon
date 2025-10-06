import React from "react";
import { Settings } from "lucide-react";
import Button from "@/components/common/Button";

export default function OfflineApplicationTimeSelector() {
  const timeSlots = [
    { time: "15:00", available: true },
    { time: "15:15", available: true },
    { time: "15:30", available: false },
  ];

  return (
    <div className="h-[362px] w-[386px] rounded-lg bg-white p-[28px]">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-center text-lg font-medium">
          시간선택 (2개까지 가능)
        </p>
        <Settings color="#8D8D8D" className="hover:cursor-pointer" />
      </div>
      <div className="flex gap-3">
        {timeSlots.map((slot) => (
          <Button
            key={slot.time}
            onClick={() => {}}
            className={`rounded-full border border-[#CACACA] px-6 py-2 font-medium transition-colors ${
              !slot.available
                ? "bg-white text-gray-400 hover:cursor-pointer"
                : "cursor-not-allowed bg-[#8D8D8D] text-white"
            }`}
          >
            {slot.time}
          </Button>
        ))}
      </div>
    </div>
  );
}
