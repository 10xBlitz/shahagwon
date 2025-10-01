import { useState } from "react";
import SquareTabs from "../common/SquareTabs";

const memberDataTabs = [
  {
    label: "출입기록",
    value: "entry_exit_records",
  },
  {
    label: "모든 회원",
    value: "all_members",
  },
];

export default function ActualHistory() {
  const [selectedMemberDataTab, setSelectedMemberDataTab] =
    useState(memberDataTabs[0].value);

  return (
    <div>
      <SquareTabs
        tabs={memberDataTabs}
        selectedTab={selectedMemberDataTab}
        onClick={(tab) => {
          setSelectedMemberDataTab(tab);
        }}
      />
    </div>
  );
}
