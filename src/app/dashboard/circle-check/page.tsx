"use client";

import { useState } from "react";
import { TabItem } from "@/types/types";
import BorderlessTabs from "@/components/common/BorderlessTabs";

const tabs: TabItem[] = [
  { label: "TODO 테이블", value: "todo-table" },
  { label: "핸드폰 관리", value: "phone-management" },
  { label: "반복 TODO 등록", value: "recurring-todo" },
  { label: "반복 카톡 메시지 등록", value: "recurring-kakao" },
  { label: "페이지 보기", value: "page-view" },
];

export default function HeadquartersStaffPage() {
  const [selectedTab, setSelectedTab] = useState("todo-table");

  return (
    <div className="flex w-full flex-col p-[44px]">
      <div className="w-full max-w-[1750px]">
        <BorderlessTabs
          tabs={tabs}
          selectedTab={selectedTab}
          onClick={setSelectedTab}
          alignment="start"
        />
      </div>
    </div>
  );
}
