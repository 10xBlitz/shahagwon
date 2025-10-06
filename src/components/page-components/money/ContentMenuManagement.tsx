import { useState } from "react";
import { managementTabs } from "@/etc/tabs";
import MenuManagement from "./MenuManagement";
import OptionManagement from "./OptionManagement";
import BorderlessTabs from "@/components/common/BorderlessTabs";

export default function ContentMenuManagement() {
  const [selectedContentMenuTab, setSelectedContentMenuTab] =
    useState(managementTabs[0].value);

  return (
    <div className="flex w-full flex-col">
      <div className="max-w-[161px]">
        <BorderlessTabs
          tabs={managementTabs}
          selectedTab={selectedContentMenuTab}
          onClick={(tab) => {
            setSelectedContentMenuTab(tab);
          }}
          alignment={"start"}
        />
      </div>
      {selectedContentMenuTab === "menu_management" && <MenuManagement />}
      {selectedContentMenuTab === "option_management" && <OptionManagement />}
    </div>
  );
}
