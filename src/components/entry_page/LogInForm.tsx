"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "../common/Button";
import { TextField } from "../common/TextField";
import ForgotPasswordDialogue from "./ForgotPasswordDialogue";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const handleLogin = () => {
    console.log("Login attempted with:", { email, password });
  };

  const handleForgotPasswordToggle = () => {
    setIsForgotPasswordOpen((prev) => !prev);
  };

  const handleForgotPasswordSubmit = (phoneNumber: string) => {
    console.log("Password reset requested for:", phoneNumber);
    setIsForgotPasswordOpen(false);
  };

  return (
    <div className="mx-auto mt-[24px] flex max-w-[460px] flex-col items-center sm:max-w-[440px]">
      <TextField
        value={email}
        onChange={setEmail}
        placeholder="이메일 주소"
        type="email"
        fullWidth
        className="block sm:hidden"
      />
      <TextField
        value={password}
        onChange={setPassword}
        placeholder="비밀번호"
        type="password"
        fullWidth
        containerClassName="mt-[12px]"
        className="block sm:hidden"
      />
      {/* Destkop */}
      <TextField
        label="이메일 주소"
        value={email}
        onChange={setEmail}
        placeholder="이메일 주소 입력"
        type="email"
        fullWidth
        className="hidden sm:block"
        labelClassName="text-[#606060] text-lg font-medium"
      />
      <TextField
        label="비밀번호"
        value={password}
        onChange={setPassword}
        placeholder="8~20자 입력하세요"
        type="password"
        fullWidth
        className="mt-[28px] hidden sm:block"
        labelClassName="text-[#606060] text-lg font-medium"
      />
      <Button
        onClick={handleLogin}
        className="mt-[18px] w-full rounded-none bg-[#343953] py-[24px] font-bold text-white sm:mt-[40px] sm:rounded-4xl sm:bg-[#3D51B0] sm:py-[16px] sm:text-xl"
      >
        로그인
      </Button>
      <p
        className="mt-[18px] block self-start hover:cursor-pointer sm:hidden"
        onClick={handleForgotPasswordToggle}
      >
        비밀번호 찾기 &gt;
      </p>
      <div className="mt-[36px] hidden h-px w-full bg-gray-300 sm:block" />
      {/* Forgot password */}
      <p
        className="mt-[40px] hidden font-medium hover:cursor-pointer sm:block"
        onClick={handleForgotPasswordToggle}
      >
        비밀번호가 생각나지 않으시나요?
      </p>
      <p className="mt-[24px] text-base font-medium sm:mt-[12px] sm:block sm:text-xl">
        수능선배가 처음이신가요?{" "}
        <span className="text-black underline sm:text-[#551A8A] sm:no-underline">
          <Link href="/signup">회원가입</Link>
        </span>
      </p>
      <div />
      <ForgotPasswordDialogue
        isOpen={isForgotPasswordOpen}
        onClose={handleForgotPasswordToggle}
        onSubmit={handleForgotPasswordSubmit}
      />
    </div>
  );
}
