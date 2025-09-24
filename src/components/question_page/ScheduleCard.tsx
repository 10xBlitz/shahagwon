import Image from "next/image";

interface ScheduleCardProps {
  date: string;
  timeSlots: string;
  name: string;
  description: string;
  additionalInfo: string;
  profileImage?: string;
}

export default function ScheduleCard({
  date,
  timeSlots,
  name,
  description,
  additionalInfo,
  profileImage = "/images/question/default.webp",
}: ScheduleCardProps) {
  return (
    <div className="flex h-[320px] w-[1090px] items-center gap-[40px] rounded-2xl bg-white">
      <div className="h-full flex-shrink-0">
        <Image
          src={profileImage}
          alt="Profile"
          width={330}
          height={330}
          className="h-full w-auto rounded-l-2xl object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-4">
        <p className="text-lg font-medium">{date}</p>
        <div className="h-px w-[518px] bg-[#DFDFDF]" />
        <p className="text-lg font-medium">{timeSlots}</p>
        <div className="h-px w-[518px] bg-[#DFDFDF]" />
        <p className="text-lg font-medium text-[#566FE7]">
          {name} {description}
        </p>
        <div className="h-px w-[518px] bg-[#DFDFDF]" />
        <p className="text-lg font-medium">{additionalInfo}</p>
        <div className="h-px w-[518px] bg-[#DFDFDF]" />
      </div>
    </div>
  );
}
