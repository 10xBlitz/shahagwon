import Image from "next/image";

export default function CounselingJournalPage() {
  return (
    <div className="flex h-full flex-col bg-[#F5F5F5] p-[48px]">
      <div className="mb-[28px] flex flex-row items-center gap-[12px]">
        <Image
          src="/images/sidebar/off/chart_off.svg"
          alt="Chat Icon"
          width={20}
          height={20}
        />
        <h1 className="text-[22px] font-extrabold">상담일지</h1>
      </div>
    </div>
  );
}

// function ExampleTable() {
//   return (
//     <table className="table-auto border-collapse border border-gray-400 text-center">
//       <thead>
//         <tr>
//           <th
//             rowSpan={2}
//             className="border border-gray-400 bg-gray-100 px-4 py-2"
//           >
//             과목
//           </th>
//           <th colSpan={2} className="border border-gray-400 px-4 py-2">
//             Weekly ABC test
//           </th>
//         </tr>
//         <tr>
//           <th className="border border-gray-400 px-4 py-2">맞은갯수/총갯수</th>
//           <th className="border border-gray-400 px-4 py-2">피드백</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td rowSpan={3} className="border border-gray-400 px-4 py-2">
//             수강진도
//           </td>
//           <td colSpan={2} className="border border-gray-400 px-4 py-2">
//             수강강좌
//           </td>
//         </tr>
//         <tr>
//           <td colSpan={2} className="border border-gray-400 px-4 py-2">
//             전주 학습이행도
//           </td>
//         </tr>
//         <tr>
//           <td colSpan={2} className="border border-gray-400 px-4 py-2">
//             다음주 계획
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   );
// }
