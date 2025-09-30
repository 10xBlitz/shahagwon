"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "@/components/common/Button";
import SquareTabs from "@/components/common/SquareTabs";
import Table from "@/components/common/Table";
import { todoTableConfig } from "@/etc/table_config";

const checkStatusTabs = [
  { label: "미완료", value: "incomplete" },
  { label: "미확인", value: "unconfirmed" },
  { label: "전체", value: "all" },
];

export default function TodoPage() {
  const [selectedCheckStatusTab, setSelectedCheckStatusTab] =
    useState("incomplete");

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#F5F5F5] p-[48px]">
      <div className="flex max-w-[1500px] flex-col">
        <div className="flex flex-row items-center gap-[12px]">
          <Image
            src="/images/sidebar/off/check_off.svg"
            alt="Chat Icon"
            width={18}
            height={18}
          />
          <h1 className="text-[22px] font-extrabold">ToDo</h1>
        </div>
        <div className="mt-[36px] mb-[18px] flex flex-row items-center justify-between">
          <div className="flex flex-row gap-[36px]">
            <SquareTabs
              tabs={checkStatusTabs}
              selectedTab={selectedCheckStatusTab}
              onClick={(tab) => setSelectedCheckStatusTab(tab)}
            />
          </div>
          <div className="flex flex-row gap-4">
            <Button
              onClick={() => {}}
              className="rounded-sm bg-[#FBFCFE] px-[14px] py-[8px] text-sm font-semibold"
            >
              최상단으로 올리기
            </Button>
            <Button
              onClick={() => {}}
              className="rounded-sm bg-[#FBFCFE] px-[14px] py-[8px] text-sm font-semibold"
            >
              운영진에게만 보이기
            </Button>{" "}
            <Button
              onClick={() => {}}
              className="rounded-sm bg-[#FBFCFE] px-[14px] py-[8px] text-sm font-semibold"
            >
              항목 추가하기
            </Button>{" "}
            <Button
              onClick={() => {}}
              className="rounded-sm bg-[#FBFCFE] px-[14px] py-[8px] text-sm font-semibold"
            >
              삭제하기
            </Button>
          </div>
        </div>
        <Table
          height={660}
          columns={todoTableConfig}
          hideFooterPagination
          density="compact"
        />
      </div>
    </div>
  );
}
