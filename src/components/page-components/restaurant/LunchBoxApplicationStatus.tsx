import { CalendarDays } from "lucide-react";
import RestaurantCalendar from "./RestaurantCalendar";

export default function LunchBoxApplicationStatus() {
  return (
    <div className="mt-[32px] flex w-full max-w-[1160px] flex-col gap-[18px] rounded-xl bg-white px-[50px] py-[54px]">
      <div className="flex flex-row gap-[10px]">
        <CalendarDays color="#989898" />
        <p className="text-lg font-medium">도시락 신청현황</p>
      </div>
      <RestaurantCalendar />
    </div>
  );
}
