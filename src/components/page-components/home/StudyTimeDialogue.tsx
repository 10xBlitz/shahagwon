interface StudyTimeDialogueProps {
  title: string;
  onClose: () => void;
}

export default function StudyTimeDialogue({
  title,
  onClose,
}: StudyTimeDialogueProps) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="flex h-[178px] w-[500px] flex-col rounded-2xl bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-4 text-center text-xl font-bold">{title}</h2>

        <div className="flex-1 rounded bg-gray-100 p-4">
          <div className="grid h-full grid-cols-2">
            <div className="flex items-center justify-center">
              <span className="text-lg font-medium">순위</span>
            </div>
            <div className="flex items-center justify-center border-l border-gray-300">
              <span className="text-lg font-medium">시간</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
