import { useState } from "react";
import { branchTabs } from "@/etc/tabs";
import SquareTabs from "../common/SquareTabs";

export default function TurngateOperation() {
  const [selectedCoachingTab, setSelectedCoachingTab] = useState("entire");

  return (
    <div className="flex flex-col">
      <SquareTabs
        tabs={branchTabs}
        selectedTab={selectedCoachingTab}
        onClick={(tab) => {
          setSelectedCoachingTab(tab);
        }}
      />
    </div>
  );
}
