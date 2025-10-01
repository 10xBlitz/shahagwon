import { useState } from "react";
import Button from "../common/Button";
import SquareTabs from "../common/SquareTabs";
import { branchTabs, deskTabs } from "@/etc/tabs";
import Table from "../common/Table";
import { todayWorkReportTemp, workCompletionTemp } from "@/etc/temp";
import {
  patrolScheduleTableConfig,
  todayWorkReportTableConfig,
  workCompletionTableConfig,
} from "@/etc/table_config";
import DateNavigator from "../common/DateNavigator";

const statusTabs = [
  {
    label: "미완료",
    value: "incomplete",
  },
  {
    label: "전체",
    value: "all",
  },
];

const shiftTabs = [
  {
    label: "전체",
    value: "all",
  },
  {
    label: "오전 데스크",
    value: "morning_desk",
  },
  {
    label: "오후 데스크",
    value: "afternoon_desk",
  },
  {
    label: "저녁 데스크",
    value: "evening_desk",
  },
  {
    label: "주간 사감",
    value: "daytime_supervisor",
  },
  {
    label: "야간 사감",
    value: "night_supervisor",
  },
];

export default function TodayWorkReport() {
  const [selectedStatusTab, setSelectedStatusTab] = useState(
    statusTabs[0].value,
  );
  const [selectedBranchTab, setSelectedBranchTab] = useState(
    branchTabs[0].value,
  );
  const [selectedShiftTab, setSelectedShiftTab] = useState(shiftTabs[0].value);
  const [selectedDeskTab, setSelectedDeskTab] = useState(deskTabs[0].value);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handlePreviousDate = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const handleNextDate = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1);
    setSelectedDate(newDate);
  };

  return (
    <div className="mt-[40px] flex flex-col items-start">
      <div className="flex flex-row items-center gap-[18px]">
        <p className="text-lg font-bold">업무 전달사항</p>
        <Button
          onClick={() => {}}
          className="gap-2 rounded-lg bg-[#0C6CCB] px-[10px] py-[4px] text-base font-bold text-white"
          hasPlus
        >
          추가하기
        </Button>
      </div>
      <div className="mt-[26px] mb-[18px] flex w-full flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-[38px]">
          <SquareTabs
            tabs={statusTabs}
            selectedTab={selectedStatusTab}
            onClick={(tab) => {
              setSelectedStatusTab(tab);
            }}
          />
          <SquareTabs
            tabs={branchTabs}
            selectedTab={selectedBranchTab}
            onClick={(tab) => {
              setSelectedBranchTab(tab);
            }}
          />
          <SquareTabs
            tabs={shiftTabs}
            selectedTab={selectedShiftTab}
            onClick={(tab) => {
              setSelectedShiftTab(tab);
            }}
          />
        </div>
        <div className="flex flex-row items-center gap-[12px]">
          <Button
            onClick={() => {}}
            className="rounded bg-[#FBFCFE] px-[12px] py-[6px] text-sm font-bold text-[#9FA5AC]"
          >
            사진 업로드
          </Button>
          <Button
            onClick={() => {}}
            className="rounded bg-[#FBFCFE] px-[12px] py-[6px] text-sm font-bold text-[#9FA5AC]"
          >
            삭제하기{" "}
          </Button>
        </div>
      </div>
      <Table
        rows={todayWorkReportTemp}
        columns={todayWorkReportTableConfig}
        height={210}
        hideFooter
        density="compact"
      />
      <div className="mt-[64px] mb-[18px] flex flex-row items-center">
        <SquareTabs
          tabs={deskTabs}
          selectedTab={selectedDeskTab}
          onClick={(tab) => setSelectedDeskTab(tab)}
        />
      </div>
      <Table
        rows={workCompletionTemp}
        columns={workCompletionTableConfig}
        hideFooterPagination
        density="compact"
        height={372}
      />
      <p className="mt-[4px] text-sm">
        * 미완료 - 빨강색, 현재 할일 - 주황색, 완료 - 파랑색
      </p>
      <div className="mt-[54px] mb-[12px] flex w-full flex-row justify-between">
        <div className="flex flex-col">
          <p className="font-bold">순찰 가이드라인</p>
          <p>
            1. QR CODE 태깅 전 열람실에 자는 학생은 깨워주시고 딴짓 하는
            사람한테는 주의주세요.
          </p>
          <p>2. 순찰 돌 때는 항상 출석부 판 들고 돌아주세요.</p>
        </div>
        <DateNavigator
          date={selectedDate.toLocaleDateString("en-CA")}
          onPreviousDate={handlePreviousDate}
          onNextDate={handleNextDate}
          arrowsBelow={true}
        />
      </div>
      <Table
        columns={patrolScheduleTableConfig}
        hideFooterPagination
        height={400}
      />
    </div>
  );
}
