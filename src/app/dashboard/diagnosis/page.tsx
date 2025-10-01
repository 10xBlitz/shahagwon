import Image from "next/image";

export default function LearningDiagnosisPage() {
  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#F5F5F5] p-[48px]">
      <div className="mb-[28px] flex flex-row items-center gap-[12px]">
        <Image
          src="/images/sidebar/off/chart_off.svg"
          alt="Chat Icon"
          width={20}
          height={20}
        />
        <h1 className="text-[22px] font-extrabold">학습진단 적기</h1>
      </div>
      <p className="text-xl font-medium">학생선택</p>
      <div className="mt-[18px] mb-[26px] h-px bg-[#CACACA]" />
      <p>* [저장] 하지 않고 학생을 바꾸면 적혀있는 내용이 사라집니다.</p>
      <p className="mt-[40px] mb-[18px] text-xl font-medium tracking-tighter">
        학습 진단(10월 1일)
      </p>
      <table className="w-full max-w-[1150px] border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th
              colSpan={2}
              className="border border-gray-400 p-3 text-center font-medium"
            >
              과목
            </th>
            <th className="border border-gray-400 p-3 text-center font-medium">
              진단
            </th>
            <th className="border border-gray-400 p-3 text-center font-medium">
              학습진락추천
            </th>
            <th className="border border-gray-400 p-3 text-center font-medium">
              강의 및 컨텐츠 추천
            </th>
          </tr>
        </thead>
        <tbody>
          {/* 국어 섹션 */}
          <tr>
            <td
              rowSpan={3}
              className="border border-gray-400 p-3 text-center align-middle font-medium"
            >
              국어
            </td>
            <td className="border border-gray-400 p-3 text-center">문학</td>
            <td className="border border-gray-400 p-3"></td>
            <td className="border border-gray-400 p-3"></td>
            <td className="border border-gray-400 p-3"></td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-3 text-center">독서</td>
            <td className="border border-gray-400 p-3"></td>
            <td className="border border-gray-400 p-3"></td>
            <td className="border border-gray-400 p-3"></td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-3 text-center">선택</td>
            <td className="border border-gray-400 p-3"></td>
            <td className="border border-gray-400 p-3"></td>
            <td className="border border-gray-400 p-3"></td>
          </tr>

          {/* 수학 섹션 */}
          <tr>
            <td
              rowSpan={3}
              className="border border-gray-400 p-3 text-center align-middle font-medium"
            >
              수학
            </td>
            <td className="border border-gray-400 p-3 text-center">수1</td>
            <td className="border border-gray-400 p-3"></td>
            <td className="border border-gray-400 p-3"></td>
            <td className="border border-gray-400 p-3"></td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-3 text-center">수2</td>
            <td className="border border-gray-400 p-3"></td>
            <td className="border border-gray-400 p-3"></td>
            <td className="border border-gray-400 p-3"></td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-3 text-center">선택</td>
            <td className="border border-gray-400 p-3"></td>
            <td className="border border-gray-400 p-3"></td>
            <td className="border border-gray-400 p-3"></td>
          </tr>

          {/* 영어 섹션 */}
          <tr>
            <td
              colSpan={2}
              className="border border-gray-400 p-3 text-center font-medium"
            >
              영어
            </td>
            <td className="border border-gray-400 p-3"></td>
            <td className="border border-gray-400 p-3"></td>
            <td className="border border-gray-400 p-3"></td>
          </tr>

          {/* 탐구 섹션 */}
          <tr>
            <td
              rowSpan={2}
              className="border border-gray-400 p-3 text-center align-middle font-medium"
            >
              탐구
            </td>
            <td className="border border-gray-400 p-3 text-center">선택</td>
            <td className="border border-gray-400 p-3"></td>
            <td className="border border-gray-400 p-3"></td>
            <td className="border border-gray-400 p-3"></td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-3 text-center">선택</td>
            <td className="border border-gray-400 p-3"></td>
            <td className="border border-gray-400 p-3"></td>
            <td className="border border-gray-400 p-3"></td>
          </tr>

          {/* 추가사항 섹션 */}
          <tr>
            <td colSpan={5} className="border border-gray-400 p-3 font-medium">
              추가사항
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
