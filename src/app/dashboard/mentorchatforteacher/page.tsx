"use client";

import { useState } from "react";
import Image from "next/image";
import { coachingTabs } from "@/etc/tabs";
import CircularTabs from "@/components/common/CircularTabs";
import MentorMessageBox from "@/components/mentor_page/MessageBox";
import CoachingReport from "@/components/mentor_page/CoachingReport";
import CoachingHistory from "@/components/mentor_page/CoachingHistory";
import CoachingManagement from "@/components/mentor_page/CoachingManagement";

export default function MenteeChatRoomPage() {
  const [selectedCoachingTab, setSelectedCoachingTab] = useState("message_box");

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#F5F5F5] p-[48px]">
      <div className="mb-[28px] flex flex-row items-center gap-[12px]">
        <Image
          src="/images/sidebar/off/mentorchatforteacher_off.svg"
          alt="Chat Icon"
          width={24}
          height={24}
        />
        <h1 className="text-[22px] font-extrabold">멘티 채팅방</h1>
      </div>
      <CircularTabs
        tabs={coachingTabs}
        selectedTab={selectedCoachingTab}
        onClick={(tab) => {
          setSelectedCoachingTab(tab);
        }}
      />
      {selectedCoachingTab === "message_box" && <MentorMessageBox />}
      {selectedCoachingTab === "coaching_management" && <CoachingManagement />}
      {selectedCoachingTab === "coaching_report" && <CoachingReport />}
      {selectedCoachingTab === "coaching_history" && <CoachingHistory />}
    </div>
  );
}
