import { useState } from "react";
import { branchTabs } from "@/etc/tabs";
import SquareTabs from "@/components/common/SquareTabs";

export default function TurngateOperation() {
  const [selectedCoachingTab, setSelectedCoachingTab] = useState(branchTabs[0].value);

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
