"use client";

import { useState } from "react";
import Input from "@/components/common/Input";
import Table from "@/components/common/Table";
import Button from "@/components/common/Button";
import { branchTabs } from "@/etc/tabs";
import SquareTabs from "@/components/common/SquareTabs";
import { allStudentInfoTableConfig } from "@/etc/tableConfig";

const enrollmentStatusTabs = [
  { label: "재원생", value: "current_student" },
  { label: "비재원생", value: "non_enrolled_student" },
];

const userTypeTabs = [
  { label: "ALL", value: "all" },
  { label: "학생", value: "student" },
  { label: "선생님", value: "teacher" },
];

const actionButtons = [
  { label: "벌점 추가", value: "add_penalty" },
  { label: "출입기록 및 벌점", value: "entry_record_and_penalty" },
  { label: "정기일정", value: "regular_schedule" },
  { label: "프로필 보기", value: "view_profile" },
  { label: "프로필 작성 팀크 발송", value: "send_profile_creation_task" },
  { label: "사험결과", value: "test_result" },
  { label: "신규TODO", value: "new_todo" },
  { label: "퇴원TODO", value: "withdrawal_todo" },
  { label: "수동 출입 넣기", value: "manual_entry_input" },
  { label: "사험판 코칭 설문", value: "test_result_coaching_survey" },
  { label: "멘토 프로필 수정 팀크", value: "mentor_profile_edit_task" },
];

export default function AllStudentInfo() {
  const [selectedStatusTab, setSelectedStatusTab] = useState(
    enrollmentStatusTabs[0].value,
  );
  const [selectedBranchTab, setSelectedBranchTab] = useState(
    branchTabs[0].value,
  );
  const [selectedUserTypeTab, setSelectedUserTypeTab] = useState(
    userTypeTabs[0].value,
  );

  return (
    <div className="mt-[32px] flex flex-col">
      <div className="flex flex-col gap-[18px]">
        <SquareTabs
          tabs={enrollmentStatusTabs}
          selectedTab={selectedStatusTab}
          onClick={(tab) => {
            setSelectedStatusTab(tab);
          }}
        />
        <SquareTabs
          tabs={branchTabs}
          selectedTab={selectedBranchTab}
          onClick={(tab) => {
            setSelectedBranchTab(tab);
          }}
        />
        <SquareTabs
          tabs={userTypeTabs}
          selectedTab={selectedUserTypeTab}
          onClick={(tab) => {
            setSelectedUserTypeTab(tab);
          }}
        />
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="mt-[24px] mb-[12px] flex flex-row gap-[8px]">
          {actionButtons.map((tab, index) => (
            <Button
              key={index}
              onClick={() => {}}
              className="rounded border border-[#96C2EF] bg-[#F5F5F5] px-[12px] py-[6px] text-sm font-bold tracking-tight text-[#0C6CCB] hover:bg-[#E2EDFB]"
            >
              {tab.label}
            </Button>
          ))}
        </div>
        <Input placeholder="이름 or 전화번호" />
      </div>
      <Table columns={allStudentInfoTableConfig} hideFooter height={800} />
    </div>
  );
}
