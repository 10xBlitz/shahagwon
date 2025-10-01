"use client";

import { useState } from "react";
import { format } from "date-fns";
import SmallCalendar from "./SmallCalendar";

export default function DateRangePicker() {
  const today = new Date();

  const [startDate, setStartDate] = useState<Date | null>(today);
  const [endDate, setEndDate] = useState<Date | null>(today);

  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);

  const formatDate = (date: Date | null) =>
    date ? format(date, "yyyy.MM.dd") : "";

  return (
    <div className="relative flex items-center gap-4">
      {/* Start Date */}
      <div className="relative">
        <input
          className="rounded-md border border-gray-400 px-3 py-4 hover:border-black focus:border-2 focus:border-[#1B76D3] focus:outline-none"
          placeholder="시작일"
          readOnly
          value={formatDate(startDate)}
          onClick={() => {
            setShowStartCalendar((prev) => !prev);
            setShowEndCalendar(false);
          }}
        />
        {showStartCalendar && (
          <div className="absolute top-full z-50 mt-2 shadow-lg">
            <SmallCalendar
              onDateSelect={(date) => {
                setStartDate(date);
                setShowStartCalendar(false);
              }}
              defaultDate={startDate || new Date()}
            />
          </div>
        )}
      </div>
      <span>to</span>
      {/* End Date */}
      <div className="relative">
        <input
          className="rounded-md border border-gray-400 px-3 py-4 hover:border-black focus:border-2 focus:border-[#1B76D3] focus:outline-none"
          placeholder="마지막일"
          readOnly
          value={formatDate(endDate)}
          onClick={() => {
            setShowEndCalendar((prev) => !prev);
            setShowStartCalendar(false);
          }}
        />
        {showEndCalendar && (
          <div className="absolute top-full z-50 mt-2 shadow-lg">
            <SmallCalendar
              onDateSelect={(date) => {
                setEndDate(date);
                setShowEndCalendar(false);
              }}
              defaultDate={endDate || new Date()}
            />
          </div>
        )}
      </div>
    </div>
  );
}
