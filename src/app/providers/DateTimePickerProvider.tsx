// src/lib/DatePickerProvider.tsx (example for Next.js App Router)
"use client";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { ReactNode } from "react";

export default function DateTimePickerProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
  );
}
