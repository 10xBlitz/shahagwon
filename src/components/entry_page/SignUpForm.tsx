"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "../common/Button";
import { TextField } from "../common/TextField";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedType, setSelectedType] = useState("student");
  const [isCertificationOpen, setIsCertificationOpen] = useState(false);

  const handleCertificationNumberToggle = () => {
    setIsCertificationOpen((prev) => (prev ? prev : true));
  };

  return (
    <div className="mx-auto flex flex-col items-center gap-[12px] sm:max-w-[440px]">
      {/* Section 1 */}
      <div className="mx-auto w-full rounded-lg border-1 border-[#DBDBDB] bg-white px-[14px] py-[20px] sm:border-none sm:py-[0px]">
        <h2 className="mb-10 hidden text-xl font-bold text-[#333] sm:block sm:text-3xl sm:font-medium">
          회원가입
        </h2>
        <h2 className="mb-6 block text-xl font-bold text-[#333] sm:hidden">
          정보 입력
        </h2>
        <div className="flex flex-col gap-[24px]">
          <TextField
            value={email}
            onChange={setEmail}
            placeholder="이메일 주소 입력"
            type="email"
            fullWidth
            label="이메일 주소"
            labelClassName="font-semibold text-[14px] sm:text-[18px] sm:font-medium sm:text-[#606060]"
          />
          <TextField
            value={password}
            onChange={setPassword}
            placeholder="8~20자 입력"
            type="password"
            fullWidth
            label="비밀번호"
            labelClassName="font-semibold text-[14px] sm:text-[18px] sm:font-medium sm:text-[#606060]"
          />
          <TextField
            value={confirmPassword}
            onChange={setConfirmPassword}
            placeholder="비밀번호 확인 입력"
            type="password"
            fullWidth
            label="비밀번호 확인"
            labelClassName="font-semibold text-[14px] sm:text-[18px] sm:font-medium sm:text-[#606060]"
          />
        </div>
      </div>
      {/* Section 2 */}
      <div className="w-full rounded-lg border-1 border-[#DBDBDB] bg-white px-[14px] py-[20px] sm:mt-[18px] sm:border-none sm:py-[0px]">
        <h2 className="mb-6 block text-xl font-bold text-[#333] sm:hidden">
          상세 정보
        </h2>
        <div className="flex flex-col gap-[24px]">
          <TextField
            value={name}
            onChange={setName}
            placeholder="이름을 입력해주세요"
            type="text"
            fullWidth
            label="이름"
            labelClassName="font-semibold text-[14px] sm:text-[18px] sm:font-medium sm:text-[#606060]"
          />
          <div>
            <label className="ext-[14px] mb-2 block font-semibold sm:text-[18px] sm:font-medium sm:text-[#606060]">
              핸드폰 번호
            </label>
            <div className="flex gap-2">
              <TextField
                value={phoneNumber}
                onChange={setPhoneNumber}
                placeholder="'-' 없이 입력하세요"
                type="text"
                className="flex-1"
                containerClassName="flex-1"
              />
              {/* Toggle */}
              <Button
                onClick={handleCertificationNumberToggle}
                className="rounded-3xl bg-[#BDBDBD] px-12 py-2 text-sm font-bold tracking-tight text-white"
              >
                인증번호
              </Button>
            </div>
          </div>
          {isCertificationOpen && (
            <TextField
              value={phoneNumber}
              onChange={setPhoneNumber}
              placeholder="인증번호를 입력해주세요"
              type="text"
              className="flex-1"
              containerClassName="flex-1"
              label="인증번호"
              labelClassName="font-semibold text-[14px] sm:text-[18px] sm:font-medium sm:text-[#606060]"
            />
          )}
          <div className="mb-4 flex gap-4">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="userType"
                value="student"
                checked={selectedType === "student"}
                onChange={(e) => setSelectedType(e.target.value)}
                className="h-4 w-4 text-[#3D51B0]"
              />
              <span className="text-sm font-medium">학생</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="userType"
                value="parent"
                checked={selectedType === "parent"}
                onChange={(e) => setSelectedType(e.target.value)}
                className="h-4 w-4 text-[#3D51B0]"
              />
              <span className="text-sm font-medium">학부모</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="userType"
                value="teacher"
                checked={selectedType === "teacher"}
                onChange={(e) => setSelectedType(e.target.value)}
                className="h-4 w-4 text-[#3D51B0]"
              />
              <span className="text-sm font-medium">담임선생님</span>
            </label>
          </div>
          <TextField
            value=""
            onChange={() => {}}
            placeholder="학생 가입 비밀번호 입력하세요"
            type="password"
            fullWidth
            label="학생 가입 비밀번호"
            labelClassName="font-semibold text-[14px] sm:text-[18px] sm:font-medium sm:text-[#606060]"
          />
        </div>
      </div>
      <p className="block self-start sm:hidden">
        이미 가입하셨나요?{" "}
        <Link href="/" className="underline">
          로그인
        </Link>
      </p>
      <Button
        onClick={() => {}}
        className="mt-[32px] w-full rounded-xl bg-[#3D51AF] py-[20px] text-lg font-bold text-white sm:rounded-4xl sm:py-[18px]"
      >
        가입하기
      </Button>
      <div className="mt-[24px] mb-[24px] hidden h-px w-full bg-gray-300 sm:block" />
      <p className="hidden self-center text-xl font-medium sm:block">
        이미 가입하셨나요?{" "}
        <Link href="/" className="text-[#541A89]">
          로그인
        </Link>
      </p>
    </div>
  );
}
