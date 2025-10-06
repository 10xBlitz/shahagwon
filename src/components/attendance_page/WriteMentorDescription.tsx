import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { mentorFormQuestions } from "@/etc/mentorQuestions";
import Button from "../common/Button";

export default function WriteMentorDescription() {
  return (
    <div className="flex flex-row">
      <div className="flex w-full max-w-[640px] flex-col">
        <p className="text-lg font-bold">멘토를 선택해주세요.</p>
        <div className="relative mt-4 mb-[54px] w-full max-w-[350px]">
          <select className="w-full appearance-none rounded border border-[#C3C3C3] p-1 pr-10 hover:border-black"></select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
        <Image
          src="/images/attendance/example_list.webp"
          alt="Writing Guidelines"
          width={600}
          height={370}
        />
      </div>
      <div className="w-px bg-[#DFDFDF]" />
      <div className="flex w-full max-w-[650px] flex-col px-[50px] py-[38px]">
        {mentorFormQuestions.map((question) => (
          <div key={question.id} className="mb-8">
            <h3 className="mb-4 text-lg font-semibold text-[#3D51AF]">
              {question.id}.
              <span className="text-black">{question.question}</span>
            </h3>
            {question.type === "checkbox" && question.options && (
              <div className="flex flex-wrap gap-4">
                {question.options.map((option, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border border-gray-300"
                      defaultChecked={option === "대치점"}
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            )}
            {question.type === "textarea" && (
              <div>
                <textarea
                  className="w-full rounded border border-gray-300 p-3 text-sm"
                  rows={3}
                  maxLength={question.maxLength}
                  placeholder={`최대 ${question.maxLength}자 입력 가능`}
                />
                <div className="mt-1 text-right text-xs text-gray-500">
                  0/{question.maxLength}
                </div>
              </div>
            )}
            {question.type === "section" && question.subsections && (
              <div className="space-y-4">
                {question.subsections.map((subsection, index) => (
                  <div key={index}>
                    <p className="mb-2 text-sm font-medium">
                      - {subsection.title}
                    </p>
                    <textarea
                      className="w-full rounded border border-gray-300 p-3 text-sm"
                      rows={2}
                      maxLength={subsection.maxLength}
                      placeholder={`최대 ${subsection.maxLength}자 입력 가능`}
                    />
                    <div className="mt-1 text-right text-xs text-gray-500">
                      0/{subsection.maxLength}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {question.type === "subjects" && question.subjects && (
              <div className="space-y-4">
                <p className="text-sm font-medium">
                  - {question.subjects[0]?.name}
                </p>
                {question.subjects.map((subject, subjectIndex) => (
                  <div key={subjectIndex} className="space-y-3">
                    <p className="text-sm font-medium">- {subject.name}</p>
                    <div className="grid grid-cols-2 gap-4">
                      {subject.fields.map((field, fieldIndex) => (
                        <div key={fieldIndex}>
                          <p className="mb-1 text-xs text-gray-600">
                            {field.label}
                          </p>
                          <input
                            type="text"
                            className="w-full rounded border border-gray-300 p-2 text-sm"
                            maxLength={field.maxLength}
                            placeholder={`최대 ${field.maxLength}자`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {question.type === "dropdown" && question.options && (
              <div className="relative w-full max-w-md">
                <select className="w-full appearance-none rounded border border-gray-300 p-3 pr-10 text-sm">
                  <option value="">선택해주세요</option>
                  {question.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            )}
          </div>
        ))}
        <Button
          onClick={() => {}}
          className="rounded bg-[#0C6CCC] py-[10px] text-sm font-bold text-white"
        >
          제출하기
        </Button>
      </div>
    </div>
  );
}
