"use client";

import { useState } from "react";
import Image from "next/image";
import Input from "@/components/common/Input";
import Table from "@/components/common/Table";
import Button from "@/components/common/Button";
import { ChevronDown, Printer } from "lucide-react";
import { chartTableConfig } from "@/etc/tableConfig";
import SquareTabs from "@/components/common/SquareTabs";

const buttons = [
  { label: "#이전 상담일지", value: "previous_counseling_journal" },
  { label: "#출석 기록", value: "attendance_record" },
  { label: "#정기 일정", value: "regular_schedule" },
  { label: "#학생 프로필", value: "student_profile" },
  { label: "#영어 단어", value: "english_vocabulary" },
  { label: "#시험 기록", value: "test_record" },
];

const tabs = [
  { label: "전체", value: "all" },
  { label: "국어", value: "korean" },
  { label: "수학", value: "mathematics" },
  { label: "영어", value: "english" },
  { label: "과탐", value: "science" },
  { label: "사탐", value: "social_studies" },
];

export default function WriteCounselingJournalPage() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].value);

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#F5F5F5] p-[48px]">
      <div className="mb-[28px] flex flex-row items-center gap-[12px]">
        <Image
          src="/images/sidebar/off/chart_off.svg"
          alt="Chat Icon"
          width={20}
          height={20}
        />
        <h1 className="text-[22px] font-extrabold">상담일지 적기</h1>
      </div>
      <p className="text-xl font-medium">학생선택</p>
      <div className="mt-[18px] mb-[26px] h-px bg-[#CACACA]" />
      <div className="relative mt-4 mb-[38px] w-full max-w-[225px]">
        <select className="w-full appearance-none rounded border border-[#C3C3C3] p-4 pr-10 hover:border-black"></select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
      <div className="flex flex-row gap-[14px]">
        {buttons.map((tab, index) => (
          <Button
            key={index}
            onClick={() => {}}
            className={`w-[180px] rounded-4xl border border-[#C8C8C8] py-[10px] font-medium text-[#566FE7] hover:bg-white`}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      <p className="mt-[42px] mb-[18px] text-xl font-medium">
        학습관리(10월 1일)
      </p>
      <table className="w-full max-w-[1150px] border-collapse border border-gray-300 bg-white">
        <thead>
          <tr className="bg-gray-100">
            <th
              colSpan={2}
              className="border border-gray-300 px-4 py-3 text-center font-semibold"
            >
              과목
            </th>
            <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
              국어
            </th>
            <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
              수학
            </th>
            <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
              영어
            </th>
            <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
              탐구
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              rowSpan={2}
              className="border border-gray-300 px-4 py-3 text-center font-medium"
            >
              Weekly
              <br />
              ABC
              <br />
              test
            </td>
            <td className="border border-gray-300 px-4 py-3 text-center">
              맞은갯수/총갯수
            </td>
            <td className="border border-gray-300 px-4 py-3"></td>
            <td className="border border-gray-300 px-4 py-3"></td>
            <td className="border border-gray-300 px-4 py-3"></td>
            <td className="border border-gray-300 px-4 py-3"></td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3 text-center">
              피드백
            </td>
            <td className="border border-gray-300 px-4 py-3"></td>
            <td className="border border-gray-300 px-4 py-3"></td>
            <td className="border border-gray-300 px-4 py-3"></td>
            <td className="border border-gray-300 px-4 py-3"></td>
          </tr>
          <tr>
            <td
              rowSpan={3}
              className="border border-gray-300 px-4 py-3 text-center font-medium"
            >
              수강진도
            </td>
            <td className="border border-gray-300 px-4 py-3 text-center">
              수강강좌
            </td>
            <td className="border border-gray-300 px-4 py-3"></td>
            <td className="border border-gray-300 px-4 py-3"></td>
            <td className="border border-gray-300 px-4 py-3"></td>
            <td className="border border-gray-300 px-4 py-3"></td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3 text-center">
              전주 학습이행도
            </td>
            <td className="border border-gray-300 px-4 py-3"></td>
            <td className="border border-gray-300 px-4 py-3"></td>
            <td className="border border-gray-300 px-4 py-3"></td>
            <td className="border border-gray-300 px-4 py-3"></td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3 text-center">
              다음주 계획
            </td>
            <td className="border border-gray-300 px-4 py-3"></td>
            <td className="border border-gray-300 px-4 py-3"></td>
            <td className="border border-gray-300 px-4 py-3"></td>
            <td className="border border-gray-300 px-4 py-3"></td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3 text-center font-medium">
              학습내용
              <br />
              상세기입란
            </td>
            <td colSpan={5} className="border border-gray-300 px-4 py-16"></td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3 text-center font-medium">
              추가사항
            </td>
            <td colSpan={5} className="border border-gray-300 px-4 py-16"></td>
          </tr>
        </tbody>
      </table>
      <div className="mt-[40px] flex w-full max-w-[1150px] flex-row justify-between">
        <div className="flex flex-col">
          <p className="text-sm font-bold">최종 저장 시간 :</p>
          <p className="text-sm font-bold">최종 저장 시간 :</p>
          <p className="text-sm font-bold">최종 저장 시간 :</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="mb-[28px] flex flex-row gap-[24px]">
            <div className="rounded border border-[#CCD7E0] px-[22px] py-[6px]">
              <Printer stroke="#626B73" />
            </div>
            <Button
              onClick={() => {}}
              className="h-[42px] w-[152px] rounded-lg bg-[#0C6CCB] font-bold text-[#FFFFFF]"
            >
              상담지 저장
            </Button>
          </div>
          <Button
            onClick={() => {}}
            className="h-[42px] w-[152px] rounded-lg bg-[#0C6CCB] font-bold text-[#FFFFFF]"
          >
            학부모 전송
          </Button>
          <p className="mt-4 text-xs font-medium">
            * 저장을 반드시 먼저 누르고 전송하기
          </p>
          <p className="text-xs font-medium">
            현재 화면에 적혀있는 내용이 아니라
          </p>
          <p className="text-xs font-medium">마지막 저장 내용이 전송됩니다.</p>
        </div>
      </div>
      <div className="my-[50px] h-px w-full max-w-[1150px] flex-shrink-0 bg-[#D8D9DB]" />
      <p className="font-bold">문제 출제 (강민지 학생)</p>
      <p className="mb-[16px] text-xs">
        ** 여러 과목 문제 한 시험지에 출제 가능합니다.
      </p>
      <SquareTabs
        tabs={tabs}
        selectedTab={selectedTab}
        onClick={(tab) => {
          setSelectedTab(tab);
        }}
      />
      <div className="mt-[32px] flex max-w-[1150px] flex-row justify-between">
        <Input placeholder="번호" />
        <Input placeholder="분류" />
        <Input placeholder="시험 출제" />
        <Input placeholder="배점" />
        <Input placeholder="마지막 출제일" />
      </div>
      <div className="mt-4 max-w-[1150px]">
        <Table
          columns={chartTableConfig}
          hideFooterPagination
          height={500}
          checkboxSelection
        />
      </div>
    </div>
  );
}
