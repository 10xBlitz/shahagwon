// QnA request status table

import { GridColDef } from "@mui/x-data-grid";

// 선생님 - teacher
// 호점 - hojeom
// 날짜 - date
// 시간 - hour
// 신청자 - proposer
// 학생 소속 - student affiliation
// 위치 - location
// 과목 - subjects

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
