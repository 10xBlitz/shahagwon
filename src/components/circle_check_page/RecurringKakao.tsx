import Button from "../common/Button";

export default function RecurringKakao() {
  return (
    <div className="flex w-full flex-col">
      <div className="mt-[50px] flex flex-row items-center gap-[20px]">
        <p className="text-lg font-bold">반복 카카오 등록 내역</p>
        <Button
          onClick={() => {}}
          hasPlus
          className="gap-2 rounded-lg bg-[#0C6CCB] px-[12px] py-[6px] text-sm font-bold text-white"
        >
          추가하기
        </Button>
      </div>
    </div>
  );
}
