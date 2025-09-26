import { useState } from "react";
import Button from "../common/Button";
import { branchTabs } from "@/etc/tabs";
import Table from "../common/Table";
import { groupSendTemp } from "@/etc/temp";
import { groupSendTableConfig } from "@/etc/table_config";

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
  const [selectedUserTab, setSelectedUserTab] = useState("student");
  const [selectedModeTab, setSelectedModeTab] = useState("all");
  const [selectedBranchTab, setSelectedBranchTab] = useState("entire");

  return (
    <div className="mt-[32px] flex w-full flex-col rounded-lg bg-white px-[342px] py-[50px]">
      <div className="mb-[16px] flex flex-row">
        {userTabs.map((tab, index) => (
          <Button
            key={index}
            onClick={() => {
              setSelectedUserTab(tab.value);
            }}
            className={`border p-3 text-sm font-medium ${index === 0 ? "rounded-l" : index === userTabs.length - 1 ? "rounded-r" : ""} ${selectedUserTab === tab.value ? "border-[#D1D6DD] bg-[#EDF4FC] text-[#1C75D2]" : "border-[#DFDFDF] text-[#747474]"}`}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      <div className="mb-[16px] flex flex-row">
        {modeTabs.map((tab, index) => (
          <Button
            key={index}
            onClick={() => {
              setSelectedModeTab(tab.value);
            }}
            className={`border p-3 text-sm font-medium ${index === 0 ? "rounded-l" : index === userTabs.length - 1 ? "rounded-r" : ""} ${selectedModeTab === tab.value ? "border-[#D1D6DD] bg-[#EDF4FC] text-[#1C75D2]" : "border-[#DFDFDF] text-[#747474]"}`}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      <div className="mb-[16px] flex flex-row">
        {branchTabs.map((tab, index) => (
          <Button
            key={index}
            onClick={() => {
              setSelectedBranchTab(tab.value);
            }}
            className={`border p-3 text-sm font-medium ${index === 0 ? "rounded-l" : index === branchTabs.length - 1 ? "rounded-r" : ""} ${selectedBranchTab === tab.value ? "border-[#D1D6DD] bg-[#EDF4FC] text-[#1C75D2]" : "border-[#DFDFDF] text-[#747474]"}`}
          >
            {tab.label}
          </Button>
        ))}
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
