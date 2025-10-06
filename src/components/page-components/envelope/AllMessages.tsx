import Table from "@/components/common/Table";
import { allMessagesTemp } from "@/etc/temp";
import { allMessagesTableConfig } from "@/etc/tableConfig";

export default function AllMessages() {
  return (
    <div className="mt-[32px] flex w-full rounded-lg bg-white px-[38px] py-[50px]">
      <Table
        rows={allMessagesTemp}
        columns={allMessagesTableConfig}
        hideFooterPagination
        density="compact"
        height={424}
      />
    </div>
  );
}
