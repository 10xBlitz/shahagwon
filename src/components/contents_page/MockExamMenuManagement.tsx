import { useState } from "react";
import { managementTabs } from "@/etc/tabs";
import BorderlessTabs from "../common/BorderlessTabs";
import MenuManagement from "../money_page/MenuManagement";
import OptionManagement from "../money_page/OptionManagement";

export default function MockExamMenuManagement() {
  const [selectedContentMenuTab, setSelectedContentMenuTab] =
    useState(managementTabs[0].value);

  return (
    <div className="flex w-full max-w-[1790px] flex-col">
      <div className="mt-[50px] max-w-[161px]">
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
