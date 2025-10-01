"use client";

import { useState } from "react";
import SmallCalendar from "./SmallCalendar"; // your existing calendar
import { format } from "date-fns";

export default function DatePicker() {
  const today = new Date();

  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [showCalendar, setShowCalendar] = useState(false);

  const formatDate = (date: Date | null) =>
    date ? format(date, "yyyy.MM.dd") : "";

  return (
    <div className="relative inline-block">
      <input
        className="rounded-md border border-gray-400 px-3 py-2 focus:border-blue-500 focus:outline-none"
        placeholder="날짜 선택"
        readOnly
        value={formatDate(selectedDate)}
        onClick={() => setShowCalendar((prev) => !prev)}
      />

      {showCalendar && (
        <div className="absolute top-full z-50 mt-2 shadow-lg">
          <SmallCalendar
            onDateSelect={(date) => {
              setSelectedDate(date);
              setShowCalendar(false);
            }}
            defaultDate={selectedDate}
          />
        </div>
      )}
    </div>
  );
}
