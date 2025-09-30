import { infoSessionReservationTableConfig } from "@/etc/table_config";
import Table from "../common/Table";

export default function InfoSessionReservationList() {
  return (
    <div className="mt-[34px] w-full max-w-[1500px]">
      <Table
        columns={infoSessionReservationTableConfig}
        hideFooterPagination
        density="compact"
        height={700}
      />
    </div>
  );
}
