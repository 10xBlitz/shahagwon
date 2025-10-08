"use client";

import Image from "next/image";
import { branchTabs } from "@/etc/tabs";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/common/Button";
import { useUserStore } from "@/hooks/useUserStore";
import { ImagePlus, X, Loader2 } from "lucide-react";
import { useCreateAnnouncement } from "@/queries/announcement";

export default function WriteAnnouncementPage() {
  const user = useUserStore((s) => s.user);
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedBranch, setSelectedBranch] = useState(branchTabs[0].label);
  const [files, setFiles] = useState<File[]>([]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const createAnnouncement = useCreateAnnouncement(
    title,
    content,
    selectedBranch,
    user?.user_id ?? "",
    files,
  );

  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newFiles = Array.from(files);

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);

    event.target.value = "";
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleSaveClick = async () => {
    createAnnouncement.mutate(undefined, {
      onSuccess: () => {
        router.replace("/dashboard/notification");
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
        {/* Image Upload Button */}
        <div className="mb-[16px] flex flex-row gap-4">
          {files.map((file, index) => {
            const imageUrl = URL.createObjectURL(file);
            return (
              <div key={index} className="flex flex-row items-center gap-1">
                {/* <p className="text-[10px]">{file.name}</p> */}
                <div className="relative inline-block">
                  <Image
                    src={imageUrl}
                    alt={file.name}
                    width={100}
                    height={100}
                    className="rounded object-contain"
                  />
                  <div
                    onClick={() => {
                      handleRemoveFile(index);
                    }}
                    className="absolute top-1.5 right-1.5 rounded-full bg-red-600 p-[2px] shadow-lg hover:scale-110"
                  >
                    <X
                      stroke="#FFFFFF"
                      strokeWidth={2}
                      size={10}
                      className="hover:cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mb-[16px] flex flex-row items-center justify-between">
          <ImagePlus
            size={24}
            strokeWidth={1.5}
            color="#808080"
            className="hover:cursor-pointer"
            onClick={handleFileUploadClick}
          />
          <div className="flex justify-end gap-[12px]">
            <Button
              onClick={() => {}}
              className="rounded-md border border-[#8EB5E3] px-[18px] py-[8px] text-sm font-bold text-[#1C75D2] hover:border-[#1C75D2] hover:bg-[#EBF0F3]"
            >
              담기
            </Button>
            <Button
              onClick={handleSaveClick}
              disabled={
                !title.trim() || !content.trim() || createAnnouncement.isPending
              }
              className={`${
                title.trim() && content.trim() && !createAnnouncement.isPending
                  ? "border-[#8EB5E3] text-[#1C75D2] hover:border-[#1C75D2] hover:bg-[#EBF0F3]"
                  : "border-[#D7D7D7] text-[#B6B6B6]"
              } flex items-center justify-center gap-2 rounded-md border px-[18px] py-[8px] text-sm font-bold`}
              pointer={
                title.trim() && content.trim() && !createAnnouncement.isPending
                  ? true
                  : false
              }
            >
              {createAnnouncement.isPending ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                "내용 업로드"
              )}
            </Button>
          </div>
        </div>
      </div>
      {/* Invisible file upload that gets triggered via ref */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFilesChange}
        className="hidden"
      />
    </div>
  );
}
