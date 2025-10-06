import { viewPenaltyHistoryTableConfig } from "@/etc/tableConfig";
import Input from "@/components/common/Input";
import Table from "@/components/common/Table";

export default function ViewPenaltyHistory() {
  return (
    <div className="flex w-full max-w-[1500px] flex-col items-end">
      <Input placeholder="이름을 검색하세요" className="mt-[30px] mb-[12px]" />
      <Table
        columns={viewPenaltyHistoryTableConfig}
        height={500}
        hideFooterPagination
      />
    </div>
  );
}
