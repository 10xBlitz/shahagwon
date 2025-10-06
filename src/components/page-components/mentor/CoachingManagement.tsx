import Input from "@/components/common/Input";
import Table from "@/components/common/Table";
import Button from "@/components/common/Button";
import { coachingManagementTableConfig } from "@/etc/tableConfig";

export default function CoachingManagement() {
  return (
    <div className="mt-[48px] w-full max-w-[1500px]">
      <div className="mb-2 flex w-full flex-row items-center justify-between">
        <Button
          onClick={() => {}}
          className="rounded bg-[#FBFCFE] px-[12px] py-[8px] text-sm font-bold tracking-tighter text-[#9FA5AC]"
        >
          수업기록지 전송하기
        </Button>
        <Input placeholder="이름으로 검색" />
      </div>
      <Table
        columns={coachingManagementTableConfig}
        hideFooterPagination
        density="compact"
        height={900}
      />
    </div>
  );
}
