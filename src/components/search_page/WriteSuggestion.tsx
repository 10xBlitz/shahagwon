import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SquareTabs from "../common/SquareTabs";

const tabs = [
  {
    label: "실명",
    value: "real_name",
  },
  {
    label: "익명",
    value: "anonymous",
  },
];

const dropdownOptions = [
  {
    label: "생활",
    value: "life",
  },
  {
    label: "자리변경",
    value: "seat_change",
  },
  {
    label: "담임상담",
    value: "homeroom_consultation",
  },
  {
    label: "집의응답",
    value: "home_response",
  },
  {
    label: "대표에게만",
    value: "to_representative_only",
  },
  {
    label: "기타",
    value: "others",
  },
  {
    label: "담임평가",
    value: "homeroom_evaluation",
  },
  {
    label: "생활평가",
    value: "life_evaluation",
  },
];

export default function WriteSuggestion() {
  const [selectedTab, setSelectedTab] = useState("real_name");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="mt-[36px] flex w-full max-w-[1180px] flex-col rounded-lg">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-col text-sm font-semibold">
          <p>* 모든 신청/건의사항/메세지는 이곳에서 보내주시기 바랍니다.</p>
          <p>* 영업일 2일 이내 답변 드리는 것을 규칙으로 합니다.</p>
          <p>* 익명 업로드의 경우 운영진도 작성자 확인이 불가능합니다.</p>
        </div>
        <SquareTabs
          tabs={tabs}
          selectedTab={selectedTab}
          onClick={(tab) => setSelectedTab(tab)}
        />
      </div>
      <p className="mt-8 font-semibold">종류</p>
      <div className="relative mt-4">
        <select
          className="w-full appearance-none rounded border border-[#C3C3C3] bg-white p-3 pr-10 hover:border-black"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {dropdownOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
      <p className="mt-[26px] font-semibold">내용</p>
      <textarea
        placeholder="내용을 적어주세요 : )"
        className="mt-4 resize-none rounded border border-[#C3C3C3] bg-white p-4 hover:border-black"
        rows={12}
      />
    </div>
  );
}
