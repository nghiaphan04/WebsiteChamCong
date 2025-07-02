'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';

type Record = {
  checker: string;
  account: string;
  checked: {
    name: string;
    shift: string;
  }[];
};

const mockData: { [key: string]: Record[] } = {
  '2025-07-01': [
    {
      checker: 'Nguyễn Văn A',
      account: 'admin01',
      checked: [
        { name: 'Trần Thị B', shift: 'ca sáng' },
        { name: 'Lê Văn C', shift: 'ca chiều' },
      ],
    },
    {
      checker: 'Trần Thị B',
      account: 'user02',
      checked: [{ name: 'Phạm Thị D', shift: 'ca tối' }],
    },
  ],
  '2025-07-02': [
    {
      checker: 'Lê Văn C',
      account: 'admin03',
      checked: [{ name: 'Ngô Văn G', shift: 'ca trưa' }],
    },
  ],
};

export default function CalendarWithDataPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const formatDate = (date: Date | undefined) => {
    return date ? date.toISOString().split('T')[0] : '';
  };

  const todayKey = formatDate(selectedDate);
  const records = mockData[todayKey] || [];

  return (
    <div className="flex flex-col justify-start md:flex-row gap-6  mx-auto">
      {/* Lịch bên trái */}
      <div className="md:w-1/4">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border shadow-sm "

          captionLayout="dropdown"
        />
      </div>

      {/* Dữ liệu bên phải */}
      <div className="md:w-2/3 space-y-4">
        <h2 className="text-lg font-semibold text-red-700">
          Dữ liệu ngày: {selectedDate?.toLocaleDateString('vi-VN')}
        </h2>

        {records.length > 0 ? (
          <div className="space-y-4">
            {records.map((record, idx) => (
              <div
                key={idx}
                className="border rounded-lg shadow-sm p-4 bg-white hover:shadow-md transition"
              >
                <p className="font-semibold text-gray-800 mb-1">
                  👤 {record.checker}{' '}
                  <span className="text-sm text-gray-500">(Tài khoản: {record.account})</span>
                </p>
                <ul className="pl-5 list-disc text-sm text-gray-700 space-y-1">
                  {record.checked.map((entry, i) => (
                    <li key={i}>
                      {entry.name} – {entry.shift}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 italic">
            Không có dữ liệu chấm công cho ngày này.
          </p>
        )}
      </div>
    </div>
  );
}
