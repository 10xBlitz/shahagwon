import { TabItem } from "@/types/types";
import Button from "./Button";

interface BorderlessTabsProps {
  tabs: TabItem[];
  selectedTab: string;
  onClick: (tab: string) => void;
  alignment: "start" | "center" | "end";
}

export default function BorderlessTabs({
  tabs,
  selectedTab,
  onClick,
  alignment,
}: BorderlessTabsProps) {
  return (
    <div
      className={`flex w-full flex-row items-center border-b border-b-[#D7D7D7] ${alignment === "start" ? "justify-start" : alignment === "center" ? "justify-center" : "justify-end"}`}
    >
      {tabs.map((tab, index) => (
        <Button
          key={index}
          onClick={() => {
            onClick(tab.value);
          }}
          className={`px-[16px] py-[16px] text-sm font-medium ${selectedTab === tab.value ? "border-b-2 border-b-[#1C75D2] text-[#1C75D2]" : "border-b border-b-transparent text-[#626262]"}`}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
}
