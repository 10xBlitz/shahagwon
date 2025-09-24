import Link from "next/link";
import Image from "next/image";
import icon from "../../../public/images/header/avatarG.svg";
import logo from "../../../public/images/header/black_logo.webp";

export default function LoginHeader() {
  return (
    <header className="flex w-full flex-row items-center justify-between px-[20px] py-[24px] sm:border-b sm:border-b-gray-300 sm:px-[100px] sm:py-[28px]">
      <Image
        src={logo}
        alt="Header Logo"
        className="h-auto w-[110px] sm:w-[144px]"
      />
      <div className="hidden flex-row gap-[8px] sm:flex">
        <Image src={icon} alt="Avatar Icon" />
        <Link href="/signup">회원가입</Link>
      </div>
    </header>
  );
}
