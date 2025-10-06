import { useState } from "react";
import SquareTabs from "../common/SquareTabs";
import { deskTabs } from "@/etc/tabs";
import Button from "../common/Button";
import Table from "../common/Table";
import { taskCompletionTemp, weeklyScheduleTemp } from "@/etc/temp";
import {
  taskCompletionTableConfig,
  weeklyScheduleTableConfig,
} from "@/etc/tableConfig";
import DateNavigator from "../common/DateNavigator";

export default function AllWorkReport() {
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
      <SquareTabs
        tabs={deskTabs}
        selectedTab={selectedDeskTab}
        onClick={(tab) => setSelectedDeskTab(tab)}
      />
      <div className="my-[18px] flex flex-row gap-[12px]">
        <Button
          onClick={() => {}}
          className="rounded-md bg-white px-[12px] py-[6px] text-sm font-bold text-[#9FA5AC]"
        >
          삭제
        </Button>
        <Button
          onClick={() => {}}
          className="rounded-md bg-white px-[12px] py-[6px] text-sm font-bold text-[#9FA5AC]"
        >
          수정
        </Button>
      </div>
      <Table
        rows={weeklyScheduleTemp}
        columns={weeklyScheduleTableConfig}
        checkboxSelection
        hideFooterPagination
        height={370}
        density="compact"
      />
      <div className="mt-[64px] mb-[32px] flex w-full flex-row items-center justify-between">
        <DateNavigator
          date={selectedDate.toLocaleDateString("en-CA")}
          onPreviousDate={handlePreviousDate}
          onNextDate={handleNextDate}
          arrowsBelow={false}
        />
        <SquareTabs
          tabs={deskTabs}
          selectedTab={selectedDeskTab}
          onClick={(tab) => {
            setSelectedDeskTab(tab);
          }}
        />
      </div>
      <Table
        rows={taskCompletionTemp}
        columns={taskCompletionTableConfig}
        height={375}
        hideFooterPagination
        density="compact"
      />
      <p className="mt-[4px] text-sm">* 미완료 - 빨강색, 완료 - 파랑색</p>
    </div>
  );
}
