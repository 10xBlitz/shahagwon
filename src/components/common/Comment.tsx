"use client";

import React, { useState } from "react";
import Avatar from "./Avatar";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { useUserStore } from "@/hooks/useUserStore";
import { QnaPostComment, useDeleteQnaPostComment } from "@/queries/qnaPosts";
import { convertToYYYYMMDDWithTime } from "@/lib/utils/timeUtils";
import { Dialog } from "./Dialog";

interface CommentProps {
  comment: QnaPostComment;
}

export default function Comment({ comment }: CommentProps) {
  const user = useUserStore((s) => s.user);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const deleteQnaPostComment = useDeleteQnaPostComment({
    commentId: comment.id,
  });

  const handleDeleteClick = () => {
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    deleteQnaPostComment.mutate();
    setShowDeleteDialog(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteDialog(false);
  };

  return (
    <div className="p-4">
      <div className="mb-3 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          <Avatar size={40} />
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-base font-semibold">
                {comment.user_profiles.name}
              </h4>
            </div>
          </div>
        </div>
        {user?.user_id === comment.author_id && (
          <Trash2
            size={20}
            strokeWidth={1.25}
            className={`text-black transition-all duration-200 hover:scale-110 hover:cursor-pointer hover:text-red-600`}
            onClick={handleDeleteClick}
          />
        )}
      </div>
      <p className="mb-2 text-sm leading-relaxed whitespace-pre-line">
        {comment.content}
      </p>
      {comment.images?.length && comment.images?.length > 0 && (
        <div className="mb-[8px] grid grid-cols-1 gap-4">
          {comment.images.map((image, index) => (
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
      <p className="text-xs text-gray-500">
        {convertToYYYYMMDDWithTime(comment.created_at)}
      </p>
      <Dialog
        title="질문 삭제"
        message="이 질문을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다."
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
