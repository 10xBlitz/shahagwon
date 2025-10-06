import { useState } from "react";
import Table from "../common/Table";
import DateNavigator from "../common/DateNavigator";
import { suspiciousListTableConfig } from "@/etc/tableConfig";
import { suspiciousListTemp } from "@/etc/temp";

export default function DaechiSuspiciousList() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handlePreviousDate = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const handleNextDate = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1);
    setSelectedDate(newDate);
  };

  return (
    <div className="mt-[40px] flex flex-col items-start">
      <div className="mb-[34px]">
        <DateNavigator
          date={selectedDate.toLocaleDateString("en-CA")}
          onPreviousDate={handlePreviousDate}
          onNextDate={handleNextDate}
          arrowsBelow={true}
        />
      </div>
      <Table
        rows={suspiciousListTemp}
        columns={suspiciousListTableConfig}
        height={415}
        hideFooterPagination
      />
    </div>
  );
}
