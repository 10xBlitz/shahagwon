"use client";

import { useState } from "react";
import Image from "next/image";
import CircularTabs from "@/components/common/CircularTabs";
import ReservationList from "@/components/page-components/booking/ReservationList";
import AvailableTimeManagement from "@/components/page-components/booking/AvailableTimeManagement";
import SetConsultationTime from "@/components/page-components/booking/SetConsultationTime";
import InfoSessionReservationList from "@/components/page-components/booking/InfoSessionReservationList";

const consultationTabs = [
  { label: "예약리스트", value: "reservation_list" },
  { label: "상담 가능시간 관리", value: "available_time_management" },
  { label: "상담 시간 달기", value: "set_consultation_time" },
  { label: "설명회 예약 리스트", value: "info_session_reservation_list" },
];

export default function CounselingAppointmentManagementPage() {
  const [selectedConsultationTab, setSelectedConsultationTab] =
    useState(consultationTabs[0].value);

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#F5F5F5] p-[48px]">
      <div className="mb-[28px] flex flex-row items-center gap-[12px]">
        <Image
          src="/images/sidebar/off/booking_off.svg"
          alt="Booking Icon"
          width={18}
          height={18}
        />
        <h1 className="text-[22px] font-extrabold">상담 예약 관리</h1>
      </div>
      <CircularTabs
        tabs={consultationTabs}
        selectedTab={selectedConsultationTab}
        onClick={(tab) => {
          setSelectedConsultationTab(tab);
        }}
      />
      {selectedConsultationTab === "reservation_list" && <ReservationList />}
      {selectedConsultationTab === "available_time_management" && <AvailableTimeManagement />}
      {selectedConsultationTab === "set_consultation_time" && <SetConsultationTime />}
      {selectedConsultationTab === "info_session_reservation_list" && <InfoSessionReservationList />}
    </div>
  );
}
