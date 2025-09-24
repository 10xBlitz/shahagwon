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
  month: number; // 1-12
}

export default function BigCalendarTwo({ year, month }: BigCalendarTwoProps) {
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
    "|”|",
    "Ô”|",
    "T”|",
    "”|",
    "©”|",
    "”|",
    " ”|",
  ];

  return (
    <div style={{ width: "1050px", margin: 0, padding: 0 }}>
      <div className="mb-4 text-center text-xl font-semibold">
        {year}D {month}Ô
      </div>

      {/* weekday header */}
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(7, 150px)" }}
      >
        {dayNames.map((d, i) => (
          <div
            key={i}
            className="bg-[#EAEAEA] text-center font-medium"
            style={{
              width: "150px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #F2F2F2",
            }}
          >
            {d}
          </div>
        ))}
      </div>

      {/* weeks */}
      <div>
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
                    boxSizing: "border-box",
                    border: "1px solid #F2F2F2",
                    padding: 8,
                    background: isCurrentMonth ? "#ffffff" : "#f8fafc",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      color: isCurrentMonth
                        ? isSunday
                          ? "#ef4444"
                          : "#111827"
                        : "#9ca3af",
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
    </div>
  );
}