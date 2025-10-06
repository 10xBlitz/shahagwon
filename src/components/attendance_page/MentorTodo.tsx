import {
  mentorTodoDetailTableConfig,
  mentorTodoOverviewTableConfig,
} from "@/etc/tableConfig";
import Table from "../common/Table";
import Button from "../common/Button";
import DateRangePicker from "../common/DateRangePicker";

export default function MentorTodo() {
  return (
    <div className="flex max-w-[1500px] flex-col gap-[20px]">
      <div className="flex flex-row justify-between">
        <DateRangePicker />
        <div className="flex flex-row items-center gap-[18px]">
          <Button
            onClick={() => {}}
            className="rounded border border-[#CCD7E0] px-[12px] py-[6px] text-sm font-semibold"
          >
            강남점 상담스케줄
          </Button>
          <Button
            onClick={() => {}}
            className="rounded border border-[#CCD7E0] px-[12px] py-[6px] text-sm font-semibold"
          >
            대치점 상담스케줄
          </Button>
        </div>
      </div>
      <Button
        onClick={() => {}}
        className="w-auto max-w-[80px] rounded bg-[#0C6CCB] py-[8px] text-sm font-bold text-white"
      >
        조회하기
      </Button>
      <Table columns={mentorTodoOverviewTableConfig} hideFooterPagination />
      <Table columns={mentorTodoDetailTableConfig} hideFooterPagination />
    </div>
  );
}
