"use client";

import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

interface TableProps {
  // pageSize?: number;
  rows?: GridRowsProp;
  columns: GridColDef[];
  hideFooterPagination?: boolean;
  hideFooterSelectedRowCount?: boolean;
  height?: number;
  density?: "compact" | "standard" | "comfortable";
  className?: string;
}

export default function Table({
  // pageSize = 20,
  rows,
  columns,
  hideFooterPagination,
  hideFooterSelectedRowCount,
  height,
  density = "standard",
  className = "",
}: TableProps) {
  return (
    <div style={{ height: height, width: "100%" }} className={`${className}`}>
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooterPagination={hideFooterPagination}
        hideFooterSelectedRowCount={hideFooterSelectedRowCount}
        density={density}
      />
    </div>
  );
}
