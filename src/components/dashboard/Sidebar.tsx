"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { sidebarItems } from "@/etc/sidebarItems";
import SidebarItemTile from "../common/SidebarItemTile";
import outside_icon from "../../../public/images/sidebar/outside.svg";
import sidebar_logo from "../../../public/images/sidebar/just_logo.webp";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-[240px] flex-shrink-0 flex-col items-center overflow-y-auto px-[24px] py-[30px]">
      <div className="mb-2 flex flex-row items-center gap-2">
        <Image
          src={outside_icon}
          alt="Outside Icon"
          className="h-[16px] w-[20px]"
        />
        <p className="text-lg font-semibold text-[#818181]">외출중</p>
      </div>
      <div className="mb-2 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#EAEAEA]">
        <Image src={sidebar_logo} alt="Logo" width={36} height={46} />
      </div>
      <p className="text-lg font-medium tracking-tighter">
        수능선배 본사 (직원용)
      </p>
      <div className="mt-[26px] mb-[26px] h-px w-full bg-gray-300" />
      <ul className="flex w-full flex-col gap-[16px]">
        {sidebarItems.map((item, index) => (
          <SidebarItemTile
            key={index}
            sidebarItem={item}
            isActive={pathname === item.route}
          />
        ))}
      </ul>
    </aside>
  );
}
