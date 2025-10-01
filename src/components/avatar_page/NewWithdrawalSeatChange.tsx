"use client";

import { useState } from "react";
import BorderlessTabs from "../common/BorderlessTabs";
import NewGuidance from "./NewGuidance";
import Withdrawal from "./Withdrawal";
import SeatChange from "./SeatChange";

const newWithdrawalSeatChangeTabs = [
  { label: "신규 안내", value: "new_guidance" },
  { label: "퇴원", value: "withdrawal" },
  { label: "자리 이동", value: "seat_change" },
];

export default function NewWithdrawalSeatChange() {
  const [selectedTab, setSelectedTab] = useState(
    newWithdrawalSeatChangeTabs[0].value,
  );

  return (
    <div className="mt-[32px] flex flex-col">
      <BorderlessTabs
        tabs={newWithdrawalSeatChangeTabs}
        selectedTab={selectedTab}
        onClick={(tab) => {
          setSelectedTab(tab);
        }}
        alignment="center"
      />
      {selectedTab === "new_guidance" && <NewGuidance />}
      {selectedTab === "withdrawal" && <Withdrawal />}
      {selectedTab === "seat_change" && <SeatChange />}
    </div>
  );
}
