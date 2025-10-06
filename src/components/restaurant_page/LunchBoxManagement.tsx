import { restaurantMenuTableConfig } from "@/etc/tableConfig";
import Table from "../common/Table";
import { restaurantMenuTemp } from "@/etc/temp";
import Button from "../common/Button";

export default function LunchBoxManagement() {
  return (
    <div className="mt-[36px] w-full">
      <div className="flex max-w-[1500px] flex-col">
        <Button
          onClick={() => {}}
          className="mb-[12px] self-end rounded-lg bg-[#0C6CCC] px-[16px] py-[8px] text-sm font-semibold text-white"
        >
          삭제하기
        </Button>
        <Table
          columns={restaurantMenuTableConfig}
          rows={restaurantMenuTemp}
          density="compact"
          hideFooterPagination={true}
          checkboxSelection={true}
          height={560}
        />
      </div>
    </div>
  );
}
