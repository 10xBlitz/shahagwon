"use client";

import { useState } from "react";

const consultationTypes = [
  { label: "방문상담", value: "in_person" },
  { label: "전화상담", value: "phone" },
];

const branches = [
  { label: "강남점", value: "gangnam" },
  { label: "대치점", value: "daechi" },
  { label: "분당점", value: "bundang" },
  { label: "송파점", value: "songpa" },
];

export default function SetConsultationTime() {
  const [selectedConsultationType, setSelectedConsultationType] =
    useState("in_person");
  const [selectedBranch, setSelectedBranch] = useState("gangnam");

  return (
    <div className="mt-[40px] w-full space-y-6">
      <div className="space-y-4">
        <h3 className="text-xl font-bold">- 날짜를 선택해주세요</h3>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-bold">
          - 어떤 종류의 상담을 관리하고 싶으신가요?
        </h3>
        <div className="flex gap-4">
          {consultationTypes.map((type) => (
            <label
              key={type.value}
              className="flex cursor-pointer items-center space-x-2"
            >
              <input
                type="radio"
                name="consultationType"
                value={type.value}
                checked={selectedConsultationType === type.value}
                onChange={(e) => setSelectedConsultationType(e.target.value)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-lg">{type.label}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-bold">
          - 어느 지점을 관리하고 싶으신가요?
        </h3>
        <div className="flex gap-4">
          {branches.map((branch) => (
            <label
              key={branch.value}
              className="flex cursor-pointer items-center space-x-2"
            >
              <input
                type="radio"
                name="branch"
                value={branch.value}
                checked={selectedBranch === branch.value}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-lg">{branch.label}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-bold">
          - 상담을 닫고 싶은 시간을 선택해주세요
        </h3>
      </div>
    </div>
  );
}
