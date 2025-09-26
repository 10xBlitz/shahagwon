import React from "react";
import Avatar from "./Avatar";

interface MessageTileProps {
  senderName: string;
  senderRole?: string;
  message: string;
  timestamp: string;
  avatarSrc?: string;
  unreadCount?: number;
  onClick?: () => void;
}

export default function MessageTile({
  senderName,
  senderRole,
  message,
  timestamp,
  avatarSrc,
  unreadCount = 0,
  onClick,
}: MessageTileProps) {
  return (
    <div
      className="flex cursor-pointer items-center gap-4 border-b border-gray-200 px-4 py-4 hover:bg-gray-50"
      onClick={onClick}
    >
      {/* Avatar with notification badge */}
      <div className="relative">
        <Avatar src={avatarSrc} size={48} />
        {unreadCount > 0 && (
          <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {unreadCount}
          </div>
        )}
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        {/* Message content */}
        <div className="min-w-0">
          <div className="mb-1 flex items-center gap-2">
            <span className="font-medium text-black">{senderName}</span>
            {senderRole && (
              <span className="text-sm text-gray-600">({senderRole})</span>
            )}
          </div>
          <div className="truncate rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-600">
            {message}
          </div>
        </div>
        {/* Timestamp */}
        <div className="ml-3 shrink-0 text-xs whitespace-nowrap text-gray-500">
          {timestamp}
        </div>
      </div>
    </div>
  );
}
