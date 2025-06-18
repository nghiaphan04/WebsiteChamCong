
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {LayoutDashboard,Users,Clock,History,ShieldCheck,BarChart} from "lucide-react";
import SidebarIcons from "./SidebarIcon";

const navLinkData = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Nhân viên", href: "/employees", icon: Users },
  { name: "Lịch sử chấm công NV", href: "/history_staff", icon: Clock },
  { name: "Lịch sử chấm công", href: "/history_time", icon: History },
  { name: "Quản lý phân quyền", href: "/permissions", icon: ShieldCheck },
  { name: "Thống kê", href: "/statistics", icon: BarChart },
];



export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="w-64 text-white h-full relative"
      style={{ backgroundColor: "rgb(161, 29, 33)" }}
    >
      <div className="w-full p-4">
        <Image
          src="/logo-400px-mau.png"
          alt="Logo"
          width={250}
          height={200}
          priority
        />
      </div>

      <ul className="space-y-2 px-4 text-sm font-medium">
        {navLinkData.map(({ name, href, icon: Icon }) => (
          <li key={href}>
            <Link
              href={href}
              className={cn(
                "flex items-center gap-2 py-2 px-3 rounded transition",
                pathname === href
                  ? "bg-red-700 text-white font-semibold"
                  : ""
              )}
            >
              <Icon className="w-4 h-4" />
              {name}
            </Link>
          </li>
        ))}
      </ul>
     <SidebarIcons  />
     

    </aside>
  );
}
