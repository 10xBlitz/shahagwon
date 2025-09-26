import { useState } from "react";
import Table from "../common/Table";
import { branchTabs } from "@/etc/tabs";
import { totalSubmissionsTableConfig } from "@/etc/table_config";
import { totalSubmissionsTemp } from "@/etc/temp";
import SquareTabs from "../common/SquareTabs";

export default function TotalSubmissions() {
  const [selectedTab, setSelectedTab] = useState("entire");

  return (
    <div className="">
      <div className="mb-[26px] flex flex-row">
        <SquareTabs
          tabs={branchTabs}
          selectedTab={selectedTab}
          onClick={(tab) => setSelectedTab(tab)}
        />
      </div>
      <Table
        columns={totalSubmissionsTableConfig}
        rows={totalSubmissionsTemp}
        hideFooterPagination={true}
        height={324}
        className="max-w-[1500px]"
      />
    </div>
  );
}
