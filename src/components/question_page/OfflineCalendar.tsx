"use client";

import {
  getDate,
  getYear,
  getMonth,
  endOfWeek,
  endOfMonth,
  startOfWeek,
  startOfMonth,
  eachDayOfInterval,
  isSameDay,
} from "date-fns";
import React from "react";

interface OfflineCalendarProps {
  year: number;
  month: number; // 1-12
  selectedDate: Date;
}

export default function OfflineCalendar({
  year,
  month,
  selectedDate,
}: OfflineCalendarProps) {
  const monthStart = startOfMonth(new Date(year, month - 1));
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 }); // Sunday
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const weeks: Date[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <div className="h-[360px] w-[348px] p-4">
      <div className="mb-4 text-center text-lg font-semibold">
        {year}년 {month}월
      </div>

      <div className="mb-2 grid grid-cols-7 gap-1">
        {dayNames.map((day, i) => (
          <div
            key={i}
            className={`flex h-8 items-center justify-center text-sm font-medium ${
              i === 0 ? "text-red-500" : "text-gray-700"
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => {
          const dayNumber = getDate(day);
          const dayYear = getYear(day);
          const dayMonth = getMonth(day) + 1;
          const isCurrentMonth = dayMonth === month && dayYear === year;
          const isSunday = day.getDay() === 0;
          const isSelected = isSameDay(day, selectedDate);

          return (
            <div
              key={day.toISOString()}
              className={`flex h-8 w-8 items-center justify-center text-sm ${
                !isCurrentMonth
                  ? "text-gray-300"
                  : isSelected
                    ? "rounded-full bg-blue-500 text-white"
                    : isSunday
                      ? "text-red-500"
                      : "text-gray-900"
              }`}
            >
              {dayNumber}
            </div>
          );
        })}
      </div>
    </div>
  );
}
