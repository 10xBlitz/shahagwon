"use client";

import Image from "next/image";
import { useState } from "react";
import CircularTabs from "@/components/common/CircularTabs";
import ReleaseList from "@/components/page-components/wifipermit/ReleaseList";
import RegisterAddress from "@/components/page-components/wifipermit/RegisterAddress";

const wifiPermitTabs = [
  { label: "해제리스트", value: "release_list" },
  { label: "주소등록하기", value: "register_address" },
];

export default function FirewallReleasePage() {
  const [selectedWifiPermitTab, setSelectedWifiPermitTab] =
    useState(wifiPermitTabs[0].value);

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#F5F5F5] p-[48px]">
      <div className="flex flex-row items-center gap-[12px]">
        <Image
          src="/images/sidebar/off/wifipermit_off.svg"
          alt="Chat Icon"
          width={18}
          height={18}
        />
        <h1 className="text-[22px] font-extrabold">방화벽 해제</h1>
      </div>
      <div className="mt-[52px]">
        <CircularTabs
          tabs={wifiPermitTabs}
          selectedTab={selectedWifiPermitTab}
          onClick={(tab) => setSelectedWifiPermitTab(tab)}
        />
      </div>

      {selectedWifiPermitTab === "release_list" && <ReleaseList />}
      {selectedWifiPermitTab === "register_address" && <RegisterAddress />}
    </div>
  );
}
