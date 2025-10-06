"use client";

import Image from "next/image";
import { useState } from "react";
import CircularTabs from "@/components/common/CircularTabs";
import MathQuestions from "@/components/page-components/question/MathQuestions";
import KoreanQuestions from "@/components/page-components/question/KoreanQuestions";
import EnglishQuestions from "@/components/page-components/question/EnglishQuestions";
import OfflineApplication from "@/components/page-components/question/OfflineApplication";
import ExplorationQuestions from "@/components/page-components/question/ExplorationQuestions";

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
  const [selectedTab, setSelectedTab] = useState(editTabs[0].value);

  return (
    <div className="h-full w-full flex-col overflow-y-auto bg-[#F5F5F5] p-[48px]">
      <div className="mb-[28px] flex flex-row items-center gap-[12px]">
        <Image
          src="/images/sidebar/off/question_off.svg"
          alt="Chat Icon"
          width={24}
          height={24}
        />
        <h1 className="text-[22px] font-extrabold">질의응답</h1>
      </div>
      <div className="flex w-full justify-center">
        <CircularTabs
          tabs={editTabs}
          selectedTab={selectedTab}
          onClick={(tab) => {
            setSelectedTab(tab);
          }}
        />
      </div>
      {selectedTab === "offlineApplication" && <OfflineApplication />}
      {selectedTab === "koreanQuestions" && <KoreanQuestions />}
      {selectedTab === "mathQuestions" && <MathQuestions />}
      {selectedTab === "englishQuestions" && <EnglishQuestions />}
      {selectedTab === "explorationQuestions" && <ExplorationQuestions />}
    </div>
  );
}
