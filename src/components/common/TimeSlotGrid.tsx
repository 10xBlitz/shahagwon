interface TimeSlotGridProps {
  timeSlots: string[];
  selectedTimes: string[];
  onTimeToggle: (time: string) => void;
}

export default function TimeSlotGrid({
  timeSlots,
  selectedTimes,
  onTimeToggle,
}: TimeSlotGridProps) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {timeSlots.map((time) => (
        <label
          key={time}
          className="flex cursor-pointer items-center space-x-2"
        >
          <input
            type="checkbox"
            checked={selectedTimes.includes(time)}
            onChange={() => onTimeToggle(time)}
            className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm">{time}</span>
        </label>
      ))}
    </div>
  );
}
