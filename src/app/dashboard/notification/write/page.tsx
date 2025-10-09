"use client";

import { branchTabs } from "@/etc/tabs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/hooks/useUserStore";
import FileUpload from "@/components/common/FileUpload";
import FormButtons from "@/components/common/FormButtons";
import { useCreateAnnouncement } from "@/queries/announcements";

export default function WriteAnnouncementPage() {
  const router = useRouter();
  const user = useUserStore((s) => s.user);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedBranch, setSelectedBranch] = useState(branchTabs[0].label);
  const [files, setFiles] = useState<File[]>([]);

  const createAnnouncement = useCreateAnnouncement(
    title,
    content,
    selectedBranch,
    user?.user_id ?? "",
    files,
  );

  const handleSaveClick = async () => {
    createAnnouncement.mutate(undefined, {
      onSuccess: () => {
        router.replace("/dashboard/question");
      },
    });
  };

  return (
    <div className="h-full overflow-y-auto bg-[#F5F5F5] p-[48px]">
      <div className="w-full max-w-[1180px]">
        <h1 className="mb-8 text-lg font-medium">공지사항 작성</h1>
        {/* Location Section */}
        <div className="mb-[32px]">
          <label className="mb-[16px] block text-lg font-medium">위치</label>
          <div className="flex flex-wrap gap-[24px]">
            {branchTabs.map((branch) => (
              <label
                key={branch.label}
                className="flex cursor-pointer items-center gap-[8px]"
              >
                <input
                  type="radio"
                  name="branch"
                  value={branch.label}
                  checked={selectedBranch === branch.label}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="h-[18px] w-[18px] cursor-pointer accent-[#1C75D2]"
                />
                <span className="text-base font-medium">{branch.label}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Title Section */}
        <div className="mb-[24px]">
          <label className="mb-[8px] block text-lg font-medium">제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 적어주세요"
            className="w-full rounded-md border border-[#D9D9D9] bg-white px-[16px] py-[12px] text-base outline-none hover:border-[#212121] focus:border-[#1B76D3]"
          />
        </div>
        {/* Content Section */}
        <div className="mb-[16px]">
          <label className="mb-[16px] block text-lg font-medium">
            게시글 본문
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 적어주세요"
            rows={15}
            className="w-full resize-none rounded-md border border-[#D9D9D9] bg-white px-[16px] py-[12px] text-base outline-none hover:border-[#212121] focus:border-[#1B76D3]"
          />
        </div>
        {/* File Upload Component */}
        <FileUpload
          files={files}
          onFilesChange={setFiles}
          className="mb-[16px]"
        />
        {/* Form Buttons */}
        <FormButtons
          onCancel={() => router.back()}
          onSubmit={handleSaveClick}
          isSubmitDisabled={
            !title.trim() || !content.trim() || createAnnouncement.isPending
          }
          isSubmitting={createAnnouncement.isPending}
        />
      </div>
    </div>
  );
}
