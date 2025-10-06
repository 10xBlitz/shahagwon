import { useState } from "react";
import Button from "@/components/common/Button";

interface ScheduleSubmissionFormProps {
  title: string;
  onClose: () => void;
}

export default function ScheduleSubmissionForm({
  title,
  onClose,
}: ScheduleSubmissionFormProps) {
  const [scheduleData, setScheduleData] = useState({
    월: "",
    화: "",
    수: "",
    목: "",
    금: "",
    토: "",
    기타: "",
  });

  const handleInputChange = (day: string, value: string) => {
    setScheduleData((prev) => ({
      ...prev,
      [day]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Schedule submitted:", scheduleData);
    onClose();
  };

  const dayLabels = [
    { key: "월", label: "월" },
    { key: "화", label: "화" },
    { key: "수", label: "수" },
    { key: "목", label: "목" },
    { key: "금", label: "금" },
    { key: "토", label: "토" },
    { key: "기타", label: "기타" },
  ];

  const placeholders = {
    월: "사유와 시간을 꼭 명시해주세요 :)",
    화: "예) 도수치료 받고 오후 12시 등원",
    수: "예) 수학과의 오후 2시 퇴실 오후 5시 복귀",
    목: "예) 시대인재 현강 수강 오후 7시 조퇴",
    금: "",
    토: "",
    기타: "예) 1/17 가족모임으로 오후 6시 조퇴",
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="flex w-[500px] flex-col rounded-2xl bg-white p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-6 text-xl font-bold">{title}</h2>
        <div className="mb-6 flex flex-col gap-4">
          {dayLabels.map(({ key, label }) => (
            <div key={key} className="flex items-center gap-4">
              <div className="w-12 text-lg font-medium">{label}</div>
              <input
                type="text"
                value={scheduleData[key as keyof typeof scheduleData]}
                onChange={(e) => handleInputChange(key, e.target.value)}
                placeholder={placeholders[key as keyof typeof placeholders]}
                className="flex-1 rounded border border-[#DDDDDD] bg-[#FAFAFA] p-3 text-sm font-medium placeholder-[#747474] focus:border-[#738C9E] focus:outline-none"
              />
            </div>
          ))}
        </div>

        <Button
          onClick={handleSubmit}
          className="mb-4 rounded-lg bg-[#1C49AF] px-6 py-3 font-bold text-white transition-colors hover:bg-[#2A3B8A]"
        >
          9월용 정기일정 제출
        </Button>

        <div className="text-sm">
          <p>
            *정기일정 제출 시 &apos;사유&apos;와 &apos;시간`&apos;을 꼭
            명시해주세요.
          </p>
          <p>*제출 후 사감, 학부모 알림톡 승인 절차가 필요합니다.</p>
        </div>

        <div className="mt-4 flex items-center justify-center gap-[8px] text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#9E9E9E] text-xs text-white">
              1
            </div>
            <span className="font-bold text-[#656565]">정기일정 제출</span>
          </div>
          <div className="h-px w-8 bg-gray-300"></div>
          <div className="flex items-center space-x-2">
            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#9E9E9E] text-xs text-white">
              2
            </div>
            <span className="font-bold text-[#656565]">시감 승인</span>
          </div>
          <div className="h-px w-8 bg-gray-300"></div>
          <div className="flex items-center space-x-2">
            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#9E9E9E] text-xs text-white">
              3
            </div>
            <span className="font-bold text-[#656565]">학부모 승인</span>
          </div>
        </div>
      </div>
    </div>
  );
}
