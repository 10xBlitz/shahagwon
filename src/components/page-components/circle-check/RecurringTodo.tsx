import { useState } from "react";
import Button from "@/components/common/Button";
import SquareTabs from "@/components/common/SquareTabs";
import Table from "@/components/common/Table";
import { recurringTodoTableConfig } from "@/etc/tableConfig";
import { Plus } from "lucide-react";

const recurringTodoTabs = [
  { label: "전체", value: "all" },
  { label: "#행정팀", value: "admin_team" },
  { label: "가을", value: "gaeul" },
  { label: "윤주", value: "yunju" },
  { label: "수아", value: "sua" },
  { label: "보경", value: "bokyeong" },
  { label: "시진", value: "sijin" },
  { label: "용범", value: "yongbeom" },
  { label: "도훈", value: "dohun" },
  { label: "기태", value: "gitae" },
  { label: "종혁", value: "jonghyeok" },
  { label: "지성", value: "jiseong" },
  { label: "석민", value: "seokmin" },
  { label: "#시설", value: "facilities" },
  { label: "#코딩", value: "coding" },
  { label: "#방학팀", value: "vacation_team" },
  { label: "#아이디어", value: "idea" },
  { label: "#기타", value: "etc" },
  { label: "[연간 일정표]", value: "annual_schedule" },
  { label: "고운", value: "goeun" },
  { label: "관리_강남점", value: "management_gangnam" },
  { label: "관리_대치점2F", value: "management_daechi_2f" },
  { label: "관리_대치점3F", value: "management_daechi_3f" },
  { label: "관리_대치점6F", value: "management_daechi_6f" },
  { label: "관리_송파점", value: "management_songpa" },
  { label: "관리_분당점", value: "management_bundang" },
  { label: "업무 일정표", value: "work_schedule" },
  { label: "제크리스트", value: "checklist" },
  { label: "#지영", value: "jiyoung" },
  { label: "관리_강남2호점", value: "management_gangnam_2" },
  { label: "관리_대구점", value: "management_daegu" },
  { label: "식재하기", value: "planting" },
];

export default function RecurringTodo() {
  const [selectedRecurringTodoTab, setSelectedRecurringTodoTab] =
    useState(recurringTodoTabs[0].value);

  return (
    <div className="flex flex-col">
      <div className="mt-[50px] mb-[30px] flex flex-row items-center gap-4">
        <p className="text-lg font-bold">반복 TODO 등록 내역</p>
        <Button
          onClick={() => {}}
          icon={<Plus color="#FFFFFF" size={18} />}
          iconPosition="left"
          className="gap-2 rounded-lg bg-[#0C6CCB] px-[12px] py-[6px] text-sm font-bold text-white"
        >
          추가하기
        </Button>
      </div>
      <div className="mb-[14px]">
        <SquareTabs
          tabs={recurringTodoTabs}
          selectedTab={selectedRecurringTodoTab}
          onClick={(tab) => setSelectedRecurringTodoTab(tab)}
        />
      </div>
      <Table
        columns={recurringTodoTableConfig}
        height={400}
        hideFooterPagination
      />
    </div>
  );
}
