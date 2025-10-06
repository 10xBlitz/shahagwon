import Image from "next/image";

export default function FoodCard() {
  return (
    <div className="h-auto w-auto">
      <div className="h-[218px] w-[218px]">
        <Image
          src="/images/temp/meal_mock.jpeg"
          alt=""
          className="rounded-lg object-contain"
          height={218}
          width={218}
        />
      </div>
      <p className="mt-6 font-medium">미국식 닭고기 덮밥(레귤러)</p>
      <p className="font-medium">
        <span className="text-[#D04D4D]">11,000 </span> 원
      </p>
    </div>
  );
}
