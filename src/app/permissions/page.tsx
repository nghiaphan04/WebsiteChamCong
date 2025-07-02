'use client';

import { MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Quản lý hệ thống',
    user: 'Nguyễn Văn A',
    role: 'Quản trị web',
    avatar: '',
    date: '12.07.25',
    progress: 80,
  },
  {
    title: 'Phân quyền người dùng',
    user: 'Trần Thị B',
    role: 'Admin',
    avatar: '',
    date: '11.07.25',
    progress: 60,
  },
  {
    title: 'Quản lý nhân sự',
    user: 'Lê Văn C',
    role: 'Admin',
    avatar: '',
    date: '10.07.25',
    progress: 100,
  },
  {
    title: 'Theo dõi chấm công',
    user: 'Phạm Thị D',
    role: 'Người dùng',
    avatar: '',
    date: '08.07.25',
    progress: 45,
  },
  {
    title: 'Tổng hợp lương',
    user: 'Ngô Văn G',
    role: 'Admin',
    avatar: '',
    date: '07.07.25',
    progress: 90,
  },
];

const getBorderColor = (role: string): string => {
  if (role === 'Admin') return 'border-red-600';
  if (role === 'Quản trị web') return 'border-green-600';
  if (role === 'Người dùng') return 'border-yellow-500';
  return 'border-gray-400';
};

export default function ManagerRolePage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: idx * 0.05 }}
          className={`rounded-xl border-1 shadow-md p-4 bg-white text-gray-800 ${getBorderColor(
            card.role
          )} transition-transform hover:scale-105 hover:shadow-lg`}
        >
          <div className="flex justify-between items-start mb-3">
            <div className="text-sm font-semibold">{card.title}</div>
            <MoreHorizontal className="w-4 h-4 text-gray-500" />
          </div>

          <Progress
            value={card.progress}
            className="h-1 mb-3 [&>div]:bg-gray-800 [&>div]:transition-all"
          />

          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src={card.avatar} />
              <AvatarFallback className="text-sm font-bold text-white bg-gray-500">
                {card.user.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-medium">{card.user}</div>
              <div className="text-xs text-gray-600">{card.role}</div>
            </div>
          </div>

          <div className="mt-2 text-xs text-right text-gray-500">{card.date}</div>
        </motion.div>
      ))}
    </div>
  );
}
