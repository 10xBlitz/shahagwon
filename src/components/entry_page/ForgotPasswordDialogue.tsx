"use client";

import Button from "../common/Button";
import React, { useState } from "react";
import { TextField } from "../common/TextField";

interface ForgotPasswordDialogueProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (phoneNumber: string) => void;
}

export default function ForgotPasswordDialogue({
  isOpen,
  onClose,
  onSubmit,
}: ForgotPasswordDialogueProps) {
  const [phoneNumber, setPhoneNumber] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (phoneNumber.trim()) {
      onSubmit(phoneNumber);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile */}
      <div className="fixed inset-0 z-50 flex flex-col bg-white sm:hidden">
        {/* Header */}
        <div className="flex items-center border-gray-200 px-4 py-4">
          <button
            onClick={onClose}
            className="mr-4 flex h-8 w-8 items-center justify-center"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {/* Content */}
        <div className="flex flex-1 flex-col px-6 py-4">
          <h1 className="text-lg font-black text-black">전화번호</h1>
          <TextField
            value={phoneNumber}
            onChange={setPhoneNumber}
            placeholder="핸드폰번호(-없이)"
            type="text"
            fullWidth
            inputClassName="text-base"
            inputContainerClassName="py-4"
          />
          <Button
            onClick={handleSubmit}
            className="mt-[24px] rounded-lg bg-[#222428] py-4 text-white"
          >
            확인
          </Button>
        </div>
      </div>
      {/* Desktop */}
      <div
        className="fixed inset-0 z-50 hidden items-center justify-center bg-black/50 sm:flex"
        onClick={handleBackdropClick}
      >
        <div className="h-[272px] w-[404px] border-2 bg-white p-8 shadow-lg">
          {/* Title */}
          <div className="mb-6 text-center">
            <h2 className="text-base font-bold tracking-tight text-black">
              비밀번호 변경하기
            </h2>
            <div className="mx-auto mt-3 h-px w-full bg-gray-200"></div>
          </div>

          {/* Description */}
          <p className="mb-6 text-gray-700">핸드폰 번호를 입력해주세요.</p>

          {/* Input */}
          <div className="mb-6">
            <TextField
              value={phoneNumber}
              onChange={setPhoneNumber}
              placeholder="핸드폰 번호(-없이)"
              type="text"
              fullWidth
              inputClassName="text-base"
              inputContainerClassName="border-2 border-blue-500 py-3"
            />
          </div>

          {/* Button */}
          <div className="flex justify-end">
            <Button
              onClick={handleSubmit}
              className="rounded-full border border-blue-500 px-6 py-2 text-blue-500 hover:bg-blue-50"
            >
              확인
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
