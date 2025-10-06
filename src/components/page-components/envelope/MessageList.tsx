import React from "react";
import MessageTile from "@/components/common/MessageTile";

// Temporary just to display UI

export interface Message {
  id: string;
  senderName: string;
  senderRole?: string;
  message: string;
  timestamp: string;
  avatarSrc?: string;
  unreadCount?: number;
}

interface MessageListProps {
  messages: Message[];
  onMessageClick?: (messageId: string) => void;
  className?: string;
}

export default function MessageList({
  messages,
  onMessageClick,
  className = "",
}: MessageListProps) {
  return (
    <div
      className={`max-h-[600px] overflow-y-auto bg-white *:flex-1 ${className}`}
    >
      {messages.length === 0 ? (
        <div className="flex h-full items-center justify-center text-gray-500">
          메세지가 없습니다.
        </div>
      ) : (
        <div className="divide-y divide-gray-200">
          {messages.map((message) => (
            <MessageTile
              key={message.id}
              senderName={message.senderName}
              senderRole={message.senderRole}
              message={message.message}
              timestamp={message.timestamp}
              avatarSrc={message.avatarSrc}
              unreadCount={message.unreadCount}
              onClick={() => onMessageClick?.(message.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
