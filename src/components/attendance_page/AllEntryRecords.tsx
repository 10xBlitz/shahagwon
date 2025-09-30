import { useState } from "react";
import DateNavigator from "../common/DateNavigator";
import Table from "../common/Table";
import { entryExitRecordTableConfig } from "@/etc/table_config";
import { entryExitRecordTemp } from "@/etc/temp";

export default function AllEntryRecords() {
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
    <div className="px-[24px]">
      <div className="mb-[16px] flex flex-row items-center justify-between">
        <DateNavigator
          date={selectedDate.toLocaleDateString("en-CA")}
          arrowsBelow={true}
          onPreviousDate={handlePreviousDate}
          onNextDate={handleNextDate}
        />
      </div>
      <Table
        rows={entryExitRecordTemp}
        columns={entryExitRecordTableConfig}
        hideFooterPagination
        height={400}
      />
    </div>
  );
}
