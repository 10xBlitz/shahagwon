import Link from "next/link";
import Image from "next/image";
import { SidebarItem } from "@/utils/sidebar_items";

interface SidebarItemProps {
  isActive: boolean;
  sidebarItem: SidebarItem;
}

export default function SidebarItemTile({
  isActive,
  sidebarItem,
}: SidebarItemProps) {
  return (
    <li>
      <Link
        href={sidebarItem.route}
        className="flex flex-row items-center gap-[28px] font-medium hover:cursor-pointer"
      >
        <div className="flex h-[22px] w-[22px] items-center justify-center">
          <Image
            src={`${isActive ? `/images/sidebar/on/${sidebarItem.icon}_on.svg` : `/images/sidebar/off/${sidebarItem.icon}_off.svg`}`}
            alt={`${sidebarItem.label} icon`}
            width={22}
            height={22}
            className="object-contain"
          />
        </div>
        <span className={`${isActive ? "font-bold text-[#3D51AF]" : ""}`}>
          {sidebarItem.label}
        </span>
      </Link>
    </li>
  );
}
