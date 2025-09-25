"use client";

import React from "react";
import Avatar from "./Avatar";

interface CommentProps {
  username: string;
  userTitle?: string;
  content: string;
  timestamp: string;
  avatarSrc?: string;
}

export default function Comment({
  username,
  userTitle,
  content,
  timestamp,
  avatarSrc,
}: CommentProps) {
  return (
    <div className="p-4">
      <div className="mb-3 flex items-center gap-3">
        <Avatar src={avatarSrc} size={40} />
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-base font-semibold">{username}</h4>
            {userTitle && (
              <span className="text-sm text-gray-600">({userTitle})</span>
            )}
          </div>
        </div>
      </div>
      
      <p className="mb-2 text-sm leading-relaxed">{content}</p>
      
      <p className="text-xs text-gray-500">{timestamp}</p>
    </div>
  );
}