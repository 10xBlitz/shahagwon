"use client";

import {
  getDate,
  getYear,
  isToday,
  isBefore,
  getMonth,
  isSameDay,
  endOfWeek,
  startOfDay,
  endOfMonth,
  startOfWeek,
  startOfMonth,
  eachDayOfInterval,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

interface SmallCalendarProps {
  onDateSelect?: (date: Date) => void;
  defaultDate?: Date;
}

export default function SmallCalendar({
  onDateSelect,
  defaultDate = new Date(),
}: SmallCalendarProps) {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(defaultDate);
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());

  const monthStart = startOfMonth(new Date(currentYear, currentMonth));
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 }); // Sunday
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  // chunk into weeks (arrays of 7 days)
  const weeks: Date[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];

  const monthNames = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  const goToPreviousMonth = () => {
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;

    // Check if previous month is before current month
    const prevMonthDate = new Date(prevYear, prevMonth);
    const todayMonth = new Date(today.getFullYear(), today.getMonth());

    if (!isBefore(prevMonthDate, todayMonth)) {
      if (currentMonth === 0) {
        setCurrentYear(currentYear - 1);
        setCurrentMonth(11);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (date: Date) => {
    if (!isBefore(startOfDay(date), startOfDay(today))) {
      setSelectedDate(date);
      onDateSelect?.(date);
    }
  };

  const isPastDate = (date: Date) => {
    return isBefore(startOfDay(date), startOfDay(today));
  };

  const canGoToPreviousMonth = () => {
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const prevMonthDate = new Date(prevYear, prevMonth);
    const todayMonth = new Date(today.getFullYear(), today.getMonth());

    return !isBefore(prevMonthDate, todayMonth);
  };

  return (
    <div className="h-[330px] w-[322px] rounded-lg bg-white p-6">
      {/* Header with month/year and navigation */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          {currentYear}년 {monthNames[currentMonth]}
        </h3>
        <div className="flex gap-1">
          <button
            onClick={goToPreviousMonth}
            disabled={!canGoToPreviousMonth()}
            className={`flex h-8 w-8 items-center justify-center rounded ${
              canGoToPreviousMonth() ? "hover:bg-gray-100" : "d opacity-30"
            }`}
          >
            <ChevronLeft size={16} color="#757575" />
          </button>
          <button
            onClick={goToNextMonth}
            className="flex h-8 w-8 items-center justify-center rounded hover:bg-gray-100"
          >
            <ChevronRight size={16} color="#757575" />
          </button>
        </div>
      </div>

      {/* Weekday header */}
      <div className="mb-2 grid grid-cols-7 gap-1">
        {dayNames.map((day, i) => (
          <div
            key={i}
            className="flex h-8 items-center justify-center text-sm font-medium text-[#666666]"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => {
          const dayNumber = getDate(day);
          const dayYear = getYear(day);
          const dayMonth = getMonth(day);
          const isCurrentMonth =
            dayMonth === currentMonth && dayYear === currentYear;
          const isPast = isPastDate(day);
          const isSelected = isSameDay(day, selectedDate);
          const isTodayDate = isToday(day);

          return (
            <button
              key={day.toISOString()}
              onClick={() => handleDateClick(day)}
              disabled={isPast}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm ${
                !isCurrentMonth
                  ? "text-[#9E9E9E]"
                  : isPast
                    ? "text-[#9E9E9E]"
                    : isSelected
                      ? "bg-[#1C75D2] text-white"
                      : isTodayDate
                        ? "border-1 border-black"
                        : "hover:bg-gray-100"
              }`}
            >
              {dayNumber}
            </button>
          );
        })}
      </div>
    </div>
  );
}
