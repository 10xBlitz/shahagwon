import { ChevronDown } from "lucide-react";

export default function RegisterAddress() {
  return (
    <div className="mt-[32px] flex w-full flex-col items-start">
      <p className="text-[#808080]">
        ** 학생 기기에서 랜덤 맥주소를 끄고 기기 맥주소를 사용하도록
        설정해주세요.
      </p>
      <p className="mt-[20px] text-xl font-bold">- 학생 선택</p>
      <div className="relative mt-6 w-full max-w-[250px]">
        <select className="w-full appearance-none rounded border border-[#C3C3C3] py-[18px] hover:border-black"></select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
      <p className="mt-[40px] text-xl font-bold">
        - 선택된 학생의 현재 등록된 기기 리스트
      </p>
    </div>
  );
}
