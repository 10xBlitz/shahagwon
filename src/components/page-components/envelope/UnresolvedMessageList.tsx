import { Star } from "lucide-react";
import UnresolvedMessageTile from "@/components/common/UnresolvedMessageTile";
import { unresolvedMessageTemp } from "@/etc/temp";

export default function UnresolvedMessageList() {
  return (
    <div className="flex h-full flex-col rounded-xl bg-[#F9F9F9] px-[18px] py-[24px]">
      <div className="mb-4 flex flex-row items-center gap-[2px] self-center">
        <p className="text-xl font-bold text-[#555555]">
          미해결 {unresolvedMessageTemp.length}
        </p>
        <Star fill="#9B5B14" stroke="#9B5B14" />
      </div>
      <div className="flex-1 overflow-y-auto">
        {unresolvedMessageTemp.map((message) => (
          <UnresolvedMessageTile
            key={message.id}
            senderName={message.senderName}
            senderLocation={message.senderLocation}
            message={message.message}
            onClick={() =>
              console.log("Unresolved message clicked:", message.id)
            }
          />
        ))}
      </div>
    </div>
  );
}
