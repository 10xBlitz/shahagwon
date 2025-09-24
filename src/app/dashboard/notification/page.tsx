import Image from "next/image";
import { noticeTemp } from "@/utils/temp";
import NoticeCard from "@/components/common/NoticeCard";

export default function AnnouncementsPage() {
  const firstEightNotice = noticeTemp.slice(0, 8);

  return (
    <div className="h-full bg-[#F5F5F5] p-[48px]">
      <div className="mb-[20px] flex flex-row items-center gap-[12px]">
        <Image
          src="/images/sidebar/off/notification_off.svg"
          alt="Chat Icon"
          width={20}
          height={20}
        />
        <h1 className="text-[22px] font-extrabold">최근 공지사항</h1>
      </div>
      <ul className="grid max-w-[1170px] grid-cols-4 grid-rows-2 gap-x-[18px] gap-y-[40px]">
        {firstEightNotice.map((each, index) => (
          <NoticeCard
            key={index}
            image={each.image}
            title={each.title}
            description={each.description}
            date={each.date}
          />
        ))}
      </ul>
    </div>
  );
}
