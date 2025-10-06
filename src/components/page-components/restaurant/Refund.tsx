import { refundTemp } from "@/etc/temp";
import Table from "@/components/common/Table";
import { refundTableConfig } from "@/etc/tableConfig";

export default function Refund() {
  return (
    <div className="mt-[32px]">
      <Table
        rows={refundTemp}
        columns={refundTableConfig}
        className="max-w-[1500px]"
        height={560}
        density="compact"
      />
    </div>
  );
}
