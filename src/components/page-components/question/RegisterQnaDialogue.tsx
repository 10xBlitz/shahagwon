"use client";

import dayjs, { Dayjs } from "dayjs";
import { branchTabs } from "@/etc/tabs";
import { ChevronDown } from "lucide-react";
import { useTeacher } from "@/queries/user";
import { useEffect, useState } from "react";
import { TimePicker } from "@mui/x-date-pickers";
import { useUserStore } from "@/hooks/useUserStore";
import DatePicker from "@/components/common/DatePicker";
import { useCreateQnaSession } from "@/queries/qnaSessions";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";

interface RegisterQnaDialogueProps {
  onClose: () => void;
}

export default function RegisterQnaDialogue({
  onClose,
}: RegisterQnaDialogueProps) {
  const { data: teachers } = useTeacher();
  const user = useUserStore((s) => s.user);

  const [selectedBranch, setSelectedBranch] = useState(branchTabs[1].label);
  const [selectedTeacher, setSelectedTeacher] = useState<string | null>(null);
  const [subject, setSubject] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState<Dayjs | null>(dayjs());
  const [endTime, setEndTime] = useState<Dayjs | null>(dayjs());

  const createQnaSession = useCreateQnaSession({
    branch: selectedBranch,
    date: date,
    time: startTime as Dayjs,
    teacher: selectedTeacher as string,
    applicant: user?.user_id as string,
    location: location,
  });

  const handleSubmit = () => {
    console.log("Initiating Q&A session submission...");

    createQnaSession.mutate(undefined, {
      onSuccess: () => {
        console.log("✅ Q&A session submission successful");
        onClose();
      },
    });
  };

  const slicedBranchTabs = branchTabs.slice(1, branchTabs.length);

  useEffect(() => {
    if (teachers && teachers.length > 0 && !selectedTeacher) {
      setSelectedTeacher(teachers[0].user_id);
    }
  }, [teachers, selectedTeacher]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="flex h-[830px] w-[450px] flex-col overflow-y-auto rounded bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#3D51B0] px-3 py-4">
          <p className="text-lg font-medium text-white">
            오프라인 질의응답 업로드
          </p>
        </div>
        {/* Form Content */}
        <div className="flex-1 space-y-3 px-[12px] py-[32px]">
          {/* Branch Selection */}
          <div>
            <h3 className="mb-2 text-base font-medium">호점 선택</h3>
            <div className="grid grid-cols-4 gap-3">
              {slicedBranchTabs.map((branch) => (
                <label
                  key={branch.label}
                  className="flex cursor-pointer items-center gap-2"
                >
                  <input
                    type="radio"
                    name="branch"
                    value={branch.label}
                    checked={selectedBranch === branch.label}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="h-4 w-4 cursor-pointer"
                  />
                  <span className="text-sm font-semibold">{branch.label}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Teacher Selection */}
          <div>
            <h3 className="text-lg font-medium">선생님 선택</h3>
            <div className="relative mt-4 w-full">
              <select
                value={selectedTeacher || ""}
                onChange={(e) => setSelectedTeacher(e.target.value)}
                className="w-full appearance-none rounded border border-gray-300 bg-white px-4 py-3 text-base focus:border-[#5B6EC5] focus:outline-none"
              >
                <option value="" disabled>
                  선생님을 선택하세요
                </option>
                {teachers?.map((teacher) => (
                  <option key={teacher.user_id} value={teacher.user_id}>
                    {teacher.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
          {/* Q&A Subject */}
          <div>
            <h3 className="text-lg font-medium">질의응답 과목</h3>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full rounded border border-gray-300 px-4 py-3 text-base focus:border-[#5B6EC5] focus:outline-none"
              placeholder=""
            />
          </div>
          {/* Q&A Location */}
          <div>
            <h3 className="text-lg font-medium">질의응답 장소</h3>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded border border-gray-300 px-4 py-3 text-base focus:border-[#5B6EC5] focus:outline-none"
              placeholder=""
            />
          </div>
          {/* Date Selection */}
          <div>
            <h3 className="text-lg font-medium">날짜 선택</h3>
            <DatePicker
              onDateSelect={(date) => {
                setDate(date);
              }}
              className="w-full"
            />
          </div>
          {/* Time Selection */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium">시작 시간</h3>
              <TimePicker
                value={startTime}
                onChange={(selectedTime) => setStartTime(selectedTime)}
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
                }}
                className="w-[232px]"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium">종료 시간</h3>
              <TimePicker
                value={endTime}
                onChange={(selectedTime) => setEndTime(selectedTime)}
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
                }}
                className="w-[232px]"
              />
            </div>
          </div>
          {/* Time Note */}
          <p className="text-sm text-gray-600">
            * 00분, 15분, 30분, 45분 중 선택해주세요
          </p>
        </div>
        {/* Footer with Submit Button */}
        <div className="flex justify-end border-t border-gray-200 bg-gray-50 p-4">
          <button
            onClick={handleSubmit}
            className="rounded bg-gray-300 px-8 py-3 text-base font-medium text-gray-600 transition-colors hover:bg-gray-400"
          >
            업로드
          </button>
        </div>
      </div>
    </div>
  );
}
