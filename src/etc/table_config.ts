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
