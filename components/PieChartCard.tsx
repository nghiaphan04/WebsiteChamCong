'use client'
import { ChartData } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartCardProps {
  data: ChartData<'pie'>;
}

export default function PieChartCard({ data }: PieChartCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Revenue Share</h3>
      <Pie data={data} options={{ plugins: { legend: { position: 'bottom' } } }} />
    </div>
  );
}
