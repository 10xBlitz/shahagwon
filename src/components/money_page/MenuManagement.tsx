import Table from "../common/Table";
import Input from "../common/Input";
import Button from "../common/Button";
import { menuManagementTableConfig } from "@/etc/table_config";

export default function MenuManagement() {
  return (
    <div className="mt-[36px] flex w-full max-w-[1800px] flex-col">
      <div className="mb-[24px] flex w-full flex-row items-center justify-between">
        <Input placeholder="이름 검색" />
        <div className="flex flex-row gap-4">
          <Button
            onClick={() => {}}
            className="rounded-sm bg-[#FBFCFE] px-[14px] py-[8px] text-sm font-semibold"
          >
            비활성화
          </Button>
          <Button
            onClick={() => {}}
            className="rounded-sm bg-[#FBFCFE] px-[14px] py-[8px] text-sm font-semibold"
          >
            삭제하기
          </Button>
        </div>
      </div>
      <Table columns={menuManagementTableConfig} hideFooter height={500} />
    </div>
  );
}
