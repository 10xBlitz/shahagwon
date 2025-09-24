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
} from "date-fns";
import React from "react";

interface BigCalendarProps {
  year: number;
  month: number; // 1-12
}

export default function BigCalendar({ year, month }: BigCalendarProps) {
  const monthStart = startOfMonth(new Date(year, month - 1));
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 }); // Sunday
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  // chunk into weeks (arrays of 7 days)
  const weeks: Date[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  const dayNames = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  return (
    <div className="w-[1022px] shadow-lg">
      <div className="mb-4 text-center text-xl font-semibold">
        {year}년 {month}월
      </div>

      {/* weekday header */}
      <div
        className="grid bg-[#EAEAEA] text-center font-medium"
        style={{ gridTemplateColumns: "repeat(7, 146px)" }}
      >
        {dayNames.map((d, i) => (
          <div
            key={i}
            className={`${d === "일" ? "text-red-500" : ""} flex h-[49px] w-[146px] items-center justify-center border border-gray-100`}
          >
            {d}
          </div>
        ))}
      </div>

      {/* weeks — each row forced to grid with inline style to avoid CSS collisions */}
      <div>
        {weeks.map((week, wi) => (
          <div
            key={wi}
            className="grid"
            style={{ gridTemplateColumns: "repeat(7, 146px)" }}
          >
            {week.map((day) => {
              const dayNumber = getDate(day);
              const dayYear = getYear(day);
              const dayMonth = getMonth(day) + 1;
              const isCurrentMonth = dayMonth === month && dayYear === year;
              const isSunday = day.getDay() === 0;

              return (
                <div
                  key={day.toISOString()}
                  data-year={dayYear}
                  data-month={dayMonth}
                  data-day={dayNumber}
                  // note: use border + box-sizing to keep lines consistent
                  className={`flex h-[114px] w-[146px] items-start justify-start border border-gray-100 p-2 ${
                    isCurrentMonth ? "bg-white" : "bg-slate-50"
                  }`}
                >
                  <span
                    className={`text-xs font-bold ${
                      isCurrentMonth
                        ? isSunday
                          ? "text-red-500"
                          : "text-gray-900"
                        : "text-gray-400"
                    }`}
                  >
                    {dayNumber}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
