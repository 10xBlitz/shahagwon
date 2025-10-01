"use client";

import Image from "next/image";
import { useState } from "react";
import MessageBox from "@/components/envelope_page/MessageBox";
import AllMessages from "@/components/envelope_page/AllMessages";
import SendToGroup from "@/components/envelope_page/SendToGroup";
import CallTextMessage from "@/components/envelope_page/CallTextMessage";
import CircularTabs from "@/components/common/CircularTabs";

const tabs = [
  {
    label: "메세지함",
    value: "message_box",
  },
  {
    label: "전체 메세지",
    value: "all_messages",
  },
  {
    label: "단체 보내기",
    value: "send_to_group",
  },
  {
    label: "통화문자목록",
    value: "call_text_list",
  },
];

export default function EnvelopePage() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].value);

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#F5F5F5] p-[48px]">
      <div className="mb-[28px] flex flex-row items-center gap-[12px]">
        <Image
          src="/images/sidebar/off/envelope_off.svg"
          alt="Chat Icon"
          width={20}
          height={20}
        />
        <h1 className="text-[22px] font-extrabold">나에게 온 메세지</h1>
      </div>
      <CircularTabs
        tabs={tabs}
        selectedTab={selectedTab}
        onClick={(tab) => setSelectedTab(tab)}
      />
      {selectedTab === "message_box" && <MessageBox />}
      {selectedTab === "all_messages" && <AllMessages />}
      {selectedTab === "send_to_group" && <SendToGroup />}
      {selectedTab === "call_text_list" && <CallTextMessage />}
    </div>
  );
}
