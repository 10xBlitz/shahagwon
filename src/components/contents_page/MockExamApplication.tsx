import Button from "../common/Button";

export default function MockExamApplication() {
  return (
    <div className="mt-[40px] w-full">
      <div className="flex w-full max-w-[1200px] flex-row items-center justify-between rounded-lg bg-white px-[30px] py-[16px]">
        <p className="text-lg font-medium text-[#111A50]">
          - 충전금(선배페이) 잔액 : <span className="text-[#566FE7]">0원</span>
        </p>
        <Button
          onClick={() => {}}
          className="gap-2 rounded bg-[#E2EEFB] px-[18px] py-[6px] text-sm font-semibold text-[#12467A] hover:bg-[#C5E0F7]"
          hasArrow
        >
          충전하기
        </Button>
      </div>
    </div>
  );
}
