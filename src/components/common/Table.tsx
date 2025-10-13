"use client";

import { DataGrid, DataGridProps } from "@mui/x-data-grid";

interface TableProps extends DataGridProps {
  height?: number;
}

export default function Table({
  height,
  className = "",
  ...props
}: TableProps) {
  return (
    <div style={{ height: height, width: "100%" }} className={className}>
      <DataGrid {...props} />
    </div>
  );
}
