import { useState } from "react";
import { Pencil } from "lucide-react";
import ScheduleCard from "./ScheduleCard";
import { qnaRequestsTemp } from "@/etc/temp";
import Button from "@/components/common/Button";
import RegisterQnaDialogue from "./RegisterQnaDialogue";
import OfflineCalendar from "./OfflineApplicationCalendar";
import OfflineApplicationSendInquiry from "./OfflineApplicationSendInquiry";
import OfflineApplicationTimeSelector from "./OfflineApplicationTimeSelector";

export default function RequestQna() {
  const [openModal, setOpenModal] = useState<
    "register_qna" | "register_subject" | "none"
  >("none");

  return (
    <div className="mt-[50px] flex flex-col gap-[80px]">
      {qnaRequestsTemp.map((request, index) => (
        <div key={index} className="flex flex-col gap-[36px]">
          <ScheduleCard
            key={index}
            date={request.date}
            timeSlots={request.timeSlots}
            name={request.name}
            description={request.description}
            additionalInfo={request.additionalInfo}
          />
          <div className="mb-[44px] flex flex-row gap-[28px]">
            <OfflineCalendar
              year={request.year}
              month={request.month}
              selectedDate={request.selectedDate}
            />
            <OfflineApplicationTimeSelector />
            <OfflineApplicationSendInquiry />
          </div>
          <div className="h-px bg-[#D7D7D7]" />
        </div>
      ))}
      {openModal === "register_qna" && (
        <RegisterQnaDialogue
          onClose={() => {
            setOpenModal("none");
          }}
        />
      )}
      {/**
       *  Floating buttons
       */}
      <div className="fixed right-10 bottom-4 flex flex-col gap-2">
        <Button
          onClick={() => {
            setOpenModal("register_qna");
          }}
          icon={
            <Pencil
              strokeWidth={1.5}
              size={18}
              fill="#FFFFFF"
              stroke="#303030"
            />
          }
          iconPosition="left"
          className="gap-2 rounded-3xl bg-[#303030] px-[24px] py-[12px] font-semibold text-[#FFFFFF]"
        >
          질의응답 등록
        </Button>
        <Button
          icon={
            <Pencil
              strokeWidth={1.5}
              size={18}
              fill="#FFFFFF"
              stroke="#303030"
            />
          }
          iconPosition="left"
          className="gap-2 rounded-3xl bg-[#303030] px-[24px] py-[12px] font-semibold text-[#FFFFFF]"
        >
          과목 등록하기
        </Button>
      </div>
    </div>
  );
}
