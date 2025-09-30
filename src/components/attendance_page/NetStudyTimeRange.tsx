import Table from "../common/Table";
import { attendanceTimeTemp } from "@/etc/temp";
import { attendanceTimeTableConfig } from "@/etc/table_config";

export default function NetStudyTime() {
  return (
    <div className="px-[24px]">
      <Table
        rows={attendanceTimeTemp}
        columns={attendanceTimeTableConfig}
        hideFooterPagination
        height={400}
      />
    </div>
  );
}
