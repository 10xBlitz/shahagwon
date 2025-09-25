"use client";

import Image from "next/image";
import { useState } from "react";
import BigCalendar from "@/components/alarm_page/BigCalendar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/common/Button";
import ScheduleSubmissionForm from "@/components/alarm_page/ScheduleSubmissionForm";
import PenaltyRecordTable from "@/components/alarm_page/PenaltyRecordTable";

export default function AttendanceRecordPage() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const [activeDialog, setActiveDialog] = useState<
    "submission" | "penalty" | null
  >(null);

  const goToPreviousMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };

  const goToNextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div className="flex h-full flex-col bg-[#F5F5F5] p-[48px]">
      <div className="mb-[20px] flex flex-row items-center gap-[12px]">
        <Image
          src="/images/sidebar/off/alarm_off.svg"
          alt="Chat Icon"
          width={20}
          height={20}
        />
        <h1 className="text-[22px] font-extrabold">출석</h1>
      </div>
      <div className="self-start rounded-xl bg-white px-[64px] py-[38px]">
        <div className="mb-4 flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <div
              onClick={goToPreviousMonth}
              className="flex items-center justify-center rounded border border-[#CECECE] p-4 hover:cursor-pointer hover:border-[#1C75D2] hover:bg-[#F6FAFD]"
            >
              <ChevronLeft size={16} />
            </div>
            <div
              onClick={goToNextMonth}
              className="flex items-center justify-center rounded border border-[#CECECE] p-4 hover:cursor-pointer hover:border-[#1C75D2] hover:bg-[#F6FAFD]"
            >
              <ChevronRight size={16} />
            </div>
            <Button
              onClick={() => setActiveDialog("submission")}
              className="rounded border border-[#CECECE] px-4 py-3 hover:cursor-pointer hover:border-[#1C75D2] hover:bg-[#F6FAFD]"
            >
              정기일정
            </Button>
            <Button
              onClick={() => {}}
              className="rounded border border-[#CECECE] px-4 py-3 hover:cursor-pointer hover:border-[#1C75D2] hover:bg-[#F6FAFD]"
            >
              상담일정
            </Button>
          </div>
          <Button
            onClick={() => setActiveDialog("penalty")}
            className="rounded border border-[#7389FF] px-[46px] py-3 font-medium text-[#3D51AF] hover:bg-[#F6FAFD]"
          >
            #총 벌점기록
          </Button>
        </div>
        <BigCalendar year={year} month={month + 1} />
      </div>
      {activeDialog === "submission" && (
        <ScheduleSubmissionForm
          title="9월용 정기일정"
          onClose={() => setActiveDialog(null)}
        />
      )}
      {activeDialog === "penalty" && (
        <PenaltyRecordTable onClose={() => setActiveDialog(null)} />
      )}
    </div>
  );
}
