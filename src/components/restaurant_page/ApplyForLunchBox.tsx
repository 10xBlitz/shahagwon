import { useState } from "react";
import Button from "../common/Button";
import SmallCalendar from "../edit_page/SmallCalendar";
import FoodCard from "./FoodCard";

export default function ApplyForLunchBox() {
  const [meal, setMeal] = useState("lunch");

  return (
    <div className="mt-[62px] flex w-full flex-row gap-[56px]">
      <div className="flex max-w-[375px] flex-col gap-[46px]">
        <div className="w-[375px] rounded-lg bg-white px-6 py-5">
          <p className="text-lg font-medium text-[#111A50]">- 선택메뉴 :</p>
        </div>
        <SmallCalendar sizeClassName="h-[330px] w-full" />
        <div className="rounded-lg bg-white px-[28px] py-[24px]">
          <div className="flex flex-row gap-[12px]">
            <Button
              onClick={() => {
                setMeal("lunch");
              }}
              className={`w-full rounded-4xl border border-[#C1C1C1] py-[10px] ${meal == "lunch" ? "bg-[#3D51AF] text-white" : "bg-white text-[#3D51AF]"}`}
            >
              점심
            </Button>
            <Button
              onClick={() => {
                setMeal("dinner");
              }}
              className={`w-full rounded-4xl border border-[#C1C1C1] py-[10px] ${meal == "dinner" ? "bg-[#3D51AF] text-white" : "bg-white text-[#3D51AF]"}`}
            >
              점저녁
            </Button>
          </div>
          <p className="mt-[26px] text-xl font-medium text-black">
            금액 : <span className="text-[#566FE7]">0원</span>
          </p>
          <div className="mt-[16px] h-px bg-[#D9D9D9]" />
          <Button
            onClick={() => {}}
            className="mt-[26px] w-full rounded-4xl bg-[#111A50] px-[100px] py-[16px] text-white"
          >
            신청하기
          </Button>
        </div>
      </div>
      <div className="max-w-735px flex flex-col gap-[46px]">
        <div className="flex w-[735px] flex-row items-center justify-between rounded-lg bg-white px-6 py-4">
          <p className="text-lg font-medium text-[#111A50]">
            - 충전금 잔액 : <span className="text-[#566FE7]">0원</span>
          </p>
          <Button
            onClick={() => {}}
            hasArrow
            className="gap-[2px] rounded-3xl border border-[#566FE7] px-[20px] py-[6px] font-medium text-[#566FE7]"
          >
            충전하기
          </Button>
        </div>
        <FoodCard />
      </div>
    </div>
  );
}
