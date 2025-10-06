interface PenaltyRecord {
  points: number;
  content: string;
  date: string;
}

interface PenaltyRecordTableProps {
  onClose: () => void;
  records?: PenaltyRecord[];
}

export default function PenaltyRecordTable({ 
  onClose, 
  records = [] 
}: PenaltyRecordTableProps) {
  const totalPoints = records.reduce((sum, record) => sum + record.points, 0);

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div 
        className="flex w-[800px] flex-col rounded-2xl bg-white p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-6 text-xl font-bold">총 벌점기록</h2>

        <div className="mb-4 overflow-hidden rounded-lg border border-gray-300">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="border-r border-gray-300 p-4 text-center text-sm font-medium text-gray-700">
                  벌점
                </th>
                <th className="border-r border-gray-300 p-4 text-center text-sm font-medium text-gray-700">
                  내용
                </th>
                <th className="p-4 text-center text-sm font-medium text-gray-700">
                  벌점 부여한 날짜
                </th>
              </tr>
            </thead>
            <tbody>
              {records.length === 0 ? (
                <tr>
                  <td colSpan={3} className="p-12 text-center text-gray-500">
                    No rows
                  </td>
                </tr>
              ) : (
                records.map((record, index) => (
                  <tr key={index} className="border-t border-gray-300">
                    <td className="border-r border-gray-300 p-4 text-center">
                      {record.points}
                    </td>
                    <td className="border-r border-gray-300 p-4">
                      {record.content}
                    </td>
                    <td className="p-4 text-center">
                      {record.date}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="text-right text-sm font-medium">
          이번달 누적 벌점: <span className="font-bold">{totalPoints}점</span>
        </div>
      </div>
    </div>
  );
}