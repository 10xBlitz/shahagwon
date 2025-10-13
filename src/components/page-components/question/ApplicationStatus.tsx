import { useState } from "react";
import { branchTabs } from "@/etc/tabs";
import { CalendarDays } from "lucide-react";
import Table from "@/components/common/Table";
import Button from "@/components/common/Button";
import { qnaSessionConfig } from "@/etc/tableConfig";
import { useDeleteQnaSession, useQnaSessions } from "@/queries/qnaSessions";
import SquareTabs from "@/components/common/SquareTabs";
import DateRangePicker from "@/components/common/DateRangePicker";

export default function ApplicationStatus() {
  const [selectedTab, setSelectedTab] = useState(branchTabs[0].value);
  const [dateRange, setDateRange] = useState<{
    start: Date | null;
    end: Date | null;
  }>({
    start: new Date(),
    end: new Date(),
  });

  const [selectedRow, setSelectedRow] = useState<string | null>(null);

  const deleteQnaSession = useDeleteQnaSession({
    id: selectedRow as string,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleRowClick = (params: any) => {
    setSelectedRow((prev) => (prev === params.row.id ? null : params.row.id));
  };

  const handleDeleteRow = () => {
    deleteQnaSession.mutate();
  };

  const handleDateRangeChange = (
    startDate: Date | null,
    endDate: Date | null,
  ) => {
    setDateRange({ start: startDate, end: endDate });
  };

  const { data: qnaSessions, isPending } = useQnaSessions({
    startDate: dateRange.start,
    endDate: dateRange.end,
    branch: selectedTab,
  });

  console.log("Q&A sessions fetched:", qnaSessions?.data?.length, "sessions");

  return (
    <div className="mt-[50px] h-auto w-[1166px] rounded-lg bg-white p-[54px]">
      <div className="mb-[16px] flex flex-row gap-[10px]">
        <CalendarDays color="#989898" />
        <p className="text-lg font-medium">질의응답 신청현황</p>
      </div>
      <DateRangePicker onDateRangeChange={handleDateRangeChange} />
      <div className="my-[24px] flex flex-row items-center justify-between">
        <SquareTabs
          tabs={branchTabs}
          selectedTab={selectedTab}
          onClick={(tab) => {
            setSelectedTab(tab);
          }}
        />
        <Button
          onClick={handleDeleteRow}
          pointer={selectedRow === null ? false : true}
          disabled={selectedRow === null ? true : false}
          className={`${selectedRow === null ? "bg-[#FBFCFE] text-[#9FA5AC]" : "bg-[#FCE3E4] text-[#7C1311]"} rounded px-4 py-2 text-sm font-bold`}
        >
          삭제하기
        </Button>
      </div>
      <Table
        columns={qnaSessionConfig}
        rows={qnaSessions?.data || []}
        hideFooterPagination={true}
        height={408}
        density="compact"
        loading={isPending}
        onRowClick={handleRowClick}
        // className="mb-[52px]"
      />
      {/* <Table
        columns={requestStatusTableConfig}
        rows={requestStatusTemp}
        hideFooterPagination={true}
        height={354}
        density="comfortable"
      /> */}
    </div>
  );
}
