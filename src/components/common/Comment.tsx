"use client";

import React from "react";
import Avatar from "./Avatar";
import { QnaPostComment } from "@/queries/qnaPosts";
import { convertToYYYYMMDDWithTime } from "@/lib/utils/timeUtils";

interface CommentProps {
  comment: QnaPostComment;
}

export default function Comment({ comment }: CommentProps) {
  return (
    <div className="p-4">
      <div className="mb-3 flex items-center gap-3">
        <Avatar size={40} />
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-base font-semibold">
              {comment.user_profiles.name}
            </h4>
          </div>
        </div>
      </div>
      <p className="mb-2 text-sm leading-relaxed">{comment.content}</p>
      <p className="text-xs text-gray-500">
        {convertToYYYYMMDDWithTime(comment.created_at)}
      </p>
    </div>
  );
}
