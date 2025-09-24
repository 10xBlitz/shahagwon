interface StudyTimeDialogueProps {
  title: string;
}

export default function StudyTimeDialogue({ title }: StudyTimeDialogueProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="w-[500px] h-[178px] bg-white rounded-2xl p-6 flex flex-col">
        <h2 className="text-xl font-bold text-center mb-4">{title}</h2>
        
        <div className="flex-1 bg-gray-100 rounded p-4">
          <div className="grid grid-cols-2 h-full">
            <div className="flex items-center justify-center">
              <span className="text-lg font-medium"></span>
            </div>
            <div className="flex items-center justify-center border-l border-gray-300">
              <span className="text-lg font-medium">Ü</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}