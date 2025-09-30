import { messageTemp } from "@/etc/temp";
import SearchBar from "../common/SearchBar";
import MessageList from "../envelope_page/MessageList";

export default function MentorMessageBox() {
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
    </div>
  );
}
