import { useState } from "react";
import Table from "../common/Table";
import { branchTabs } from "@/etc/tabs";
import { groupSendTemp } from "@/etc/temp";
import SquareTabs from "../common/SquareTabs";
import { groupSendTableConfig } from "@/etc/table_config";
import Input from "../common/Input";

const userTabs = [
  {
    label: "학생",
    value: "student",
  },
  {
    label: "학부모",
    value: "parent",
  },
];

const modeTabs = [
  {
    label: "ALL",
    value: "all",
  },
  {
    label: "SELECTED",
    value: "selected",
  },
];

export default function SendToGroup() {
  const [selectedUserTab, setSelectedUserTab] = useState(userTabs[0].value);
  const [selectedModeTab, setSelectedModeTab] = useState(modeTabs[0].value);
  const [selectedBranchTab, setSelectedBranchTab] = useState(branchTabs[0].value);

  return (
    <div className="mt-[32px] flex w-full flex-col rounded-lg bg-white px-[342px] py-[50px]">
      <div className="mb-[16px] flex flex-row">
        <SquareTabs
          tabs={userTabs}
          selectedTab={selectedUserTab}
          onClick={(tab) => setSelectedUserTab(tab)}
        />
      </div>
      <div className="mb-[16px] flex flex-row">
        <SquareTabs
          tabs={modeTabs}
          selectedTab={selectedModeTab}
          onClick={(tab) => setSelectedModeTab(tab)}
        />
      </div>
      <div className="mb-[16px] flex flex-row justify-between">
        <SquareTabs
          tabs={branchTabs}
          selectedTab={selectedBranchTab}
          onClick={(tab) => {
            setSelectedBranchTab(tab);
          }}
        />
        <Input placeholder="이름" />
      </div>
      <Table
        rows={groupSendTemp}
        columns={groupSendTableConfig}
        checkboxSelection
        hideFooterPagination
        density="compact"
        height={700}
      />
    </div>
  );
}
