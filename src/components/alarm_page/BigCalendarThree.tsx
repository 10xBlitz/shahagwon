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

interface BigCalendarTwoProps {
  year: number;
  month: number; // 1–12
}

export default function BigCalendarTwo({ year, month }: BigCalendarTwoProps) {
  const monthStart = startOfMonth(new Date(year, month - 1));
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 }); // Sunday
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  // Split days into weeks
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
    <div
      className="inline-block border border-gray-300"
      style={{ width: "1050px" }} // fixed width
    >
      <div className="text-center text-xl font-semibold">
        {year}년 {month}월
      </div>

      {/* Weekday header */}
      <div
        className="border-b border-gray-300 bg-gray-100 text-center font-medium"
        style={{ display: "grid", gridTemplateColumns: "repeat(7, 150px)" }}
      >
        {dayNames.map((d, i) => (
          <div
            key={i}
            className={`${d === "일요일" ? "text-red-500" : ""}`}
            style={{
              width: "150px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Weeks */}
      {weeks.map((week, wi) => (
        <div
          key={wi}
          style={{ display: "grid", gridTemplateColumns: "repeat(7, 150px)" }}
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
                style={{
                  width: "150px",
                  height: "114px",
                  border: "1px solid #e5e7eb",
                  boxSizing: "border-box",
                  padding: "4px",
                  background: isCurrentMonth ? "#ffffff" : "#f8fafc",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-end",
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    color: isCurrentMonth
                      ? isSunday
                        ? "#ef4444" // red-500
                        : "#111827" // gray-900
                      : "#9ca3af", // gray-400
                  }}
                >
                  {dayNumber}
                </span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
