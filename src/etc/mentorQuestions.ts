// TODO: Double check options, etc.

export const mentorFormQuestions = [
  {
    id: "Q1",
    question: "멘토가 일하는 지점을 선택해주세요.*",
    type: "checkbox",
    options: ["강남점", "대치점", "송파점", "분당점", "대구점"],
  },
  {
    id: "Q2",
    question: "[사진] 1번 내용을 입력해주세요. (15글자 이내)*",
    type: "textarea",
    maxLength: 15,
  },
  {
    id: "Q3",
    question: "[사진] 2번 내용을 입력해주세요. (20글자 이내)*",
    type: "textarea",
    maxLength: 20,
  },
  {
    id: "Q4",
    question: "[사진] 3번 내용을 입력해주세요. (5글자 이내)*",
    type: "textarea",
    maxLength: 5,
  },
  {
    id: "Q5",
    question: "[사진] 4번 내용을 입력해주세요.",
    type: "section",
    subsections: [
      {
        title: "첫번째줄 (31자 이내)*",
        maxLength: 31,
      },
      {
        title: "두번째줄 (31자 이내)*",
        maxLength: 31,
      },
    ],
  },
  {
    id: "Q6",
    question: "[사진] 5번 내용을 입력해주세요.",
    type: "subjects",
    subjects: [
      {
        name: "국어",
        fields: [
          { label: "강사 (7자 이내)*", maxLength: 7 },
          { label: "강사2 (7자 이내) - 없으면 빈칸", maxLength: 7 },
        ],
      },
      {
        name: "수학",
        fields: [
          { label: "강사 (7자 이내)*", maxLength: 7 },
          { label: "강사2 (7자 이내) - 없으면 빈칸", maxLength: 7 },
        ],
      },
      {
        name: "영어",
        fields: [
          { label: "강사 (7자 이내)*", maxLength: 7 },
          { label: "강사2 (7자 이내) - 없으면 빈칸", maxLength: 7 },
        ],
      },
      {
        name: "탐구",
        fields: [
          { label: "강사 (7자 이내)*", maxLength: 7 },
          { label: "강사2 (7자 이내) - 없으면 빈칸", maxLength: 7 },
        ],
      },
    ],
  },
  {
    id: "Q7",
    question: "[사진] 6번 내용 학교를 선택해주세요*",
    type: "dropdown",
    options: ["이화여자대학교", "서울대학교", "연세대학교", "고려대학교"],
  },
  {
    id: "Q8",
    question: "수능선배 학생들에게 어떤 담임멘토가 되어주실 건가요?*",
    type: "textarea",
    maxLength: 288,
  },
  {
    id: "Q9",
    question: "학습지도시 가장 중요하게 생각하는 것은?*",
    type: "textarea",
    maxLength: 296,
  },
  {
    id: "Q10",
    question:
      "어떤 유형의 학생을 맡았을 때 구체적으로 어떤 도움을 주실 수 있나요?*",
    type: "textarea",
    maxLength: 235,
  },
  {
    id: "Q11",
    question: "이런 학생이라면 저를 추천 합니다.*",
    type: "textarea",
    maxLength: 286,
  },
  {
    id: "Q12",
    question: "본인은 어떤 스타일로 공부하여 합격하셨나요?*",
    type: "textarea",
    maxLength: 352,
  },
];
