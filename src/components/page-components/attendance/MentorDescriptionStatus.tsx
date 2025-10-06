import { mentorDescriptionStatusTableConfig } from "@/etc/tableConfig";
import Table from "@/components/common/Table";
import { mentorDescriptionStatusTemp } from "@/etc/temp";

export default function MentorDescriptionStatus() {
  return (
    <div className="mt-[60px] max-w-[1000px]">
      <Table
        rows={mentorDescriptionStatusTemp}
        columns={mentorDescriptionStatusTableConfig}
        hideFooterPagination
      />
    </div>
  );
}
