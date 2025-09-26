import { TabItem } from "@/types/types";
import Button from "./Button";

interface CircularTabsProps {
  tabs: TabItem[];
  selectedTab: string;
  onClick: (tab: string) => void;
}

export default function CircularTabs({
  tabs,
  selectedTab,
  onClick,
}: CircularTabsProps) {
  return (
    <div className="flex flex-row gap-[14px]">
      {tabs.map((tab, index) => (
        <Button
          key={index}
          onClick={() => {
            onClick(tab.value);
          }}
          className={`w-[180px] rounded-4xl border border-[#CACACA] py-[12px] font-medium ${tab.value === selectedTab ? "border-[#3D51AF] bg-[#3D51AF] text-white" : "text-[#878787]"}`}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
}
