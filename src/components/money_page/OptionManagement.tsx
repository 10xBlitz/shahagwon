import Table from "../common/Table";
import Button from "../common/Button";
import { optionManagementTableConfig } from "@/etc/tableConfig";

export default function OptionManagement() {
  return (
    <div className="mt-[36px] flex w-full max-w-[1500px] flex-col">
      <div className="mb-[24px] flex w-full flex-row items-center justify-between">
        <p></p>
        <div className="flex flex-row gap-4">
          <Button
            onClick={() => {}}
            className="rounded-sm bg-[#FBFCFE] px-[14px] py-[8px] text-sm font-semibold"
          >
            옵션 생성
          </Button>
          <Button
            onClick={() => {}}
            className="rounded-sm bg-[#FBFCFE] px-[14px] py-[8px] text-sm font-semibold"
          >
            수정하기
          </Button>
          <Button
            onClick={() => {}}
            className="rounded-sm bg-[#FBFCFE] px-[14px] py-[8px] text-sm font-semibold"
          >
            삭제하기
          </Button>
        </div>
      </div>
      <Table
        columns={optionManagementTableConfig}
        hideFooterPagination
        height={460}
      />
    </div>
  );
}
