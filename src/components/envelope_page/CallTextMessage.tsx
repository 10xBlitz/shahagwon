import { useState } from "react";
import Button from "../common/Button";
import { branchTabs } from "@/etc/tabs";
import Table from "../common/Table";
import { callTextMessageTemp } from "@/etc/temp";
import { callTextMessageTableConfig } from "@/etc/table_config";

const communicationTabs = [
  {
    label: "전체",
    value: "all",
  },
  {
    label: "문자",
    value: "text",
  },
  {
    label: "통화",
    value: "call",
  },
];

export default function CallTextMessage() {
  const [selectedBranchTab, setSelectedBranchTab] = useState("entire");
  const [selectedCommunicationTab, setSelectedCommunicationTab] =
    useState("all");

  return (
    <div className="mt-[54px] max-w-[1700px]">
      <div className="flex flex-row justify-between">
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
        <div className="mb-[16px] flex flex-row">
          {communicationTabs.map((tab, index) => (
            <Button
              key={index}
              onClick={() => {
                setSelectedCommunicationTab(tab.value);
              }}
              className={`border p-3 text-sm font-medium ${index === 0 ? "rounded-l" : index === communicationTabs.length - 1 ? "rounded-r" : ""} ${selectedCommunicationTab === tab.value ? "border-[#D1D6DD] bg-[#EDF4FC] text-[#1C75D2]" : "border-[#DFDFDF] text-[#747474]"}`}
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>
      <Table
        rows={callTextMessageTemp}
        columns={callTextMessageTableConfig}
        density="compact"
        hideFooterPagination
        height={560}
      />
    </div>
  );
}
