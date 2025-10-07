"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Button from "@/components/common/Button";
import { SquarePen, Trash2 } from "lucide-react";
import { useAnnouncement } from "@/queries/announcement";
import { convertToYYYYMMDD } from "@/lib/utils/timeUtils";

export default function NotificationDetail() {
  const { id } = useParams();
  const router = useRouter();

  const { data: announcement, isLoading } = useAnnouncement(id as string);

  const handleBack = () => {
    router.replace("/dashboard/notification");
  };

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#F5F5F5] p-[48px]">
      <div className="mb-[20px] flex flex-row items-center gap-[12px]">
        <Image
          src="/images/sidebar/off/notification_off.svg"
          alt="Chat Icon"
          width={20}
          height={20}
        />
        <h1 className="text-[22px] font-medium">최근 공지사항</h1>
      </div>
      <div className="h-[3px] w-full bg-[#707070]" />
      <div className="flex flex-row items-center justify-between border-b border-[#CACACA] px-[30px] py-[28px]">
        <p className="text-[22px] font-medium">
          {isLoading ? "" : announcement?.title}
        </p>

        <div className="flex flex-row items-center gap-[30px]">
          <SquarePen strokeWidth={1.25} size={24} />
          <Trash2 strokeWidth={1.25} size={24} />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between border-b border-[#CACACA] px-[30px] py-[24px]">
        <div className="flex flex-row items-center gap-[50px]">
          <p className="font-medium">작성일</p>
          <p className="font-medium">
            {isLoading ? "" : convertToYYYYMMDD(announcement?.created_at)}
          </p>
          <p className="font-medium">(조회 : {announcement?.views})</p>
        </div>
        <div className="flex flex-row items-center gap-[30px]">
          <p className="font-medium">작성자</p>
          <p className="font-medium">Ito&apos;y placeholder</p>
        </div>
      </div>
      <div className="flex flex-col gap-[16px] pt-[30px]">
        {announcement?.images &&
          announcement.images.length !== 0 &&
          announcement.images.map((image, index: number) => (
            <div key={index} className="relative h-[550px] w-full">
              <Image src={image} alt={image} fill className="object-contain" />
            </div>
          ))}
      </div>
      <div className="border-b-[3px] border-[#707070] px-[30px] py-[30px] whitespace-pre-line">
        <p>{isLoading ? "" : announcement?.content}</p>
      </div>
      <Button
        onClick={() => {
          handleBack();
        }}
        className="mt-[50px] w-fit self-center bg-[#3A3A3A] px-20 py-[12px] text-xl font-medium text-white"
      >
        목록
      </Button>
    </div>
  );
}
