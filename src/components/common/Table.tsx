"use client";

import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

interface TableProps {
  // pageSize?: number;
  rows?: GridRowsProp;
  columns: GridColDef[];
  hideFooterPagination?: boolean;
  hideFooterSelectedRowCount?: boolean;
  hideFooter?: boolean;
  height?: number;
  density?: "compact" | "standard" | "comfortable";
  className?: string;
  checkboxSelection?: boolean;
}

export default function Table({
  // pageSize = 20,
  rows,
  columns,
  hideFooterPagination,
  hideFooterSelectedRowCount,
  hideFooter,
  height,
  density = "standard",
  className = "",
  checkboxSelection = false,
}: TableProps) {
  return (
    <div style={{ height: height, width: "100%" }} className={`${className}`}>
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooterPagination={hideFooterPagination}
        hideFooterSelectedRowCount={hideFooterSelectedRowCount}
        density={density}
        checkboxSelection={checkboxSelection}
        hideFooter={hideFooter}
      />
    </div>
  );
}
