import { useState } from "react";
import DateNavigator from "../common/DateNavigator";
import Button from "../common/Button";

export default function TodayPenaltyPoints() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handlePreviousDate = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const handleNextDate = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1);
    setSelectedDate(newDate);
  };

  return (
    <div className="mt-[30px] flex w-full flex-col items-end pr-[112px] pl-[22px]">
      <DateNavigator
        date={selectedDate.toLocaleDateString("en-CA")}
        onPreviousDate={handlePreviousDate}
        onNextDate={handleNextDate}
        arrowsBelow={true}
      />
      <Button
        onClick={() => {}}
        className="mt-[42px] rounded bg-[#0C6CCB] px-[16px] py-[8px] text-sm font-bold tracking-tighter text-white"
      >
        확정된 벌점 모두 보내기
      </Button>
      <div className="mt-[22px] h-px w-full bg-[#D8D9DB]" />
      <div className="flex flex-row">
        <div className="flex flex-1 flex-col"></div>
        <div className="flex flex-1 flex-col"></div>
        <div className="flex flex-1 flex-col"></div>
      </div>
    </div>
  );
}
