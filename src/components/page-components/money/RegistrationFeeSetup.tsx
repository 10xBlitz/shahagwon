import Table from "@/components/common/Table";
import Button from "@/components/common/Button";
import { registrationFeeApplicationPeriodTableConfig } from "@/etc/tableConfig";

export default function RegistrationFeeSetup() {
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
        columns={registrationFeeApplicationPeriodTableConfig}
        hideFooterPagination
        height={510}
      />
    </div>
  );
}
