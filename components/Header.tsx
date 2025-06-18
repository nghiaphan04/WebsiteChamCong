"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { UserPlus } from "lucide-react";

import { usePathname } from "next/navigation";


export default function Header() {
  const tittle = [
    { name: "Dashboard", href: "/" },
    { name: "Nhân viên", href: "/employees" },
    { name: "Lịch sử chấm công NV", href: "/history_staff" },
    { name: "Lịch sử chấm công", href: "/history_time" },
    { name: "Quản lý phân quyền", href: "/permissions" },
    { name: "Thống kê", href: "/statistics" },
  ];

  const pathname = usePathname();

  return (
    <div className="mb-6 space-y-6">
     
      <div className="flex justify-between items-center">
        <div className="flex flex-[5] gap-6">
          <Input placeholder="Tìm kiếm nhân viên..." className="w-[80%]" />
          <button className="flex items-center gap-2 bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition">
            <UserPlus className="w-4 h-4" />
            Add member
          </button>
        </div>
        <div className="flex items-center justify-end gap-3 flex-[1] ">
          <div className="text-sm text-gray-800 border-l-4 border-blue-500 pl-4">
            Hi, <strong>Băng Băng</strong>
          </div>
          <Image
            src="/avt.jpg"
            height={40}
            width={40}
            alt="Avatar"
            className="rounded-full border border-gray-300"
          />
        </div>
      </div>

      <div className="flex items-start justify-between gap-6 flex-[5]">
        <div>
          <h2 className="text-4xl font-semibold mb-2">
            {tittle.find((item) => item.href === pathname)?.name}
          </h2>
          <h3 className="text-gray-500">
            Hi, Băng Băng. Welcome back to Admin!
          </h3>
        </div>
        

        
      </div>
    </div>
  );
}
