"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/supabase/auth";
import { useUserStore } from "@/hooks/useUserStore";
import icon from "../../../public/images/header/avatarG.svg";
import logo from "../../../public/images/header/white_logo.webp";

export default function DashboardHeader() {
  const user = useUserStore((s) => s.user);

  const router = useRouter();

  const handleLogout = () => {
    signOut();

    router.replace("/auth/login");
  };

  return (
    <header className="flex w-full flex-row items-center justify-between bg-[#3D51AF] px-[46px] py-[22px]">
      <div className="flex flex-row items-center gap-8">
        <Image src={logo} alt="Header Logo" className="h-auto w-[120px]" />
        <div>
          <p className="text-xs text-[#FEFFFF]">{user?.name}</p>
          <p className="text-xs text-[#FEFFFF]">{user?.user_id}</p>
        </div>
      </div>
      <div className="hidden flex-row items-center gap-[8px] sm:flex">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F5F5]">
          <Image src={icon} alt="Avatar Icon" className="object-contain" />
        </div>
        <p
          className="font-medium text-white hover:cursor-pointer"
          onClick={handleLogout}
        >
          로그아웃
        </p>
      </div>
    </header>
  );
}
