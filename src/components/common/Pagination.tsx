"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-[#EAEAEA] disabled:opacity-50 disabled:hover:cursor-auto disabled:hover:bg-transparent"
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </Button>

      {pageNumbers.map((page, index) => {
        if (page === "...") {
          return (
            <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
              ...
            </span>
          );
        }

        const pageNum = page as number;
        const isActive = pageNum === currentPage;

        return (
          <Button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={`h-8 min-w-8 rounded-full text-sm transition-colors ${
              isActive
                ? "bg-[#BDBDBD] font-semibold text-white"
                : "hover:bg-[#EAEAEA]"
            }`}
          >
            {pageNum}
          </Button>
        );
      })}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-[#EAEAEA] disabled:opacity-50 disabled:hover:cursor-auto disabled:hover:bg-transparent"
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </Button>
    </div>
  );
}
