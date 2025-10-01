"use client";

import Image from "next/image";
import { useState } from "react";
import { TabItem } from "@/types/types";
import CircularTabs from "@/components/common/CircularTabs";
import TurngateOperation from "@/components/iot_page/TurngateOperation";
import IotOperation from "@/components/iot_page/IotOperation";
import Sound from "@/components/iot_page/Sound";
import OperationSchedule from "@/components/iot_page/OperationSchedule";

const tabs: TabItem[] = [
  { label: "턴게이트 작동", value: "turngate_operation" },
  { label: "IOT 작동", value: "iot_operation" },
  { label: "중소리", value: "sound" },
  { label: "작동 예약", value: "operation_schedule" },
];

export default function IoTPage() {
  const [selectedTab, setSelectedTab] = useState("turngate_operation");

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#F5F5F5] p-[48px]">
      <div className="mb-[28px] flex flex-row items-center gap-[12px]">
        <Image
          src="/images/sidebar/off/iot_off.svg"
          alt="Chat Icon"
          width={18}
          height={18}
        />
        <h1 className="text-[22px] font-extrabold">IOT 작동</h1>
      </div>
      <div className="w-full max-w-[1750px]">
        <CircularTabs
          tabs={tabs}
          selectedTab={selectedTab}
          onClick={setSelectedTab}
        />
        <div className="mt-6">
          {selectedTab === "turngate_operation" && <TurngateOperation />}
          {selectedTab === "iot_operation" && <IotOperation />}
          {selectedTab === "sound" && <Sound />}
          {selectedTab === "operation_schedule" && <OperationSchedule />}
        </div>
      </div>
    </div>
  );
}
