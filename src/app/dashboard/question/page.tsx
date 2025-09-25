"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "@/components/common/Button";
import OfflineApplication from "@/components/question_page/OfflineApplication";
import KoreanQuestions from "@/components/question_page/KoreanQuestions";
import MathQuestions from "@/components/question_page/MathQuestions";
import EnglishQuestions from "@/components/question_page/EnglishQuestions";

const editTabs = [
  {
    label: "오프라인 신청방",
    value: "offlineApplication",
  },
  {
    label: "국어 질의응답방",
    value: "koreanQuestions",
  },
  {
    label: "수학 질의응답방",
    value: "mathQuestions",
  },
  {
    label: "영어 질의응답방",
    value: "englishQuestions",
  },
  {
    label: "탐구 질의응답방",
    value: "explorationQuestions",
  },
];

export default function QuestionPage() {
  const [selectedTab, setSelectedTab] = useState("offlineApplication");

  return (
    <div className="h-full w-full overflow-y-auto bg-[#F5F5F5] p-[48px]">
      <div className="mb-[28px] flex flex-row items-center gap-[12px]">
        <Image
          src="/images/sidebar/off/question_off.svg"
          alt="Chat Icon"
          width={24}
          height={24}
        />
        <h1 className="text-[22px] font-extrabold">질의응답</h1>
      </div>
      <div className="flex flex-row items-center justify-center gap-[14px]">
        {editTabs.map((tab, index) => (
          <Button
            key={index}
            onClick={() => {
              setSelectedTab(tab.value);
            }}
            className={`w-[180px] rounded-4xl border border-[#CACACA] py-[12px] font-medium ${tab.value === selectedTab ? "border-[#3D51AF] bg-[#3D51AF] text-white" : "text-[#878787]"}`}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      {selectedTab === "offlineApplication" && <OfflineApplication />}
      {selectedTab === "koreanQuestions" && <KoreanQuestions />}
      {selectedTab === "mathQuestions" && <MathQuestions />}
      {selectedTab === "englishQuestions" && <EnglishQuestions />}
      {selectedTab === "explorationQuestions" && <EnglishQuestions />}
    </div>
  );
}
