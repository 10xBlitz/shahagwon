"use client";

import Image from "next/image";
import { useRef, useState, ChangeEvent } from "react";
import Avatar from "@/components/common/Avatar";
import Button from "@/components/common/Button";
import Comment from "@/components/common/Comment";
import { Paperclip, ThumbsUp, X } from "lucide-react";
import { useUserStore } from "@/hooks/useUserStore";
import { convertToYYYYMMDDWithTime } from "@/lib/utils/timeUtils";
import { QnaPost, useCreateQnaPostComment } from "@/queries/qnaPosts";

interface PostProps {
  post: QnaPost;
  likesCount?: number;
}

export default function Post({ post, likesCount = 0 }: PostProps) {
  const user = useUserStore((s) => s.user);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [commentInput, setCommentInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const createQnaPostComment = useCreateQnaPostComment({
    content: commentInput,
    postId: post.id,
    authorId: user?.user_id as string,
    imageFiles: files,
  });

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentInput(event.target.value);

    if (!event.target.value.trim()) {
      setFiles([]);
    }
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  const handleFilesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;

    const newFiles = Array.from(selectedFiles);
    setFiles([...files, ...newFiles]);

    event.target.value = "";
  };

  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmitClick = () => {
    createQnaPostComment.mutate(undefined, {
      onSuccess: () => {
        console.log("Alright!");
      },
    });
  };

  return (
    <div className="min-h-auto w-[800px] rounded-lg bg-white p-[30px]">
      <div className="mb-6 flex items-center gap-4">
        <Avatar />
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{post.user_profiles?.name}</h3>
          <p className="text-xs text-gray-500">
            {convertToYYYYMMDDWithTime(post.created_at)}
          </p>
        </div>
      </div>
      <div className="mb-6 h-px bg-[#D9D9D9]" />
      <h2 className="mb-4 text-xl font-medium">{post.title}</h2>
      <p className="mb-6">{post.content}</p>
      {post.images && post.images.length > 0 && (
        <div className="mb-[18px] grid grid-cols-1 gap-4">
          {post.images.map((image, index) => (
            <div
              key={index}
              className="relative h-[400px] w-full rounded-2xl bg-[#F3F3F3]"
            >
              <Image
                alt={`Post image ${index + 1}`}
                fill
                src={image}
                className="h-auto rounded-lg border object-contain"
              />
            </div>
          ))}
        </div>
      )}
      <div className="mb-6 flex w-auto items-center gap-2 hover:cursor-pointer">
        <ThumbsUp size={16} color="#707070" />
        <p className="text-sm text-[#9F9F9F]">
          {likesCount > 0 ? `+${likesCount} ` : ""}이해됐어요
        </p>
      </div>
      {post.qna_posts_comments && post.qna_posts_comments.length > 0 && (
        <div>
          <div className="mb-6 h-px bg-[#D9D9D9]" />
          <div className="mb-6 space-y-4">
            {post.qna_posts_comments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
        </div>
      )}
      <div className="mb-6 h-px bg-[#D9D9D9]" />
      {/* Expanding Input */}
      <div className="relative overflow-hidden rounded border border-[#D9D9D9]">
        {/* Textarea */}
        <textarea
          value={commentInput}
          onChange={(e) => handleTextAreaChange(e)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(commentInput.trim() !== "" ? true : false)}
          placeholder="메시지를 입력하세요 (ENTER로 줄바꿈이 가능합니다)"
          rows={isFocused ? 2 : 1}
          className="w-full resize-none bg-transparent p-3 pr-10 outline-none placeholder:text-[#A1A1A1]"
        />
        {/* Bottom bar (only visible when expanded) */}
        {isFocused && (
          <div className="flex flex-col p-2">
            <div className="mb-[16px] flex flex-row gap-4">
              {files.map((file, index) => {
                const imageUrl = URL.createObjectURL(file);
                return (
                  <div key={index} className="flex flex-row items-center gap-1">
                    <div className="relative inline-block">
                      <Image
                        src={imageUrl}
                        alt={file.name}
                        width={100}
                        height={100}
                        className="rounded object-contain"
                      />
                      <div
                        onClick={() => handleRemoveFile(index)}
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
            <div className="flex items-center justify-between">
              <Button
                className="rounded-full p-1.5 hover:bg-gray-100"
                onClick={handleFileUploadClick}
              >
                <Paperclip size={18} strokeWidth={1.25} />
              </Button>
              <Button
                onClick={handleSubmitClick}
                disabled={!commentInput.trim()}
                className="rounded-lg bg-[#3D51AF] px-2 py-1 font-semibold text-white disabled:cursor-not-allowed disabled:bg-[#F3F4F8] disabled:text-[#BEBEBE]"
              >
                전송
              </Button>
            </div>
          </div>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple={true}
        onChange={handleFilesChange}
        className="hidden"
      />
    </div>
  );
}
