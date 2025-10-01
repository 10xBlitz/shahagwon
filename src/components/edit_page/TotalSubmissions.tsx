import { useState } from "react";
import Table from "../common/Table";
import { branchTabs } from "@/etc/tabs";
import SquareTabs from "../common/SquareTabs";
import { totalSubmissionsTemp } from "@/etc/temp";
import DateRangePicker from "../common/DateRangePicker";
import { totalSubmissionsTableConfig } from "@/etc/table_config";
import Button from "../common/Button";
import Input from "../common/Input";

export default function TotalSubmissions() {
  const [selectedTab, setSelectedTab] = useState(branchTabs[0].value);

  return (
    <div className="flex w-full max-w-[1500px] flex-col">
      <DateRangePicker />
      <Button
        onClick={() => {}}
        className="my-[24px] max-w-[120px] rounded bg-[#DFDFDF] py-[8px] text-[#A3A3A3]"
      >
        조회하기
      </Button>
      <div className="mb-[26px] flex flex-row justify-between">
        <SquareTabs
          tabs={branchTabs}
          selectedTab={selectedTab}
          onClick={(tab) => setSelectedTab(tab)}
        />
        <Input placeholder="이름을 검색하세요" />
      </div>
      <Table
        columns={totalSubmissionsTableConfig}
        rows={totalSubmissionsTemp}
        hideFooter
        height={400}
      />
    </div>
  );
}
