'use client';

import { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';

const shifts = ['Sáng', 'Trưa', 'Tối'];

interface ShiftInfo {
  from: string;
  to: string;
  wage: string;
}

interface Attendance {
  [employeeId: string]: {
    name: string;
    note: string;
    shifts: { [shift: string]: ShiftInfo };
  };
}

const fakeShifts = (): { [shift: string]: ShiftInfo } => ({
  Sáng: { from: '', to: '', wage: '' },
  Trưa: { from: '', to: '', wage: '' },
  Tối: { from: '', to: '', wage: '' },
});

const initialData: Attendance = {
  nv01: { name: 'Nguyễn Văn A', note: '', shifts: { Sáng: { from: '08:00', to: '12:00', wage: '10' }, Trưa: { from: '', to: '', wage: '' }, Tối: { from: '', to: '', wage: '' } } },
  nv02: { name: 'Trần Thị B', note: '', shifts: { Sáng: { from: '', to: '', wage: '' }, Trưa: { from: '12:30', to: '17:00', wage: '12' }, Tối: { from: '', to: '', wage: '' } } },
  nv03: { name: 'Lê Văn C', note: '', shifts: { Sáng: { from: '', to: '', wage: '' }, Trưa: { from: '', to: '', wage: '' }, Tối: { from: '18:00', to: '22:00', wage: '15' } } },
  nv04: { name: 'Phạm Thị D', note: '', shifts: fakeShifts() },
  nv05: { name: 'Hoàng Văn E', note: '', shifts: fakeShifts() },
  nv06: { name: 'Đặng Thị F', note: '', shifts: fakeShifts() },
  nv07: { name: 'Ngô Văn G', note: '', shifts: fakeShifts() },
  nv08: { name: 'Bùi Thị H', note: '', shifts: fakeShifts() },
  nv09: { name: 'Trịnh Văn I', note: '', shifts: fakeShifts() },
  nv10: { name: 'Lâm Thị J', note: '', shifts: fakeShifts() },
};

export default function AttendancePage() {
  const [data, setData] = useState<Attendance>(initialData);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const updateShiftField = (id: string, shift: string, field: keyof ShiftInfo, value: string) => {
    setData(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        shifts: {
          ...prev[id].shifts,
          [shift]: {
            ...prev[id].shifts[shift],
            [field]: value,
          },
        },
      },
    }));
  };

  const handleNoteChange = (id: string, note: string) => {
    setData(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        note,
      },
    }));
  };

  const handleSave = () => {
    console.log('📅 Ngày:', date?.toLocaleDateString('vi-VN'));
    console.log('✅ Dữ liệu chấm công:', data);
    alert('Đã lưu dữ liệu vào console!');
  };

  const filteredEmployees = Object.entries(data).filter(([, info]) =>
    info.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto pb-6 space-y-6 text-gray-800">
      {/* Header lọc ngày và tìm kiếm */}
      <div className=" pt-2 pb-3">
        <div className="flex justify-between items-center flex-wrap gap-4 px-2">
          <div className="flex items-end gap-4">
            <div>
              <Label htmlFor="date" className="block mb-1 font-medium text-sm">
                Ngày làm việc
              </Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline" id="date" className="w-48 justify-between font-normal">
                    {date ? date.toLocaleDateString('vi-VN') : 'Chọn ngày'}
                    <ChevronDownIcon className="ml-2 h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      setDate(date);
                      setOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label htmlFor="search" className="block mb-1 font-medium text-sm">
                Tìm kiếm
              </Label>
              <Input
                id="search"
                placeholder="Nhập tên nhân viên"
                onChange={(e) => setSearch(e.target.value)}
                className="w-60 bg-white"
              />
            </div>
          </div>

          <Button onClick={handleSave} className="bg-red-700 hover:bg-green-700 text-white mt-5">
            Lưu dữ liệu
          </Button>
        </div>
      </div>

      {/* Danh sách nhân viên */}
      <div className="space-y-3 px-2">
        {filteredEmployees.map(([id, info], index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="flex flex-wrap md:flex-nowrap items-start md:items-center gap-6 border border-red-200 hover:border-red-400 rounded-md px-4 py-3 bg-white shadow-sm transition duration-150"
          >
            {/* Tên nhân viên */}
            <div className="font-semibold text-sm min-w-[120px] text-red-700">{info.name}</div>

            {/* Ca làm */}
            <div className="flex flex-wrap gap-4">
              {shifts.map((shift) => (
                <div key={shift} className="flex flex-col gap-1 w-40">
                  <div className="text-xs text-red-600 font-medium">{shift}</div>
                  <div className="flex items-center gap-1">
                    <input
                      type="text"
                      placeholder="Từ"
                      className="border border-gray-300 focus:border-red-500 rounded px-1 py-1 w-16 text-xs transition"
                      value={info.shifts[shift].from}
                      onChange={(e) => updateShiftField(id, shift, 'from', e.target.value)}
                    />
                    <span>-</span>
                    <input
                      type="text"
                      placeholder="Đến"
                      className="border border-gray-300 focus:border-red-500 rounded px-1 py-1 w-16 text-xs transition"
                      value={info.shifts[shift].to}
                      onChange={(e) => updateShiftField(id, shift, 'to', e.target.value)}
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <input
                      type="text"
                      placeholder="Lương"
                      className="border border-gray-300 focus:border-red-500 rounded px-1 py-1 w-[50px] text-xs text-right transition"
                      value={info.shifts[shift].wage}
                      onChange={(e) => updateShiftField(id, shift, 'wage', e.target.value)}
                    />
                    <span className="text-xs text-gray-500">k/giờ</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Ghi chú */}
            <div className="flex-1">
              <textarea
                value={info.note}
                onChange={(e) => handleNoteChange(id, e.target.value)}
                className="w-full border border-gray-300 focus:border-red-500 rounded px-2 py-1 text-xs transition"
                rows={2}
                placeholder="Ghi chú..."
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
