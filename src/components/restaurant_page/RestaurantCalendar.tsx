export default function RestaurantCalendar() {
  const days = ["목", "금", "토", "일", "월", "화", "수"];

  return (
    <div className="rounded-lg bg-white">
      <div className="grid grid-cols-8 gap-0 border-y-2 border-l-2 border-[#F2F2F2]">
        <div className="border-r-2 border-b-2 border-[#F2F2F2] p-3 text-center"></div>
        {days.map((day) => (
          <div
            key={day}
            className={`bg-[#EAEAEA] p-3 text-center font-medium ${
              day === "일" ? "text-[#D04D4D]" : "text-[#000000]"
            }`}
          >
            {day}
          </div>
        ))}
        <div className="border-r-2 border-[#F2F2F2] p-8 text-center font-medium text-gray-700">
          점<br />심
        </div>
        {days.map((day) => (
          <div
            key={`lunch-${day}`}
            className="border-r-2 border-b-2 border-[#F2F2F2] p-8"
          ></div>
        ))}
        <div className="border-r-2 border-[#F2F2F2] p-8 text-center font-medium text-gray-700">
          저<br />녁
        </div>
        {days.map((day) => (
          <div
            key={`dinner-${day}`}
            className="border-r-2 border-[#F2F2F2] p-8"
          ></div>
        ))}
      </div>
    </div>
  );
}
