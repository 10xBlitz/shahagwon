/* These config names are subject to change once we know more about the specifics of the functionalities*/

import { GridColDef } from "@mui/x-data-grid";

/* /dashboard/question */
export const requestStatusTableConfig: GridColDef[] = [
  { field: "teacher", headerName: "선생님", width: 180 },
  { field: "hojeom", headerName: "호점", width: 72 },
  { field: "date", headerName: "날짜", width: 72 },
  { field: "hour", headerName: "시간", width: 112 },
  { field: "proposer", headerName: "신청자", width: 154 },
  { field: "student_affiliation", headerName: "학생 소속", width: 88 },
  { field: "location", headerName: "위치", width: 162 },
  { field: "subjects", headerName: "과목", flex: 1 },
];

export const requestStatusSecondaryTableConfig: GridColDef[] = [
  { field: "teacher", headerName: "선생님", width: 152 },
  { field: "date", headerName: "날짜", width: 152 },
  { field: "total_number", headerName: "총 갯수", width: 152 },
  { field: "number_of_applications", headerName: "신청 수", width: 152 },
  { field: "application_rate", headerName: "신청 비율", width: 152 },
  { field: "subjects", headerName: "과목", flex: 1 },
];

/* /dashboard/edit */
export const totalSubmissionsTableConfig: GridColDef[] = [
  { field: "name", headerName: "이름", width: 102 },
  { field: "location", headerName: "위치", width: 102 },
  { field: "date", headerName: "날짜", width: 152 },
  { field: "type", headerName: "종류", width: 152 },
  { field: "parentApproval", headerName: "학부모 승인", width: 152 },
  { field: "departureTime", headerName: "출발 시간", width: 152 },
  { field: "arrivalTime", headerName: "도착 시간", width: 152 },
  { field: "reason", headerName: "사유", width: 152 },
  { field: "submissionTime", headerName: "제출시각", width: 152 },
  { field: "staffApproval", headerName: "직원승인", width: 152 },
  { field: "isApproved", headerName: "직원 승인 여부", flex: 1 },
];

/* /dashboard/restaurant */
export const lunchOrderTableConfig: GridColDef[] = [
  { field: "location", headerName: "위치", width: 120 },
  { field: "hour", headerName: "시간", width: 100 },
  { field: "name", headerName: "이름", width: 120 },
  { field: "deliveryDate", headerName: "배송 날짜", width: 150 },
  { field: "company", headerName: "업체", width: 150 },
  { field: "lunch", headerName: "도시락", width: 180 },
  { field: "price", headerName: "가격", width: 100 },
  { field: "orderTime", headerName: "주문시각", flex: 1 },
];

export const restaurantMenuTableConfig: GridColDef[] = [
  { field: "restaurantName", headerName: "식당 이름", width: 200 },
  { field: "menuName", headerName: "메뉴 이름", width: 180 },
  { field: "price", headerName: "가격", width: 120 },
  { field: "registrant", headerName: "등록자", width: 120 },
  { field: "registrationDate", headerName: "등록일", flex: 1 },
];

/* /dashboard/restaurant */
export const depositHistoryTableConfig: GridColDef[] = [
  { field: "depositorName", headerName: "입금자명", width: 150 },
  { field: "depositAmount", headerName: "입금액수", width: 120 },
  { field: "depositTime", headerName: "입금시간", width: 160 },
  { field: "sellerInfo", headerName: "매점여부", width: 120 },
  { field: "seller", headerName: "매점된 사람", width: 150 },
  { field: "sellTime", headerName: "매점 시간", width: 160 },
  { field: "recipient", headerName: "수동 매점 책임자", flex: 1 },
];

export const chargeApplicationTableConfig: GridColDef[] = [
  { field: "branch", headerName: "지점", width: 120 },
  { field: "applicationId", headerName: "신청 아이디명", width: 180 },
  { field: "applicantName", headerName: "신청한 입금자명", width: 150 },
  { field: "applicationAmount", headerName: "신청 금액", width: 120 },
  { field: "applicationTime", headerName: "신청 시간", width: 160 },
  { field: "matchStatus", headerName: "매칭 여부", width: 120 },
  { field: "matchTime", headerName: "매칭 시간", flex: 1 },
];

export const refundTableConfig: GridColDef[] = [
  { field: "name", headerName: "이름", width: 120 },
  { field: "refundAmount", headerName: "환불금액", width: 120 },
  { field: "refundDate", headerName: "환불일자", width: 150 },
  { field: "person", headerName: "책임자", flex: 1 },
];

export const allMessagesTableConfig: GridColDef[] = [
  { field: "chatroomId", headerName: "채팅방 ID", width: 120 },
  { field: "sender", headerName: "보낸 사람", width: 150 },
  { field: "time", headerName: "시간", width: 180 },
  { field: "from", headerName: "FROM", width: 120 },
  { field: "to", headerName: "TO", width: 120 },
  { field: "content", headerName: "내용", width: 300 },
  { field: "readStatus", headerName: "읽음여부", flex: 1 },
];

export const groupSendTableConfig: GridColDef[] = [
  { field: "branch", headerName: "지점", width: 120 },
  { field: "studentNumber", headerName: "좌석번호", width: 120 },
  { field: "name", headerName: "이름", width: 150 },
  { field: "selection", headerName: "선택", flex: 1 },
];

export const callTextMessageTableConfig: GridColDef[] = [
  { field: "direction", headerName: "방향", width: 100 },
  { field: "type", headerName: "종류", width: 100 },
  { field: "oppositeParty", headerName: "상대방", width: 150 },
  { field: "responsiblePerson", headerName: "책임자", width: 120 },
  { field: "content", headerName: "내용", width: 600 },
  { field: "callTime", headerName: "통화시간", width: 150 },
  { field: "responseTime", headerName: "대기시간", width: 150 },
  { field: "sender", headerName: "보낸사람", flex: 1 },
];

export const suggestionTableConfig: GridColDef[] = [
  { field: "applicant", headerName: "신청자", width: 100 },
  { field: "type", headerName: "종류", width: 100 },
  { field: "content", headerName: "내용", width: 300 },
  { field: "submissionDate", headerName: "신청일", width: 150 },
  { field: "processingStatus", headerName: "처리현황", width: 100 },
  { field: "confirmationNumber", headerName: "확인번", width: 100 },
  { field: "completionDate", headerName: "완료답변", width: 150 },
  { field: "outcome", headerName: "경과일", flex: 1 },
];

export const mySuggestionTableConfig: GridColDef[] = [
  { field: "type", headerName: "종류", width: 120 },
  { field: "applicant", headerName: "신청자", width: 120 },
  { field: "number", headerName: "호점", width: 100 },
  { field: "content", headerName: "내용", width: 300 },
  { field: "submissionDate", headerName: "신청일", width: 150 },
  { field: "processingStatus", headerName: "처리현황", flex: 1 },
];

export const allSuggestionTableConfig: GridColDef[] = [
  { field: "type", headerName: "종류", width: 120 },
  { field: "applicant", headerName: "신청자", width: 120 },
  { field: "number", headerName: "호점", width: 100 },
  { field: "content", headerName: "내용", width: 300 },
  { field: "submissionDate", headerName: "신청일", width: 150 },
  { field: "processingStatus", headerName: "처리현황", width: 120 },
  { field: "confirmationNumber", headerName: "확인답번", width: 120 },
  { field: "completionDate", headerName: "완료답변", width: 150 },
  { field: "outcome", headerName: "경과일", width: 100 },
  { field: "deletionDate", headerName: "사진", width: 80 },
  { field: "deletionDate2", headerName: "사진2", flex: 1 },
];

export const allTestRecordsTableConfig: GridColDef[] = [
  { field: "location", headerName: "위치", width: 120 },
  { field: "name", headerName: "이름", width: 150 },
  { field: "testDate", headerName: "응시 날짜", width: 150 },
  { field: "testRange", headerName: "응시 범위", width: 200 },
  { field: "testType", headerName: "응시 종류", width: 150 },
  { field: "answer", headerName: "단어책", flex: 1 },
];

export const assignmentPerformanceTableConfig: GridColDef[] = [
  { field: "location", headerName: "위치", width: 100 },
  { field: "studentName", headerName: "학생이름", width: 120 },
  { field: "testRange", headerName: "응시 범위", width: 150 },
  { field: "testType", headerName: "응시 종류", width: 120 },
  { field: "vocabulary", headerName: "단어책", width: 150 },
  { field: "dueDate", headerName: "숙제일", width: 120 },
  { field: "completionStatus", headerName: "완료여부", width: 120 },
  { field: "testRange2", headerName: "응시 범위", width: 120 },
  { field: "submitter", headerName: "출제자", flex: 1 },
];

/* /dashboard/attendance */
export const todayWorkReportTableConfig: GridColDef[] = [
  { field: "date", headerName: "날짜", width: 120 },
  { field: "instructions", headerName: "전달사항", width: 800 },
  { field: "referencePhoto", headerName: "참고사진", width: 120 },
  { field: "managerConfirmation", headerName: "담당자 확인", width: 200 },
  { field: "branch", headerName: "지점", width: 120 },
  { field: "manager", headerName: "담당자", width: 120 },
  { field: "author", headerName: "작성자", flex: 1 },
];

export const workCompletionTableConfig: GridColDef[] = [
  { field: "time", headerName: "시간", width: 120 },
  { field: "content", headerName: "내용", width: 600 },
  { field: "completionResponse", headerName: "완료 답변", width: 200 },
  { field: "completionTime", headerName: "완료시간", width: 150 },
  { field: "responsiblePerson", headerName: "담당일", width: 150 },
  { field: "location", headerName: "장소", width: 120 },
  { field: "ip", headerName: "IP", flex: 1 },
];

export const patrolScheduleTableConfig: GridColDef[] = [
  { field: "location", headerName: "위치", width: 120 },
  { field: "period0_1", headerName: "0교시_1", flex: 1 },
  { field: "period0_2", headerName: "0교시_2", flex: 1 },
  { field: "period0_3", headerName: "0교시_3", flex: 1 },
  { field: "period1_1", headerName: "1교시_1", flex: 1 },
  { field: "period1_2", headerName: "1교시_2", flex: 1 },
  { field: "period1_3", headerName: "1교시_3", flex: 1 },
  { field: "period1_4", headerName: "1교시_4", flex: 1 },
  { field: "period2_1", headerName: "2교시_1", flex: 1 },
  { field: "period2_2", headerName: "2교시_2", flex: 1 },
  { field: "period2_3", headerName: "2교시_3", flex: 1 },
  { field: "period2_4", headerName: "2교시_4", flex: 1 },
  { field: "period3_1", headerName: "3교시_1", flex: 1 },
  { field: "period3_2", headerName: "3교시_2", flex: 1 },
  { field: "period3_3", headerName: "3교시_3", flex: 1 },
  { field: "period3_4", headerName: "3교시_4", flex: 1 },
  { field: "period4_1", headerName: "4교시_1", flex: 1 },
  { field: "period4_2", headerName: "4교시_2", flex: 1 },
  { field: "period4_3", headerName: "4교시_3", flex: 1 },
  { field: "period4_4", headerName: "4교시_4", flex: 1 },
  { field: "period5_1", headerName: "5교시_1", flex: 1 },
  { field: "period5_2", headerName: "5교시_2", flex: 1 },
  { field: "period5_3", headerName: "5교시_3", flex: 1 },
];

export const weeklyScheduleTableConfig: GridColDef[] = [
  { field: "dayOfWeek", headerName: "요일", width: 140 },
  { field: "time", headerName: "시간", width: 140 },
  { field: "content", headerName: "내용", width: 740 },
  { field: "location", headerName: "장소", width: 100 },
  { field: "createdDate", headerName: "생성일시", flex: 1 },
];

export const taskCompletionTableConfig: GridColDef[] = [
  { field: "time", headerName: "시간", width: 120 },
  { field: "content", headerName: "내용", width: 750 },
  { field: "completionResponse", headerName: "완료 답변", width: 150 },
  { field: "completionTime", headerName: "완료시간", width: 150 },
  { field: "personInCharge", headerName: "담당인", width: 150 },
  { field: "location", headerName: "장소", width: 150 },
  { field: "ip", headerName: "IP", flex: 1 },
];

export const suspiciousListTableConfig: GridColDef[] = [
  { field: "name", headerName: "이름", width: 150 },
  { field: "previousRecord", headerName: "이전 기록", width: 250 },
  { field: "laterRecord", headerName: "이후 기록", width: 250 },
  { field: "rtsp", headerName: "RTSP", flex: 1 },
];

export const mentorTodoOverviewTableConfig: GridColDef[] = [
  { field: "completionStatus", headerName: "완료 여부", width: 120 },
  { field: "branch", headerName: "지점", width: 100 },
  { field: "name", headerName: "이름", width: 120 },
  { field: "date", headerName: "날짜", width: 120 },
  { field: "completionTime", headerName: "완료 시간", width: 120 },
  { field: "totalStudents", headerName: "총 학생 수", width: 120 },
  { field: "counseledStudents", headerName: "상담 학생 수", width: 130 },
  { field: "counselingRate", headerName: "상담률", width: 100 },
  { field: "opinion", headerName: "의견", width: 150 },
  { field: "onlineDefinition", headerName: "온라인 정의", width: 130 },
  { field: "incompleteReason", headerName: "온라인 정의 미완료 사유", flex: 1 },
];

export const mentorTodoDetailTableConfig: GridColDef[] = [
  { field: "order", headerName: "순서", width: 80 },
  { field: "name", headerName: "이름", width: 120 },
  { field: "counselingProgress", headerName: "상담진행", width: 120 },
  { field: "specialNotes", headerName: "특이사항", width: 150 },
  { field: "counselingLog", headerName: "상담일지", width: 120 },
  { field: "parentNotification", headerName: "학부모 전송", width: 130 },
  { field: "englishWordQuiz", headerName: "영단어 출제", width: 130 },
  { field: "weeklyTest", headerName: "주간 테스트", width: 120 },
  { field: "vehicleExitPrint", headerName: "출차 프린트 첨부", flex: 1 },
];

export const mentorDescriptionStatusTableConfig: GridColDef[] = [
  { field: "mentorName", headerName: "멘토 이름", width: 150 },
  { field: "workingBranch", headerName: "일하는 지점", width: 120 },
  { field: "completionStatus", headerName: "작성 완료 여부", width: 150 },
  { field: "writer", headerName: "작성자", width: 120 },
  { field: "updateDate", headerName: "업데이트 날짜", width: 150 },
  { field: "memo", headerName: "메모", flex: 1 },
];

export const attendanceCheckTableConfig: GridColDef[] = [
  { field: "seat", headerName: "좌석", width: 70 },
  { field: "name", headerName: "이름", width: 70 },
  { field: "status", headerName: "상태", width: 80 },
  { field: "mobilePhone", headerName: "휴대폰", width: 60 },
  { field: "phoneProcessingHistory", headerName: "휴대폰처리내역", width: 120 },
  {
    field: "sendUnsubmittedMessage",
    headerName: "미제출 메세지 전송",
    flex: 1,
  },
];

export const entryExitRecordsTableConfig: GridColDef[] = [
  { field: "direction", headerName: "방향", width: 100 },
  { field: "time", headerName: "시간", width: 150 },
  { field: "location", headerName: "장소", flex: 1 },
];

export const todayAttendanceStatusTableConfig: GridColDef[] = [
  { field: "period", headerName: "교시", width: 80 },
  { field: "location", headerName: "위치", width: 120 },
  { field: "result", headerName: "결과", width: 100 },
  { field: "phone", headerName: "전화", width: 80 },
  { field: "textMessage", headerName: "문자", flex: 1 },
];

export const regularScheduleTableConfig: GridColDef[] = [
  { field: "dayOfWeek", headerName: "요일", width: 100 },
  { field: "content", headerName: "내용", flex: 1 },
];

export const textPhoneTableConfig: GridColDef[] = [
  { field: "type", headerName: "종류", width: 100 },
  { field: "target", headerName: "대상", width: 120 },
  { field: "content", headerName: "내용", width: 120 },
  { field: "date", headerName: "날짜", flex: 1 },
];

export const reasonSubmissionTableConfig: GridColDef[] = [
  { field: "type", headerName: "종류", width: 80 },
  { field: "approval", headerName: "승인", width: 80 },
  { field: "departureTime", headerName: "출발시간", width: 80 },
  { field: "arrivalTime", headerName: "도착시간", width: 80 },
  { field: "reason", headerName: "사유", width: 80 },
  { field: "submissionTime", headerName: "제출시간", flex: 1 },
];

export const penaltyMemoTableConfig: GridColDef[] = [
  { field: "relatedTimePeriod", headerName: "관련시간대", width: 150 },
  { field: "content", headerName: "내용", flex: 1 },
];

export const entryExitRecordTableConfig: GridColDef[] = [
  { field: "room", headerName: "방향", width: 100 },
  { field: "time", headerName: "시간", width: 120 },
  { field: "name", headerName: "이름", width: 100 },
  { field: "entryGroup", headerName: "출입그룹", flex: 1 },
];

export const attendanceTimeTableConfig: GridColDef[] = [
  { field: "name", headerName: "이름", width: 120 },
  { field: "attendanceTime", headerName: "순공부시간", width: 150 },
  { field: "attendanceTimeMin", headerName: "순공부시간(분)", width: 150 },
  { field: "penaltyDifference", headerName: "벌점차감계산", flex: 1 },
];

export const paymentStatusTableConfig: GridColDef[] = [
  { field: "branch", headerName: "지점", width: 100 },
  { field: "name", headerName: "이름", width: 100 },
  { field: "seat", headerName: "자리", width: 100 },
  { field: "paymentStatus", headerName: "결제상태", width: 150 },
  { field: "unpaidAmount", headerName: "청구금액", width: 150 },
  { field: "overdueAmount", headerName: "미납금액", width: 150 },
  { field: "firstPaymentDate", headerName: "첫등원일", width: 150 },
  { field: "lastPaymentDate", headerName: "마지막등원일", width: 150 },
  { field: "memo", headerName: "메모", flex: 1 },
];

export const registrationFeeApplicationPeriodTableConfig: GridColDef[] = [
  { field: "applicationPeriod", headerName: "등록비 적용 시기", width: 200 },
  { field: "registrationFee", headerName: "등록비", width: 200 },
  { field: "applicant", headerName: "작성자", width: 100 },
  { field: "createdDate", headerName: "작성일", flex: 1 },
];

export const refundPolicyTableConfig: GridColDef[] = [
  {
    field: "refundPolicyApplicationPeriod",
    headerName: "환불 정책 적용 시기",
    width: 250,
  },
  { field: "refundPolicy", headerName: "환불 정책", width: 300 },
  { field: "applicant", headerName: "작성자", width: 120 },
  { field: "createdDate", headerName: "작성일", flex: 1 },
];

export const printManagementTableConfig: GridColDef[] = [
  { field: "branch", headerName: "지점", width: 100 },
  { field: "companyStatus", headerName: "업체 여부", width: 120 },
  { field: "windowAccount", headerName: "원도우 계좌", width: 150 },
  { field: "linkedUserId", headerName: "연결된 유저ID", width: 150 },
  { field: "linkedUserName", headerName: "연결된 유저 이름", width: 150 },
  { field: "cost", headerName: "비용", width: 100 },
  { field: "pageCount", headerName: "페이지 수", width: 120 },
  { field: "terminalAppName", headerName: "단말/앱명", width: 150 },
  { field: "documentName", headerName: "문서 이름", width: 200 },
  { field: "printTime", headerName: "프린트 시간", width: 150 },
  { field: "paymentApplied", headerName: "결제 적용 여부", width: 150 },
  { field: "paymentAppliedDate", headerName: "결제 적용 일시", flex: 1 },
];

export const menuManagementTableConfig: GridColDef[] = [
  { field: "category", headerName: "카테고리", width: 120 },
  { field: "paymentMethod", headerName: "결제수단", width: 120 },
  { field: "menuName", headerName: "메뉴 이름", width: 180 },
  { field: "price", headerName: "가격", width: 100 },
  { field: "menuPaymentTime", headerName: "메뉴 결제시간", width: 150 },
  { field: "menuPaymentEnd", headerName: "메뉴 결제종료", width: 150 },
  { field: "menuDescription1", headerName: "메뉴 설명1", width: 150 },
  { field: "menuDescription2", headerName: "메뉴 설명2", width: 150 },
  { field: "addedOptions", headerName: "추가된 옵션", width: 150 },
  { field: "creationTime", headerName: "창부시간", width: 120 },
  { field: "memo", headerName: "메모", width: 120 },
  { field: "author", headerName: "작성자", width: 120 },
  { field: "createdDate", headerName: "작성일", flex: 1 },
];

export const optionManagementTableConfig: GridColDef[] = [
  { field: "optionName", headerName: "옵션 이름", width: 200 },
  { field: "requiredSelection", headerName: "필수 선택 여부", width: 150 },
  {
    field: "maxSelectableItems",
    headerName: "선택 가능한 최대 항목 수",
    width: 200,
  },
  { field: "optionItemCount", headerName: "옵션 항목 수", width: 150 },
  { field: "optionItemContent", headerName: "옵션 항목 내용", flex: 1 },
];

export const todoTableConfig: GridColDef[] = [
  { field: "group", headerName: "그룹", width: 100 },
  { field: "confirmer", headerName: "확인자", width: 120 },
  { field: "title", headerName: "제목", width: 200 },
  { field: "comments", headerName: "댓글", width: 100 },
  { field: "content", headerName: "내용", width: 300 },
  { field: "progressStatus", headerName: "진행상태", width: 120 },
  { field: "handledBy", headerName: "처리한 사람", width: 150 },
  { field: "priority", headerName: "우선 순위", width: 120 },
  { field: "uploadDate", headerName: "업로드 날짜", width: 150 },
  { field: "deadline", headerName: "기한", width: 150 },
  { field: "referenceLink", headerName: "참고링크", width: 150 },
  { field: "author", headerName: "작성자", flex: 1 },
];

export const wifiReleaseListTableConfig: GridColDef[] = [
  { field: "name", headerName: "이름", width: 120 },
  { field: "location", headerName: "위치", width: 120 },
  { field: "releaseDate", headerName: "해제날짜", width: 150 },
  { field: "securedApproval", headerName: "확보된 승인", width: 150 },
  { field: "startTime", headerName: "시작 시간", width: 150 },
  { field: "endTime", headerName: "종료 시간", width: 150 },
  { field: "reason", headerName: "사유", width: 200 },
  { field: "submissionTime", headerName: "제출시간", width: 150 },
  { field: "approvalTime", headerName: "승인시기", width: 150 },
  { field: "cancellationTime", headerName: "취소시기", flex: 1 },
];

export const mockExamTableConfig: GridColDef[] = [
  { field: "mockExamName", headerName: "모의고사 이름", width: 200 },
  { field: "price", headerName: "가격", width: 120 },
  { field: "applicationDate", headerName: "신청일", width: 150 },
  { field: "selectedOptions", headerName: "선택한 옵션", width: 200 },
  { field: "cancellationDeadline", headerName: "취소기한", width: 150 },
  { field: "cancellationTime", headerName: "취소시기", flex: 1 },
];

export const overallMockExamTableConfig: GridColDef[] = [
  { field: "branch", headerName: "지점", width: 100 },
  { field: "applicant", headerName: "신청자", width: 100 },
  { field: "mockExamName", headerName: "모의고사 이름", width: 250 },
  { field: "price", headerName: "가격", width: 100 },
  { field: "applicationDate", headerName: "신청일", width: 200 },
  { field: "selectedOptions", headerName: "선택한 옵션", width: 500 },
  { field: "cancellationDeadline", headerName: "취소기한", flex: 1 },
];

export const coachingManagementTableConfig: GridColDef[] = [
  { field: "seatNumber", headerName: "좌석번호", width: 100 },
  { field: "name", headerName: "이름", width: 120 },
  { field: "firstAttendanceDate", headerName: "첫 등원일", width: 150 },
  { field: "studentProfile", headerName: "학생 프로필", width: 120 },
  { field: "coachSelection", headerName: "코치 선택", width: 120 },
  { field: "coachSelectionOptions", headerName: "코치 선택 옵션", width: 150 },
  { field: "firstCoachingDate", headerName: "첫 코칭 날짜", width: 150 },
  { field: "preApplicationSurvey", headerName: "사전 신청 조사지", width: 150 },
  { field: "weeklySchedule", headerName: "주간 일정표", width: 120 },
  { field: "lastReport", headerName: "마지막 리포트", flex: 1 },
];

export const reservationListTableConfig: GridColDef[] = [
  { field: "branch", headerName: "지점", width: 100 },
  { field: "type", headerName: "종류", width: 120 },
  { field: "reservationDate", headerName: "예약일", width: 150 },
  { field: "reservationTime", headerName: "예약시간", width: 120 },
  { field: "name", headerName: "이름", width: 120 },
  { field: "phoneNumber", headerName: "전화번호", width: 150 },
  { field: "memo", headerName: "메모", width: 200 },
  { field: "applicationTime", headerName: "신청시간", flex: 1 },
];

export const infoSessionReservationTableConfig: GridColDef[] = [
  { field: "sessionType", headerName: "설명회 종류", width: 150 },
  { field: "grade", headerName: "학년", width: 100 },
  { field: "name", headerName: "이름", width: 120 },
  { field: "phoneNumber", headerName: "전화번호", width: 150 },
  { field: "marketingChannel", headerName: "마케팅 경로", width: 150 },
  { field: "applicationDate", headerName: "신청일자", width: 150 },
  { field: "memo1", headerName: "메모1", width: 200 },
  { field: "memo2", headerName: "메모2", flex: 1 },
];

export const operationScheduleTableConfig: GridColDef[] = [
  { field: "active", headerName: "확성", width: 80 },
  { field: "week", headerName: "주기", width: 80 },
  { field: "details", headerName: "상세날짜", width: 120 },
  { field: "time", headerName: "시간", width: 80 },
  { field: "method", headerName: "방향", width: 80 },
  { field: "location", headerName: "지점", width: 250 },
  { field: "creator", headerName: "작성자", width: 100 },
  { field: "creationDate", headerName: "작성일", flex: 1 },
];

export const circleCheckTodoTableConfig: GridColDef[] = [
  { field: "number", headerName: "번쩍", width: 100 },
  { field: "instructions", headerName: "전달사항", width: 600 },
  { field: "completionDate", headerName: "완고사진", width: 150 },
  { field: "confirmationAction", headerName: "담당자 확인", width: 150 },
  { field: "manager", headerName: "담당자", width: 120 },
  { field: "author", headerName: "작성자", width: 120 },
  { field: "filter", headerName: "필터", flex: 1 },
];

export const todoManagementTableConfig: GridColDef[] = [
  { field: "group", headerName: "Group", width: 120 },
  { field: "content", headerName: "내용", width: 400 },
  { field: "deadline", headerName: "기한", width: 150 },
  { field: "status", headerName: "상태", width: 100 },
  { field: "assignedBy", headerName: "처리할 사람", width: 150 },
  { field: "comment", headerName: "댓글", width: 100 },
  { field: "author", headerName: "작성자", width: 120 },
  { field: "priority", headerName: "우선순위", width: 120 },
  { field: "completionDate", headerName: "생성일", flex: 1 },
];

export const phoneManagementTableConfig: GridColDef[] = [
  { field: "direction", headerName: "방향", width: 100 },
  { field: "category", headerName: "종류", width: 100 },
  { field: "location", headerName: "상대방", width: 150 },
  { field: "responsible", headerName: "책임자", width: 120 },
  { field: "content", headerName: "내용", width: 600 },
  { field: "callTime", headerName: "통화시간", width: 150 },
  { field: "waitTime", headerName: "대기시간", width: 150 },
  { field: "note", headerName: "날짜", flex: 1 },
];

export const recurringTodoTableConfig: GridColDef[] = [
  { field: "cycle", headerName: "주기", width: 100 },
  { field: "detailedTime", headerName: "상세시각", width: 150 },
  { field: "project", headerName: "프로젝트", width: 150 },
  { field: "color", headerName: "색선", width: 100 },
  { field: "content", headerName: "내용", width: 400 },
  { field: "author", headerName: "작성자", width: 120 },
  { field: "createdDate", headerName: "작성일", flex: 1 },
];

export const chartTableConfig: GridColDef[] = [
  { field: "no", headerName: "NO", width: 80 },
  { field: "subject", headerName: "과목", width: 100 },
  { field: "type", headerName: "분류 (중단원명 > 소단원명)", width: 250 },
  { field: "trialOutput", headerName: "시험 출치", width: 150 },
  { field: "version", headerName: "배점", width: 100 },
  { field: "answer", headerName: "정답률", width: 100 },
  { field: "lastExclusionDate", headerName: "마지막 출제일", width: 150 },
  { field: "firstSido", headerName: "첫번째 시도", width: 120 },
  { field: "secondSido", headerName: "두번째 시도", width: 120 },
  { field: "correctAnswer", headerName: "정답", flex: 1 },
];

export const todayPenaltyPointsTableConfig: GridColDef[] = [
  { field: "seat", headerName: "좌석", width: 50 },
  { field: "name", headerName: "이름", width: 75 },
  { field: "notSeen", headerName: "미검수", width: 50 },
  { field: "notSubmitted", headerName: "미전송", flex: 1 },
];

export const penaltyDetailsTableConfig: GridColDef[] = [
  { field: "penaltyReason", headerName: "벌점사유", width: 100 },
  { field: "checkInRecord", headerName: "출입기록", width: 100 },
  { field: "reasonSubmission", headerName: "사유제출", width: 100 },
  { field: "regularSchedule", headerName: "정기일정", flex: 1 },
];

export const penaltyReasonExampleTableConfig: GridColDef[] = [
  { field: "penaltyReasonExample", headerName: "벌점사유(예상)", width: 150 },
  { field: "penaltyReasonConfirmed", headerName: "벌점사유(확정)", width: 150 },
  { field: "penaltyValue", headerName: "벌점값", width: 120 },
  { field: "detailedReason", headerName: "상세사유", width: 150 },
  { field: "inspection", headerName: "검수하기", width: 120 },
  { field: "penaltyDistribution", headerName: "벌점부여", width: 120 },
  { field: "goToClassMemo", headerName: "근무자메모", width: 120 },
  { field: "deactivate", headerName: "비활성화", width: 120 },
  { field: "reason", headerName: "사유", flex: 1 },
];

export const relatedTimeRangeTableConfig: GridColDef[] = [
  { field: "relatedTimeRange", headerName: "관련시간대", width: 150 },
  { field: "content", headerName: "내용", flex: 1 },
];

export const studentParentInfoTableConfig: GridColDef[] = [
  { field: "studentParentInfo", headerName: "학부모승인", width: 150 },
  { field: "date", headerName: "요일", width: 120 },
  { field: "content", headerName: "내용", width: 200 },
  { field: "monthlyMemo", headerName: "월별 메모", flex: 1 },
];

export const attendanceTimeTableConfig2: GridColDef[] = [
  { field: "category", headerName: "종류", width: 120 },
  { field: "attendee", headerName: "승인", width: 120 },
  { field: "exitTime", headerName: "출발시간", width: 150 },
  { field: "arrivalTime", headerName: "도착시간", width: 150 },
  { field: "reason", headerName: "사유", width: 200 },
  { field: "submissionTime", headerName: "제출시간", flex: 1 },
];

export const allStudentInfoTableConfig: GridColDef[] = [
  { field: "serialId", headerName: "서비ID", width: 80 },
  { field: "name", headerName: "이름", width: 100 },
  { field: "group", headerName: "구분", width: 80 },
  { field: "enrollmentStatus", headerName: "재원중", width: 100 },
  { field: "phoneNumber", headerName: "전화번호", width: 120 },
  { field: "title", headerName: "호칭", width: 100 },
  { field: "position", headerName: "직책", width: 100 },
  { field: "seat", headerName: "자리", width: 80 },
  { field: "room", headerName: "방정", width: 100 },
  { field: "parentPhoneNumber", headerName: "부모님번호", width: 120 },
  { field: "homeroom", headerName: "담임", width: 100 },
  { field: "assignmentDate", headerName: "단임 배정 이후", width: 120 },
  { field: "totalBalance", headerName: "총잔금액", width: 100 },
  { field: "mealVoucherBalance", headerName: "식권잔유", width: 100 },
  { field: "materialId", headerName: "자료안식ID", width: 120 },
  { field: "firstAttendance", headerName: "첫 등원", width: 100 },
  { field: "membershipDate", headerName: "회원가입일", width: 120 },
  { field: "email", headerName: "이메일", flex: 1 },
];

export const viewPenaltyHistoryTableConfig: GridColDef[] = [
  { field: "studentName", headerName: "학생 이름", width: 150 },
  { field: "penaltyPoints", headerName: "벌점", width: 100 },
  { field: "reason", headerName: "사유", width: 300 },
  { field: "submitter", headerName: "제출자", width: 120 },
  { field: "submissionDate", headerName: "벌점 제출 날짜", width: 150 },
  { field: "totalPoints", headerName: "총점", width: 100 },
  { field: "today", headerName: "오늘", flex: 1 },
];

export const recurringKakaoTableConfig: GridColDef[] = [
  { field: "cycle", headerName: "주기", width: 100 },
  { field: "detailedTime", headerName: "상세날짜", width: 150 },
  { field: "time", headerName: "시간", width: 100 },
  { field: "chatRoom", headerName: "채팅방", width: 250 },
  { field: "content", headerName: "내용", width: 600 },
  { field: "author", headerName: "작성자", width: 120 },
  { field: "createdDate", headerName: "작성일", flex: 1 },
];
