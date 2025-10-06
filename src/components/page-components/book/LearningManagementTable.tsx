import React from "react";

export default function LearningManageComponent() {
  return (
    <div className="overflow-x-auto p-4">
      <table className="w-full min-w-[900px] border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="w-40 border border-gray-300 py-3">과목</th>
            <th className="border border-gray-300 py-3">국어</th>
            <th className="border border-gray-300 py-3">수학</th>
            <th className="border border-gray-300 py-3">영어</th>
            <th className="border border-gray-300 py-3">탐구</th>
          </tr>
        </thead>

        <tbody>
          {/* Weekly ABC test (left merged for 2 rows) */}
          <tr>
            <td
              rowSpan={2}
              className="border border-gray-300 bg-gray-50 py-6 text-center align-middle"
            >
              {/* stacked lines to match your image */}
              <div className="whitespace-pre-line">
                Weekly{`\n`}ABC{`\n`}test
              </div>
            </td>

            {/* first sub-row for Weekly */}
            <td className="border border-gray-300 py-4">맞은갯수/총갯수</td>
            <td className="border border-gray-300 py-4"></td>
            <td className="border border-gray-300 py-4"></td>
            <td className="border border-gray-300 py-4"></td>
          </tr>

          <tr>
            {/* second sub-row for Weekly */}
            <td className="border border-gray-300 py-4">피드백</td>
            <td className="border border-gray-300 py-4"></td>
            <td className="border border-gray-300 py-4"></td>
            <td className="border border-gray-300 py-4"></td>
          </tr>

          {/* 수강진도 (left merged for 3 rows) */}
          <tr>
            <td
              rowSpan={3}
              className="border border-gray-300 bg-gray-50 py-6 text-center align-middle"
            >
              수강진도
            </td>

            <td className="border border-gray-300 py-4">수강강좌</td>
            <td className="border border-gray-300 py-4"></td>
            <td className="border border-gray-300 py-4"></td>
            <td className="border border-gray-300 py-4"></td>
          </tr>

          <tr>
            <td className="border border-gray-300 py-4">전주 학습이행도</td>
            <td className="border border-gray-300 py-4"></td>
            <td className="border border-gray-300 py-4"></td>
            <td className="border border-gray-300 py-4"></td>
          </tr>

          <tr>
            <td className="border border-gray-300 py-4">다음주 계획</td>
            <td className="border border-gray-300 py-4"></td>
            <td className="border border-gray-300 py-4"></td>
            <td className="border border-gray-300 py-4"></td>
          </tr>

          {/* 학습내용 상세기입란 (left single cell + big right colspan) */}
          <tr>
            <td className="border border-gray-300 bg-gray-50 py-6 text-center align-top">
              학습내용
              <br />
              상세기입란
            </td>

            {/* big text area cell spanning subject columns */}
            <td
              colSpan={4}
              className="h-48 border border-gray-300 p-4 align-top"
            >
              {/* placeholder — replace with <textarea> if you want editable */}
              <div className="h-full w-full">
                {/* kept empty to mimic form-like blank area from image */}
              </div>
            </td>
          </tr>

          {/* 추가사항 (bottom row) */}
          <tr>
            <td className="border border-gray-300 bg-gray-50 py-4 text-center align-middle">
              추가사항
            </td>
            <td colSpan={4} className="h-24 border border-gray-300 p-4"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
