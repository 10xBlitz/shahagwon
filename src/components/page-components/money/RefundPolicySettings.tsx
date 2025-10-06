import Table from "@/components/common/Table";
import Button from "@/components/common/Button";
import { refundPolicyTableConfig } from "@/etc/tableConfig";

export default function RefundPolicySettings() {
  return (
    <div className="flex w-full flex-col items-end">
      <div className="mt-[50px] mb-[20px] flex flex-row gap-4">
        <Button
          onClick={() => {}}
          className="rounded-sm bg-[#FBFCFE] px-[14px] py-[8px] text-sm font-semibold"
        >
          등록비 설정하기
        </Button>
        <Button
          onClick={() => {}}
          className="rounded-sm bg-[#FBFCFE] px-[14px] py-[8px] text-sm font-semibold"
        >
          삭제하기
        </Button>
      </div>
      <Table
        columns={refundPolicyTableConfig}
        hideFooterPagination
        height={510}
        density="compact"
      />
    </div>
  );
}
