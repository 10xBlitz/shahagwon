export default function ReasonInput() {
  return (
    <div className="flex h-[330px] w-[400px] flex-col gap-4 rounded-lg bg-white p-6">
      <p className="text-xl font-medium">지각/결석 사유</p>
      <div className="h-px bg-[#DBDBDB]" />
      <textarea
        placeholder="구체적인 사유를 적어주세요."
        className="h-full resize-none rounded-t-lg bg-[#F0F0F0] px-[12px] pt-[30px] transition-all duration-100 hover:bg-[#E8E8E8]"
      />
    </div>
  );
}
