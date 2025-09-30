import { useState } from "react";
import MentorTodo from "./MentorTodo";
import BorderlessTabs from "../common/BorderlessTabs";
import WriteMentorDescription from "./WriteMentorDescription";
import MentorDescriptionStatus from "./MentorDescriptionStatus";

const mentorTabs = [
  {
    label: "멘토투두 보기",
    value: "view_mentor_todo",
  },
  {
    label: "멘토 설명 작성하기",
    value: "write_mentor_description",
  },
  {
    label: "멘토 설명 작성현황 보기",
    value: "view_mentor_description_status",
  },
];

export default function AntConsultationManagement() {
  const [selectedMentorTab, setSelectedMentorTab] =
    useState("view_mentor_todo");

  return (
    <div className="flex flex-col">
      <div className="mt-[36px] mb-[32px]">
        <BorderlessTabs
          tabs={mentorTabs}
          selectedTab={selectedMentorTab}
          onClick={(tab) => setSelectedMentorTab(tab)}
          alignment="center"
        />
      </div>
      {selectedMentorTab === "view_mentor_todo" && <MentorTodo />}
      {selectedMentorTab === "write_mentor_description" && (
        <WriteMentorDescription />
      )}
      {selectedMentorTab === "view_mentor_description_status" && (
        <MentorDescriptionStatus />
      )}
    </div>
  );
}
