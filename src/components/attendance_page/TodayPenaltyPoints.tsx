import { useState } from "react";
import {
  penaltyDetailsTableConfig,
  attendanceTimeTableConfig2,
  relatedTimeRangeTableConfig,
  studentParentInfoTableConfig,
  todayPenaltyPointsTableConfig,
  penaltyReasonExampleTableConfig,
} from "@/etc/table_config";
import Table from "../common/Table";
import Button from "../common/Button";
import DateNavigator from "../common/DateNavigator";
import { ListX, MessageSquare } from "lucide-react";
import Input from "../common/Input";

export default function TodayPenaltyPoints() {
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
    <div className="flex w-full flex-col items-end pl-[22px]">
      <DateNavigator
        date={selectedDate.toLocaleDateString("en-CA")}
        onPreviousDate={handlePreviousDate}
        onNextDate={handleNextDate}
        arrowsBelow={true}
      />
      <Button
        onClick={() => {}}
        className="mt-[42px] rounded bg-[#0C6CCB] px-[16px] py-[8px] text-sm font-bold tracking-tighter text-white"
      >
        확정된 벌점 모두 보내기
      </Button>
      <div className="mt-[22px] h-px w-full bg-[#D8D9DB]" />
      <div className="mt-[40px] flex w-full flex-row gap-9">
        <div className="flex max-w-[250px] flex-1 flex-col overflow-hidden">
          <div className="mb-[28px] flex flex-row items-center gap-[8px]">
            <div className="bg-[#FBFCFE] px-4 py-2">
              <MessageSquare stroke="#9FA5AC" size={18} />
            </div>
            <div className="bg-[#FBFCFE] px-4 py-2">
              <ListX stroke="#9FA5AC" size={18} />
            </div>
            <Input placeholder="이름 검색" size={18} />
          </div>
          <Table
            columns={todayPenaltyPointsTableConfig}
            hideFooterPagination
            height={850}
          />
        </div>
        <div className="flex max-w-[430px] flex-1 flex-col items-end">
          <Button
            onClick={() => {}}
            className="mb-[28px] bg-[#FBFCFE] px-4 py-2 text-sm font-bold text-[#9FA5AC]"
          >
            전체 출입기록
          </Button>
          <Table columns={penaltyDetailsTableConfig} height={850} hideFooter />
        </div>
        <div className="flex flex-1 flex-col items-end">
          <div className="mb-[28px] flex flex-row gap-[12px]">
            <Button
              onClick={() => {}}
              className="bg-[#FBFCFE] px-4 py-2 text-sm font-bold text-[#9FA5AC]"
            >
              벌점 내역 추가
            </Button>
            <Button
              onClick={() => {}}
              className="bg-[#FBFCFE] px-4 py-2 text-sm font-bold text-[#9FA5AC]"
            >
              비활성화
            </Button>
            <Button
              onClick={() => {}}
              className="bg-[#FBFCFE] px-4 py-2 text-sm font-bold text-[#9FA5AC]"
            >
              벌점 부여내역 취소
            </Button>
          </div>
          <div className="flex flex-col gap-[50px]">
            <Table
              columns={penaltyReasonExampleTableConfig}
              hideFooter
              height={180}
            />
            <Table
              columns={relatedTimeRangeTableConfig}
              hideFooter
              height={160}
            />
            <Table
              columns={studentParentInfoTableConfig}
              hideFooter
              height={200}
            />
            <Table
              columns={attendanceTimeTableConfig2}
              hideFooter
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
