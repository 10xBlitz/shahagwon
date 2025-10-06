import Button from "@/components/common/Button";

interface StudyScheduleCardProps {
  title: string;
  onButtonClick: () => void;
}

export default function StudyScheduleCard({
  title,
  onButtonClick,
}: StudyScheduleCardProps) {
  return (
    <div className="h-[220px] w-[570px] overflow-hidden rounded-xl bg-white shadow-sm">
      <div className="flex items-center justify-between bg-[#EBEBEB] px-[32px] py-[12px]">
        <h2 className="text-xl font-bold tracking-tighter">{title}</h2>
        <Button
          onClick={onButtonClick}
          className="rounded-full border border-gray-300 bg-white px-4 py-1 text-sm font-bold text-[#3D51AF] hover:cursor-pointer"
        >
          #자세히
        </Button>
      </div>
      <div className="space-y-3 p-[32px]">
        <div className="flex justify-between text-sm">
          <span className="text-lg tracking-tighter">총 공부시간</span>
          <span className="font-mediumr text-lg">시간 분</span>
        </div>
        <div className="h-px w-full bg-[#E8E8E8]" />
        <div className="flex justify-between text-sm">
          <span className="text-lg tracking-tighter">공부 시간 등수</span>
          <span className="font-mediumr text-lg">
            <span className="text-2xl text-[#D04D4D]">/</span> 등
          </span>
        </div>
        <div className="h-px w-full bg-[#E8E8E8]" />
      </div>
    </div>
  );
}
