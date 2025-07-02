'use client';
import { Bar } from 'react-chartjs-2';
import { ScriptableContext } from 'chart.js';
import { useEffect, useState } from 'react';

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface RevenueChartProps {
  data: number[];
}

export default function RevenueChart({ data }: RevenueChartProps) {
  const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const [currentMonth, setCurrentMonth] = useState<number | null>(null);

  useEffect(() => {
    setCurrentMonth(new Date().getMonth());
  }, []);

  const revenueData = {
    labels: monthLabels,
    datasets: [
      {
        label: 'Revenue',
        data,
        backgroundColor: (ctx: ScriptableContext<'bar'>) => {
          const index = ctx.dataIndex;
          return index === currentMonth ? '#dc2626' : '#e5e7eb';
        },
        borderRadius: 8,
        barThickness: 24,
      },
    ],
  };

  return (
    <div className="col-span-2 bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-500">Monthly Revenue</div>
        <div className="text-xl font-bold">
          {currentMonth !== null ? `$${data[currentMonth].toLocaleString()}` : '--'}
        </div>
      </div>
      <Bar
        data={revenueData}
        options={{
          plugins: { legend: { display: false } },
          scales: {
            y: { display: false },
            x: { grid: { display: false } },
          },
        }}
      />
    </div>
  );
}
