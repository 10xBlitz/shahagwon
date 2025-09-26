import Button from "./Button";
import { TabItem } from "@/types/types";

interface SquareTabsProps {
  tabs: TabItem[];
  selectedTab: string;
  onClick: (tab: string) => void;
}

export default function SquareTabs({
  tabs,
  selectedTab,
  onClick,
}: SquareTabsProps) {
  return (
    <div className="mb-[16px] flex flex-row">
      {tabs.map((tab, index) => (
        <Button
          key={index}
          onClick={() => {
            onClick(tab.value);
          }}
          className={`border p-3 text-sm font-medium ${index === 0 ? "rounded-l" : index === tabs.length - 1 ? "rounded-r" : ""} ${selectedTab === tab.value ? "border-[#D1D6DD] bg-[#EDF4FC] text-[#1C75D2]" : "border-[#DFDFDF] text-[#747474]"}`}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
}
