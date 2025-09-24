"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import icon from "../../../public/images/header/avatarG.svg";
import logo from "../../../public/images/header/black_logo.webp";

export default function SignUpHeader() {
  const router = useRouter();

  const handleArrowClick = () => {
    router.push("/");
  };

  return (
    <header className="flex w-full flex-row items-center justify-between border-b border-b-gray-300 px-[20px] py-[24px] sm:px-[100px] sm:py-[28px]">
      <Image
        src={logo}
        alt="Header Logo"
        className="hidden h-auto w-[110px] sm:block sm:w-[144px]"
      />
      <div className="flex flex-row items-center gap-4 sm:hidden">
        <ArrowLeft
          height={16}
          width={16}
          className="hover:cursor-pointer"
          onClick={handleArrowClick}
        />
        <Link href="/" className="font-extrabold">
          로그인
        </Link>
      </div>
      <div className="hidden flex-row gap-[8px] sm:flex">
        <Image src={icon} alt="Avatar Icon" />
        <Link href="/">회원가입</Link>
      </div>
    </header>
  );
}
