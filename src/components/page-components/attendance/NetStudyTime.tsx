import Table from "@/components/common/Table";
import { attendanceTimeTemp } from "@/etc/temp";
import { attendanceTimeTableConfig } from "@/etc/tableConfig";
import DatePicker from "@/components/common/DatePicker";

export default function NetStudyTime() {
  return (
    <div className="space-y-[12px] px-[24px]">
      <DatePicker />
      <Table
        rows={attendanceTimeTemp}
        columns={attendanceTimeTableConfig}
        hideFooterPagination
        height={400}
      />
    </div>
  );
}
