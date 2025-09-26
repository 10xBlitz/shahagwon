// QnA request status table

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
