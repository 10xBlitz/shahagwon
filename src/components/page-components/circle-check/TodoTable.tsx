import { useState } from "react";
import Button from "@/components/common/Button";
import SquareTabs from "@/components/common/SquareTabs";
import Table from "@/components/common/Table";
import {
  circleCheckTodoTableConfig,
  todoManagementTableConfig,
} from "@/etc/tableConfig";
import { Plus, RefreshCcw } from "lucide-react";

const statusTabs = [
  { label: "미완료", value: "incomplete" },
  { label: "전체", value: "all" },
];
const nameTabs = [
  { label: "전체", value: "all" },
  { label: "전혜", value: "jeonhye" },
  { label: "박가을", value: "park_gaeul" },
  { label: "심윤주", value: "sim_yunju" },
  { label: "최수아", value: "choi_sua" },
  { label: "김보경", value: "kim_bokyeong" },
  { label: "홍석민", value: "hong_seokmin" },
  { label: "박지영", value: "park_jiyoung" },
  { label: "김가빈", value: "kim_gabin" },
  { label: "박종혁", value: "park_jonghyeok" },
  { label: "유도훈", value: "yu_dohun" },
  { label: "고용범", value: "go_yongbeom" },
];

const todoStatusTabs = [
  { label: "미완료", value: "incomplete" },
  { label: "완료", value: "complete" },
  { label: "전체", value: "all" },
];

const todoFilterTabs = [
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
  { label: "종호", value: "jongho" },
  { label: "업무 일정표", value: "work_schedule" },
  { label: "#지영", value: "jiyoung" },
];

const branchManagementTabs = [
  { label: "관리_강남점", value: "management_gangnam" },
  { label: "관리_대치점2F", value: "management_daechi_2f" },
  { label: "관리_대치점3F", value: "management_daechi_3f" },
  { label: "관리_대치점6F", value: "management_daechi_6f" },
  { label: "관리_송파점", value: "management_songpa" },
  { label: "관리_분당점", value: "management_bundang" },
  { label: "관리_강남2호점", value: "management_gangnam_2" },
  { label: "관리_대구점", value: "management_daegu" },
];

export default function TodoTable() {
  const [selectedStatusTab, setSelectedStatusTab] = useState(statusTabs[0].value);
  const [selectedNameTab, setSelectedNameTab] = useState(nameTabs[0].value);
  const [selectedTodoStatusTab, setSelectedTodoStatusTab] =
    useState(todoStatusTabs[0].value);
  const [selectedTodoFilterTab, setSelectedTodoFilterTab] = useState(todoFilterTabs[0].value);
  const [selectedBranchManagementTab, setSelectedBranchManagementTab] =
    useState(branchManagementTabs[0].value);

  return (
    <div className="mt-[36px] flex w-full max-w-[1850px] flex-col">
      <div className="flex flex-row items-center gap-4">
        <p className="text-lg font-bold">업무 전달사항</p>
        <Button
          onClick={() => {}}
          icon={<Plus color="#FFFFFF" size={18} />}
          iconPosition="left"
          className="gap-2 rounded-lg bg-[#0C6CCB] px-[12px] py-[6px] text-sm font-bold text-white"
        >
          추가하기
        </Button>
      </div>
      <div className="mt-[24px] mb-[18px] flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-[36px]">
          <SquareTabs
            tabs={statusTabs}
            selectedTab={selectedStatusTab}
            onClick={(tab) => {
              setSelectedStatusTab(tab);
            }}
          />
          <SquareTabs
            tabs={nameTabs}
            selectedTab={selectedNameTab}
            onClick={(tab) => {
              setSelectedNameTab(tab);
            }}
          />
        </div>
        <div className="flex flex-row gap-4">
          <Button
            onClick={() => {}}
            className="rounded-sm bg-[#FBFCFE] px-[14px] py-[8px] text-sm font-semibold"
          >
            삭제하기
          </Button>
          <Button
            onClick={() => {}}
            className="rounded-sm bg-[#FBFCFE] px-[14px] py-[8px] text-sm font-semibold"
          >
            삭제하기
          </Button>
        </div>
      </div>
      <Table columns={circleCheckTodoTableConfig} hideFooter height={200} />
      <div className="mt-[50px] mb-[26px] flex w-full flex-row items-center gap-[18px]">
        <p className="font-bold">TODO</p>
        <Button
          onClick={() => {}}
          icon={<Plus color="#FFFFFF" size={18} />}
          iconPosition="left"
          className="gap-2 rounded-lg bg-[#0C6CCB] px-[12px] py-[6px] text-sm font-bold text-white"
        >
          추가하기
        </Button>
        <Button
          onClick={() => {}}
          icon={<RefreshCcw color="#FFFFFF" size={18} />}
          iconPosition="left"
          className="gap-2 rounded-lg bg-[#0C6CCB] px-[12px] py-[6px] text-sm font-bold text-white"
        >
          새로고침
        </Button>
      </div>
      <div className="mb-[14px] flex w-full flex-row items-center justify-between">
        <SquareTabs
          tabs={todoFilterTabs}
          selectedTab={selectedTodoFilterTab}
          onClick={(tab) => {
            setSelectedTodoFilterTab(tab);
          }}
        />
        <SquareTabs
          tabs={todoStatusTabs}
          selectedTab={selectedTodoStatusTab}
          onClick={(tab) => {
            setSelectedTodoStatusTab(tab);
          }}
        />
      </div>
      <div className="mb-[38px] flex w-full flex-row">
        <SquareTabs
          tabs={branchManagementTabs}
          selectedTab={selectedBranchManagementTab}
          onClick={(tab) => {
            setSelectedBranchManagementTab(tab);
          }}
        />
      </div>
      <Table columns={todoManagementTableConfig} hideFooter />
    </div>
  );
}
