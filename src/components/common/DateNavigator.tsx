import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";

interface DateNavigatorProps {
  date: string;
  onPreviousDate: () => void;
  onNextDate: () => void;
  arrowsBelow?: boolean;
  allowFutureDates?: boolean;
}

export default function DateNavigator({
  date,
  onPreviousDate,
  onNextDate,
  arrowsBelow = false,
  allowFutureDates = true,
}: DateNavigatorProps) {
  const currentDate = new Date().toLocaleDateString("en-CA");
  const isCurrentOrFutureDate = date >= currentDate;
  const disableNextButton = !allowFutureDates && isCurrentOrFutureDate;

  return (
    <div className="flex flex-col items-center">
      {!arrowsBelow && (
        <Arrows
          onPreviousDate={onPreviousDate}
          onNextDate={onNextDate}
          disableNext={disableNextButton}
        />
      )}

      <div className="my-2 font-semibold">{date}</div>

      {arrowsBelow && (
        <Arrows
          onPreviousDate={onPreviousDate}
          onNextDate={onNextDate}
          disableNext={disableNextButton}
        />
      )}
    </div>
  );
}

function Arrows({
  onPreviousDate,
  onNextDate,
  disableNext,
}: Omit<DateNavigatorProps, "date" | "arrowsBelow" | "allowFutureDates"> & {
  disableNext?: boolean;
}) {
  return (
    <div className="flex items-center">
      <Button
        onClick={onPreviousDate}
        className="rounded-l border border-[#8FB5E3] p-2 hover:border-[#1C75D2] hover:bg-[#EBF0F3]"
      >
        <ChevronLeft size={16} color="#8FB5E3" />
      </Button>
      <Button
        onClick={disableNext ? () => {} : onNextDate}
        className={`rounded-r border-y border-r p-2 ${
          disableNext
            ? "cursor-not-allowed border-gray-300 bg-gray-100"
            : "border-[#8FB5E3] hover:border-l hover:border-[#1C75D2] hover:bg-[#EBF0F3]"
        }`}
      >
        <ChevronRight size={16} color={disableNext ? "#A0A6AD" : "#8FB5E3"} />
      </Button>
    </div>
  );
}
