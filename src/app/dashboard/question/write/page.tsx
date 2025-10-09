"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/hooks/useUserStore";
import FileUpload from "@/components/common/FileUpload";
import FormButtons from "@/components/common/FormButtons";
import { useCreateQnaPost } from "@/queries/qnaPosts";

const subjects = ["국어", "수학", "영어", "탐구"];

export default function WriteQNA() {
  const router = useRouter();
  const user = useUserStore((s) => s.user);

  const [selectedSubject, setSelectedSubject] = useState<string>(subjects[0]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const createQnaPost = useCreateQnaPost(
    title,
    content,
    user?.user_id ?? "",
    selectedSubject,
    files,
  );

  const handleSaveClick = async () => {
    console.log("Initiating Q&A post submission...");
    console.log("Form data:", {
      title: title.trim(),
      content: content.trim(),
      subject: selectedSubject,
      authorId: user?.user_id,
      filesCount: files.length,
    });

    createQnaPost.mutate(undefined, {
      onSuccess: () => {
        console.log("✅ Q&A post submission successful");
        router.replace("/dashboard/question");
      },
    });
  };

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#F5F5F5] p-[48px]">
      <div className="w-full max-w-[1180px]">
        <h1 className="text-xl font-medium">질의응답 작성</h1>
        <p className="mt-[24px] font-medium">과목 선택</p>
        <div className="mt-2 flex flex-row gap-4">
          {subjects.map((subject) => (
            <label
              key={subject}
              className="flex cursor-pointer items-center gap-2"
            >
              <input
                type="radio"
                name="subject"
                value={subject}
                checked={selectedSubject === subject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="h-5 w-5"
              />
              <span className="font-medium">{subject}</span>
            </label>
          ))}
        </div>
        <p className="mt-[24px] font-medium">제목</p>
        <input
          placeholder="제목을 적어주세요"
          onChange={(e) => setTitle(e.target.value)}
          className="mt-[14px] w-full resize-none rounded-md border border-gray-300 bg-white p-3 hover:border-[#C4C4C4]"
        />
        <p className="mt-[24px] font-medium">게시글 본문</p>
        <textarea
          placeholder="내용을 적어주세요"
          onChange={(e) => setContent(e.target.value)}
          className="mt-[14px] w-full resize-none rounded-md border border-gray-300 bg-white p-3 hover:border-[#C4C4C4]"
          rows={10}
        />
        <FileUpload
          files={files}
          onFilesChange={setFiles}
          className="mb-[16px]"
        />
        <FormButtons
          onCancel={() => router.back()}
          onSubmit={handleSaveClick}
          isSubmitDisabled={!title.trim() || !content.trim() || createQnaPost.isPending}
          isSubmitting={createQnaPost.isPending}
        />
      </div>
    </div>
  );
}
