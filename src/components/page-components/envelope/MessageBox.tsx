import MessageList from "./MessageList";
import { messageTemp } from "@/etc/temp";
import UnresolvedMessageList from "./UnresolvedMessageList";
import SearchBar from "@/components/common/SearchBar";

export default function MessageBox() {
  return (
    <div className="mt-[32px] flex w-full flex-row justify-center gap-[32px] rounded-lg bg-white px-[250] py-[50]">
      <div className="flex w-full max-w-[900px] flex-col gap-[22px]">
        <SearchBar placeHolder="이름 검색" />
        <MessageList
          messages={messageTemp}
          onMessageClick={() => {}}
          className="shadow-sm"
        />
      </div>
      <div className="w-full max-w-[400px]">
        <UnresolvedMessageList />
      </div>
    </div>
  );
}
