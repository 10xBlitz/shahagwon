import React from "react";
import Avatar from "./Avatar";

interface UnresolvedMessageTileProps {
  senderName: string;
  senderLocation: string;
  message: string;
  avatarSrc?: string;
  onClick?: () => void;
}

export default function UnresolvedMessageTile({
  senderName,
  senderLocation,
  message,
  avatarSrc,
  onClick,
}: UnresolvedMessageTileProps) {
  return (
    <div
      className="flex cursor-pointer items-center gap-4 border-b border-gray-200 px-2 py-4 hover:bg-gray-50"
      onClick={onClick}
    >
      {/* Avatar */}
      <div>
        <Avatar src={avatarSrc} size={48} />
      </div>

      {/* Message content */}
      <div className="min-w-0 flex-1">
        <div className="mb-1">
          <span className="font-medium text-black">
            {senderName} ({senderLocation})
          </span>
        </div>
        <div className="truncate text-sm text-gray-600">
          {message}
        </div>
      </div>
    </div>
  );
}