"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/supabase/auth";
import { useUserStore } from "@/hooks/useUserStore";

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
        <Image
          src="/images/header/white_logo.webp"
          alt="Header Logo"
          width={120}
          height={40}
          className="h-auto w-[120px]"
        />
        <div>
          <p className="text-xs text-[#FEFFFF]">{user?.name ?? "no_name"}</p>
          <p className="text-xs text-[#FEFFFF]">{user?.user_id ?? "no_id"}</p>
        </div>
      </div>
      <div className="hidden flex-row items-center gap-[8px] sm:flex">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F5F5]">
          <Image
            src="/images/header/avatarG.svg"
            alt="Avatar Icon"
            width={16}
            height={16}
            className="object-contain"
          />
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
