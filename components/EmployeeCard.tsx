'use client';
import { ComboboxDropdownMenu } from "./DropdownMenu";
import Image from "next/image";
import {Mail,Phone} from "lucide-react"
type Props = {
  name: string;
  role: string;
  email: string;
  phone: string;
  status: string;
  dateOfJoin: string;
  dateOfBirth: string;
};

export default function EmployeeCard({ name, role, email, phone, status,dateOfJoin, dateOfBirth }: Props) {
  const statusColor = {
    'Đang làm': 'bg-green-200 text-green-800 border-green-500 border',
    'Đã nghỉ' :'bg-red-200 text-red-800 border-red-500 border',
  };

  return (
    <div className="border rounded-lg p-3 bg-white shadow-sm hover:scale-102 transition">
        <div className="flex justify-end items-center p-0">
            <span className={`text-xs px-2 h-5 rounded border-2 ${statusColor[status as keyof typeof statusColor]}`}>
                {status}
            </span>
            <ComboboxDropdownMenu/>
        </div>
        <div className="flex justify-center items-center mt-4 mb-2">
            <Image
                    src="/avt.jpg"
                    alt="Avatar"
                    width={100}
                    height={100}
                    className="rounded-full"
                    />
        </div>
        <div>
            <p className="font-bold text-lg text-center my-0">{name}</p>
              <p className="text-sm text-gray-600 text-center">{role}</p>
        </div>
      <div className="mt-2 space-y-1 rounded-lg pt-2 px-4 bg-gray-100 mt-4">    
        <div className="flex justify-between flex-row pt-2">
            <div>
                <span className="text-sm text-gray-500">Ngày sinh</span>
                <p className="text-md font-semibold my-0 py-0 text-gray-700">{dateOfBirth}</p>
            </div>
            <div>
                <span className="text-sm text-gray-500">Ngày làm</span>
                <p className="text-md font-semibold my-0 py-0 text-gray-700">{dateOfJoin}</p>
            </div>
        </div>
        <div className="flex items-center mt-4 gap-2">
            <Mail className="w-4 h-4"/>
            <span className="text-sm text-gray-500">{email}</span>
        </div>
        <div className="flex items-center mt-2 pb-4 gap-2">
            <Phone className="w-4 h-4"/>
            <p className="text-sm text-gray-500">{phone}</p>
        </div>
      </div>
    </div>
  );
}
