import Table from "../common/Table";
import { attendanceTimeTemp } from "@/etc/temp";
import { attendanceTimeTableConfig } from "@/etc/table_config";
import DatePicker from "../common/DatePicker";

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
