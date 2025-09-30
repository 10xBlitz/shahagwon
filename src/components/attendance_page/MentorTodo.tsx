import {
  mentorTodoDetailTableConfig,
  mentorTodoOverviewTableConfig,
} from "@/etc/table_config";
import Table from "../common/Table";

export default function MentorTodo() {
  return (
    <div className="flex max-w-[1500px] flex-col gap-[20px]">
      <Table columns={mentorTodoOverviewTableConfig} hideFooterPagination />
      <Table columns={mentorTodoDetailTableConfig} hideFooterPagination />
    </div>
  );
}
