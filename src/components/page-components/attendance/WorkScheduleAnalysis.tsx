import { useState } from "react";
import AiInspection from "./AiInspection";
import ActualHistory from "./ActualHistory";
import BorderlessTabs from "@/components/common/BorderlessTabs";

const analysisTabs = [
  {
    label: "AI 검사 결과 보기",
    value: "ai_inspection",
  },
  {
    label: "실제 내역 보기",
    value: "actual_history",
  },
];

export default function WorkScheduleAnalysis() {
  const [selectedAnalysisTab, setSelectedAnalysisTab] =
    useState(analysisTabs[0].value);

  return (
    <div className="flex flex-col">
      <div className="mt-[36px] mb-[32px]">
        <BorderlessTabs
          tabs={analysisTabs}
          selectedTab={selectedAnalysisTab}
          onClick={(tab) => setSelectedAnalysisTab(tab)}
          alignment="center"
        />
      </div>
      {selectedAnalysisTab === "ai_inspection" && <AiInspection />}
      {selectedAnalysisTab === "actual_history" && <ActualHistory />}
    </div>
  );
}
