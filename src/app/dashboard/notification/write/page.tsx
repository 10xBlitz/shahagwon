"use client";

import Image from "next/image";
import { branchTabs } from "@/etc/tabs";
import { useRef, useState } from "react";
import { ImagePlus, X, Loader2 } from "lucide-react";
import Button from "@/components/common/Button";
import { useUserStore } from "@/hooks/useUserStore";
import { supabaseClient } from "@/lib/supabase/client";
// import { useRouter } from "next/navigation";

export default function WriteAnnouncementPage() {
  const user = useUserStore((s) => s.user);
  // const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("전체");
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

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
    setIsSubmitting(true);

    try {
      console.log("🟢 Starting save...");

      const uploadedUrls: string[] = [];

      for (const file of files) {
        const filePath = `announcement-${Date.now()}-${file.name}`;
        console.log("Uploading:", filePath);

        const { error } = await supabaseClient.storage
          .from("announcement_images")
          .upload(filePath, file);

        if (error) {
          console.error("Upload failed:", error.message);
          continue;
        }

        const { data: imageData } = supabaseClient.storage
          .from("announcement_images")
          .getPublicUrl(filePath);

        uploadedUrls.push(imageData.publicUrl);
      }

      console.log("Uploading announcement...");

      const { data, error } = await supabaseClient
        .from("announcements")
        .insert({
          title: title.trim(),
          content: content.trim(),
          branch: selectedBranch,
          author_id: user?.user_id,
          images: uploadedUrls,
        })
        .select();

      if (error) {
        console.error("Insert failed:", error.message);
        return;
      }

      console.log("✅ Announcement created:", data);
      // router.back();
    } finally {
      setIsSubmitting(false);
    }
  };

  // const [imageUrls, setImageUrls] = useState<string[]>([]);

  // const handleFilesChange = async (
  //   event: React.ChangeEvent<HTMLInputElement>,
  // ) => {
  //   const files = event.target.files;
  //   if (!files) return;

  //   console.log("📁 Selected files:", files);

  //   const uploadPromises = Array.from(files).map(async (file, i) => {
  //     const filePath = `announcement-${Date.now()}-${file.name}`;
  //     console.log(`🚀 [${i}] Starting upload for:`, filePath);

  //     const start = performance.now();

  //     const { data: uploadData, error } = await supabaseClient.storage
  //       .from("announcement_images")
  //       .upload(filePath, file);

  //     const end = performance.now();
  //     const elapsed = ((end - start) / 1000).toFixed(2);

  //     if (error) {
  //       console.error(`❌ [${i}] Upload failed (${elapsed}s):`, error.message);
  //       return null;
  //     }

  //     console.log(`✅ [${i}] Upload complete in ${elapsed}s:`, uploadData);

  //     const { data: publicData } = supabaseClient.storage
  //       .from("announcement_images")
  //       .getPublicUrl(filePath);

  //     console.log(`🌐 [${i}] Public URL:`, publicData.publicUrl);

  //     return publicData.publicUrl;
  //   });

  //   console.log("📤 Waiting for all uploads...");
  //   const uploadedUrls = (await Promise.all(uploadPromises)).filter(
  //     (url): url is string => !!url,
  //   );

  //   console.log("📸 Uploaded URLs:", uploadedUrls);

  //   setImageUrls((prev) => [...prev, ...uploadedUrls]);
  //   console.log("🧠 Final state of imageUrls:", [
  //     ...imageUrls,
  //     ...uploadedUrls,
  //   ]);
  // };

  // const handleSaveClick = async () => {
  //   if (!title.trim() && !content.trim()) {
  //     console.warn("⚠️ Title or content is empty. Skipping save.");
  //     return;
  //   }

  //   console.log("🟢 Starting save...");
  //   console.log("📦 Announcement payload:", {
  //     title,
  //     content,
  //     branch: selectedBranch,
  //     author_id: user?.user_id,
  //     images: imageUrls,
  //   });

  //   const { data, error } = await supabaseClient
  //     .from("announcements")
  //     .insert({
  //       title,
  //       content,
  //       branch: selectedBranch,
  //       author_id: user?.user_id,
  //       images: imageUrls,
  //     })
  //     .select();

  //   if (error) {
  //     console.error("❌ Insert failed:", error.message);
  //   } else {
  //     console.log("✅ Announcement created successfully:", data);
  //   }
  // };

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
              disabled={!title.trim() || !content.trim() || isSubmitting}
              className={`${
                title.trim() && content.trim() && !isSubmitting
                  ? "border-[#8EB5E3] text-[#1C75D2] hover:border-[#1C75D2] hover:bg-[#EBF0F3]"
                  : "border-[#D7D7D7] text-[#B6B6B6]"
              } flex items-center justify-center gap-2 rounded-md border px-[18px] py-[8px] text-sm font-bold`}
              pointer={
                title.trim() && content.trim() && !isSubmitting ? true : false
              }
            >
              {isSubmitting ? (
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
