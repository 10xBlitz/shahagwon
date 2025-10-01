"use client";

import Image from "next/image";
import { useState } from "react";
import CircularTabs from "@/components/common/CircularTabs";
import ApplyForLunchBox from "@/components/restaurant_page/ApplyForLunchBox";
import LunchBoxManagement from "@/components/restaurant_page/LunchBoxManagement";
import TotalLunchBoxStatus from "@/components/question_page/TotalLunchBoxStatus";
import LunchBoxApplicationStatus from "@/components/restaurant_page/LunchBoxApplicationStatus";
import ChargingApplicationStatus from "@/components/restaurant_page/ChargingApplicationStatus";

const restaurantTabs = [
  {
    label: "도시락 신청하기",
    value: "applyForLunchBox",
  },
  {
    label: "나의 신청 현황",
    value: "myApplicationStatus",
  },
  {
    label: "전체 신청 현황",
    value: "totalApplicationStatus",
  },
  {
    label: "정기식 신청 현황",
    value: "regularApplicationStatus",
  },
  {
    label: "충전 신청 현황",
    value: "chargingApplicationStatus",
  },
  {
    label: "도시락 메뉴 관리",
    value: "lunchBoxMenuManagement",
  },
  {
    label: "정기식 메뉴 넣기",
    value: "addMenu",
  },
];

export default function LunchBoxApplicationPage() {
  const [selectedTab, setSelectedTab] = useState(restaurantTabs[0].value);

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#F5F5F5] p-[48px]">
      <div className="mb-[20px] flex flex-row items-center gap-[12px]">
        <Image
          src="/images/sidebar/off/restaurant_off.svg"
          alt="Chat Icon"
          width={20}
          height={20}
        />
        <h1 className="text-[22px] font-extrabold">도시락 신청</h1>
      </div>
      <CircularTabs
        tabs={restaurantTabs}
        selectedTab={selectedTab}
        onClick={(tab) => {
          setSelectedTab(tab);
        }}
      />
      {selectedTab == "applyForLunchBox" && <ApplyForLunchBox />}
      {selectedTab == "myApplicationStatus" && <LunchBoxApplicationStatus />}
      {selectedTab == "chargingApplicationStatus" && (
        <ChargingApplicationStatus />
      )}
      {selectedTab == "totalApplicationStatus" && <TotalLunchBoxStatus />}
      {selectedTab == "lunchBoxMenuManagement" && <LunchBoxManagement />}
    </div>
  );
}
