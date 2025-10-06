import { mySuggestionTemp } from "@/etc/temp";
import Table from "@/components/common/Table";
import { mySuggestionTableConfig } from "@/etc/tableConfig";

export default function MySuggestions() {
  return (
    <div className="mt-[38px] flex w-full max-w-[1180px] flex-col">
      <p className="text-sm text-[#3D51AF]">2025-9-26</p>
      <Table
        rows={mySuggestionTemp}
        columns={mySuggestionTableConfig}
        height={420}
        hideFooterPagination
        checkboxSelection
      />
    </div>
  );
}
