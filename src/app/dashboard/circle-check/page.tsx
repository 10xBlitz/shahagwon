"use client";

import { useState } from "react";
import { TabItem } from "@/types/types";
import PageView from "@/components/page-components/circle-check/PageView";
import BorderlessTabs from "@/components/common/BorderlessTabs";
import TodoTable from "@/components/page-components/circle-check/TodoTable";
import RecurringTodo from "@/components/page-components/circle-check/RecurringTodo";
import RecurringKakao from "@/components/page-components/circle-check/RecurringKakao";
import PhoneManagement from "@/components/page-components/circle-check/PhoneManagement";

const tabs: TabItem[] = [
  { label: "TODO 테이블", value: "todo_table" },
  { label: "핸드폰 관리", value: "phone_management" },
  { label: "반복 TODO 등록", value: "recurring_todo" },
  { label: "반복 카톡 메시지 등록", value: "recurring_kakao" },
  { label: "페이지 보기", value: "page_view" },
];

export default function HeadquartersStaffPage() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].value);

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
      {selectedTab === "todo_table" && <TodoTable />}
      {selectedTab === "phone_management" && <PhoneManagement />}
      {selectedTab === "recurring_todo" && <RecurringTodo />}
      {selectedTab === "recurring_kakao" && <RecurringKakao />}
      {selectedTab === "page_view" && <PageView />}
    </div>
  );
}
