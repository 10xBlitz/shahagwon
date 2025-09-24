import { useState } from "react";
import Button from "../common/Button";
import { TimePicker } from "@mui/x-date-pickers";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";

const statusTabs = [
  {
    label: "#지각",
    value: "late",
  },
  {
    label: "#결석",
    value: "absent",
  },
  {
    label: "#조기하원",
    value: "early_departure",
  },
  {
    label: "#외출",
    value: "outing",
  },
];

export default function StatusSelector() {
  const [selectedStatus, setSelectedStatus] = useState("late");

  return (
    <div className="flex h-[330px] w-[400px] flex-col gap-4 rounded-lg bg-white p-6">
      <div className="flex flex-row gap-[10px]">
        {statusTabs.map((status, index) => (
          <Button
            key={index}
            onClick={() => {
              setSelectedStatus(status.value);
            }}
            className={`w-[80px] rounded-4xl border border-[#CACACA] py-[6px] ${status.value === selectedStatus ? "bg-[#3D51AF] text-white" : "text-black"}`}
          >
            {status.label}
          </Button>
        ))}
      </div>
      <div className="h-px bg-[#DBDBDB]" />
      {selectedStatus === "late" && (
        <div className="flex flex-col gap-4">
          <p className="font-medium">학원 도착 시간</p>
          <TimePicker
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
              seconds: renderTimeViewClock,
            }}
            className="w-[232px]"
          />
        </div>
      )}
      {selectedStatus === "early_departure" && (
        <div className="flex flex-col gap-4">
          <p className="font-medium">학원 나가는 시간</p>
          <TimePicker
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
              seconds: renderTimeViewClock,
            }}
            className="w-[232px]"
          />
        </div>
      )}
      {selectedStatus === "outing" && (
        <div className="flex flex-col gap-4">
          <p className="font-medium">학원 나가는 시간</p>
          <TimePicker
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
              seconds: renderTimeViewClock,
            }}
            className="w-[232px]"
          />
          <p className="font-medium">학원 도착 시간</p>
          <TimePicker
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
              seconds: renderTimeViewClock,
            }}
            className="w-[232px]"
          />
        </div>
      )}
    </div>
  );
}
