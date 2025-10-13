"use client";

import Image from "next/image";
import { useRef, useState, ChangeEvent } from "react";
import Avatar from "@/components/common/Avatar";
import Button from "@/components/common/Button";
import Comment from "@/components/common/Comment";
import { Loader2, Paperclip, ThumbsUp, Trash2, X } from "lucide-react";
import { useUserStore } from "@/hooks/useUserStore";
import { convertToYYYYMMDDWithTime } from "@/lib/utils/timeUtils";
import {
  QnaPost,
  useCreateQnaPostComment,
  useDeleteQnaPost,
} from "@/queries/qnaPosts";
import { Dialog } from "@/components/common/Dialog";

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

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const createQnaPostComment = useCreateQnaPostComment({
    content: commentInput.trim(),
    postId: post.id,
    authorId: user?.user_id as string,
    imageFiles: files,
  });

  const deleteQnaPost = useDeleteQnaPost({
    postId: post.id,
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

  const handleDeletePostClick = () => {
    setShowDeleteDialog(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteDialog(false);
  };

  const handleConfirmDelete = () => {
    deleteQnaPost.mutate();
    setShowDeleteDialog(false);
  };

  const handleSubmitCommentClick = () => {
    createQnaPostComment.mutate(undefined, {
      onSuccess: () => {
        setFiles([]);
        setCommentInput("");
      },
    });
  };

  return (
    <div className="min-h-auto w-[800px] rounded-lg bg-white p-[30px]">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          <Avatar />
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">
              {post.user_profiles?.name}
            </h3>
            <p className="text-xs text-gray-500">
              {convertToYYYYMMDDWithTime(post.created_at)}
            </p>
          </div>
        </div>
        {user?.user_id === post.author_id && (
          <Trash2
            size={20}
            strokeWidth={1.25}
            className={`text-black transition-all duration-200 hover:scale-110 hover:cursor-pointer hover:text-red-600`}
            onClick={handleDeletePostClick}
          />
        )}
      </div>
      <div className="mb-6 h-px bg-[#D9D9D9]" />
      <h2 className="mb-4 text-xl font-medium">{post.title}</h2>
      <p className="mb-6 whitespace-pre-line">{post.content}</p>
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
            {post.qna_posts_comments.map((comment, index) => {
              return <Comment key={index} comment={comment} />;
            })}
          </div>
        </div>
      )}
      <div className="mb-6 h-px bg-[#D9D9D9]" />
      {/* Comment area w/ expanding input */}
      <div className="relative overflow-hidden rounded border border-[#D9D9D9]">
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
                onClick={handleSubmitCommentClick}
                disabled={
                  !commentInput.trim() || createQnaPostComment.isPending
                }
                className={`rounded-lg bg-[#3D51AF] px-2 py-1 font-semibold text-white disabled:cursor-not-allowed disabled:bg-[#F3F4F8] disabled:text-[#BEBEBE]`}
              >
                {createQnaPostComment.isPending ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  "전송"
                )}
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
      <Dialog
        title="댓글 삭제"
        message="이 댓글을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다."
        isOpen={showDeleteDialog}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        confirmText="삭제"
        cancelText="취소"
        variant="danger"
      />
    </div>
  );
}
