"use client";

import { useState } from "react";
import { branchTabs } from "@/etc/tabs";
import SquareTabs from "../common/SquareTabs";
import Input from "../common/Input";

const monthTabs = [
  { label: "지난달", value: "last_month" },
  { label: "이번달", value: "this_month" },
  { label: "다음달", value: "next_month" },
];

const dayOfWeekTabs = [
  { label: "전체", value: "all" },
  { label: "월요일", value: "monday" },
  { label: "화요일", value: "tuesday" },
  { label: "수요일", value: "wednesday" },
  { label: "목요일", value: "thursday" },
  { label: "금요일", value: "friday" },
  { label: "토요일", value: "saturday" },
];

export default function ViewAsTable() {
  const [selectedBranch, setSelectedBranch] = useState(branchTabs[0].value);
  const [selectedMonth, setSelectedMonth] = useState(monthTabs[0].value);
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState(
    dayOfWeekTabs[0].value,
  );

  return (
    <div className="mt-[24px] flex w-full flex-col gap-[20px] px-[110px]">
      <SquareTabs
        tabs={branchTabs}
        selectedTab={selectedBranch}
        onClick={setSelectedBranch}
      />
      <SquareTabs
        tabs={monthTabs}
        selectedTab={selectedMonth}
        onClick={setSelectedMonth}
      />
      <div className="flex flex-row justify-between">
        <SquareTabs
          tabs={dayOfWeekTabs}
          selectedTab={selectedDayOfWeek}
          onClick={setSelectedDayOfWeek}
        />
        <Input placeholder="이름을 검색하세요" />
      </div>
    </div>
  );
}
