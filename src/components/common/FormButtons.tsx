"use client";

import { Loader2 } from "lucide-react";
import Button from "./Button";

interface FormButtonsProps {
  onCancel: () => void;
  onSubmit: () => void;
  isSubmitDisabled: boolean;
  isSubmitting: boolean;
  cancelText?: string;
  submitText?: string;
  className?: string;
}

export default function FormButtons({
  onCancel,
  onSubmit,
  isSubmitDisabled,
  isSubmitting,
  cancelText = "닫기",
  submitText = "내용 업로드",
  className = "",
}: FormButtonsProps) {
  return (
    <div className={`flex justify-end gap-[12px] ${className}`}>
      <Button
        onClick={onCancel}
        className="rounded-md border border-[#8EB5E3] px-[18px] py-[8px] text-sm font-bold text-[#1C75D2] hover:border-[#1C75D2] hover:bg-[#EBF0F3]"
      >
        {cancelText}
      </Button>
      <Button
        onClick={onSubmit}
        disabled={isSubmitDisabled}
        className={`${
          !isSubmitDisabled
            ? "border-[#8EB5E3] text-[#1C75D2] hover:border-[#1C75D2] hover:bg-[#EBF0F3]"
            : "border-[#D7D7D7] text-[#B6B6B6]"
        } flex items-center justify-center gap-2 rounded-md border px-[18px] py-[8px] text-sm font-bold`}
        pointer={!isSubmitDisabled}
      >
        {isSubmitting ? (
          <Loader2 className="animate-spin" size={20} />
        ) : (
          submitText
        )}
      </Button>
    </div>
  );
}