import { useState } from "react";
import Table from "../common/Table";
import Button from "../common/Button";
import { periodTabs } from "@/etc/tabs";
import SquareTabs from "../common/SquareTabs";
import DateNavigator from "../common/DateNavigator";
import { Mail, MessageSquare, Phone } from "lucide-react";
import {
  attendanceCheckTableConfig,
  entryExitRecordsTableConfig,
  todayAttendanceStatusTableConfig,
  regularScheduleTableConfig,
  textPhoneTableConfig,
  reasonSubmissionTableConfig,
  penaltyMemoTableConfig,
} from "@/etc/table_config";
import { attendanceCheckTemp } from "@/etc/temp";

export default function AttendanceCheck() {
  const [selectedPeriodtab, setSelectedPeriodTab] = useState("period_0");
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
    <div className="max-w-[1700px] px-[24px]">
      <div className="mb-[32px] flex w-full flex-row items-center justify-between">
        <SquareTabs
          tabs={periodTabs}
          selectedTab={selectedPeriodtab}
          onClick={(tab) => {
            setSelectedPeriodTab(tab);
          }}
        />
        <DateNavigator
          date={selectedDate.toLocaleDateString("en-CA")}
          onPreviousDate={handlePreviousDate}
          onNextDate={handleNextDate}
          arrowsBelow={true}
          allowFutureDates={false}
        />
      </div>
      <div className="flex flex-row items-center justify-between">
        <Button
          onClick={() => {}}
          className="rounded bg-[#E2EEFB] px-[18px] py-[10px] font-bold text-[#12467A]"
        >
          {periodTabs.find((tab) => tab.value === selectedPeriodtab)?.period}
          교시 핸드폰 검사하기
        </Button>
        <p className="text-sm font-semibold">
          {periodTabs.find((tab) => tab.value === selectedPeriodtab)?.time}
        </p>
      </div>
      <div className="mt-[32px] mb-[16px] flex flex-row gap-[10px]">
        <div className="rounded bg-[#FBFCFE] px-4 py-2 text-[#A0A6AD]">
          <Phone color="#32383F" size={18} />
        </div>
        <div className="rounded bg-[#FBFCFE] px-4 py-2 text-[#A0A6AD]">
          <Mail color="#32383F" size={18} />
        </div>
        <div className="rounded bg-[#FBFCFE] px-4 py-2 text-[#A0A6AD]">
          <MessageSquare color="#32383F" size={18} />
        </div>
      </div>
      <div className="flex w-full flex-row">
        <div className="flex max-w-[600px] flex-1 flex-col">
          <Table
            rows={attendanceCheckTemp}
            columns={attendanceCheckTableConfig}
            height={900}
            hideFooterPagination
          />
        </div>
        <div className="flex flex-1 flex-col px-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="mb-2 text-center text-sm font-semibold">
                출입기록
              </h3>
              <Table
                rows={[]}
                columns={entryExitRecordsTableConfig}
                height={360}
                hideFooter
                density="compact"
              />
            </div>
            <div>
              <h3 className="mb-2 text-center text-sm font-semibold">
                오늘의 출석 현황
              </h3>
              <Table
                rows={[]}
                columns={todayAttendanceStatusTableConfig}
                height={360}
                hideFooter
                density="compact"
              />
            </div>
            <div>
              <h3 className="mb-2 text-center text-sm font-semibold">
                정기일정
              </h3>
              <Table
                rows={[]}
                columns={regularScheduleTableConfig}
                height={200}
                hideFooter
                density="compact"
              />
            </div>
            <div>
              <h3 className="mb-2 text-center text-sm font-semibold">
                문자/전화
              </h3>
              <Table
                rows={[]}
                columns={textPhoneTableConfig}
                height={200}
                hideFooter
                density="compact"
              />
            </div>
            <div>
              <h3 className="mb-2 text-center text-sm font-semibold">
                사유제출
              </h3>
              <Table
                rows={[]}
                columns={reasonSubmissionTableConfig}
                height={225}
                hideFooter
                density="compact"
              />
            </div>
            <div>
              <h3 className="mb-2 text-center text-sm font-semibold">
                벌점 관련 메모
              </h3>
              <Table
                rows={[]}
                columns={penaltyMemoTableConfig}
                height={225}
                hideFooter
                density="compact"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
