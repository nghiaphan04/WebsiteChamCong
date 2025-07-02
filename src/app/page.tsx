'use client';
import { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import CountUp from 'react-countup';
import { ScriptableContext } from 'chart.js';




ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

export default function DashboardPage() {
  const monthLabels = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const revenueValues = [
    5000, 7500, 8000, 9500, 12000, 10500,
    15000, 13000, 12500, 11000, 10800, 9200
  ];

  const [currentMonthIndex, setCurrentMonthIndex] = useState<number | null>(null);

  useEffect(() => {
    setCurrentMonthIndex(new Date().getMonth());
  }, []);

  const revenueData = {
    labels: monthLabels,
    datasets: [
      {
        label: 'Revenue',
        data: revenueValues,
        backgroundColor: (ctx: ScriptableContext<'bar'>) => {
          const index = ctx.dataIndex;
          return index === currentMonthIndex ? '#dc2626' : '#e5e7eb';
        },
        borderRadius: 8,
        barThickness: 24,
      },
    ],
  };

  const pieData = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        label: 'Revenue %',
        data: [40, 35, 25],
        backgroundColor: ['#ef4444', '#f97316', '#eab308'],
        borderWidth: 1,
      },
    ],
  };

  const stats = [
    { title: 'Total Revenue', value: '$216k', color: 'red', change: '↑ 8%' },
    { title: 'Invoices', value: '2,221', color: 'green', change: '↓ 2%' },
    { title: 'Clients', value: '1,423', color: 'red', change: '↑ 3%' },
    { title: 'Loyalty', value: '78%', color: 'pink', change: '↑ 1%' },
  ];

  const parseStatValue = (val: string) => {
    const isDollar = val.startsWith('$');
    const isPercent = val.endsWith('%');
    const isK = val.toLowerCase().includes('k');
    const num = parseFloat(val.replace(/[^0-9.]/g, ''));

    return {
      end: isK ? num * 1000 : num,
      prefix: isDollar ? '$' : '',
      suffix: isPercent ? '%' : '',
      displaySuffix: isK ? 'k' : '',
    };
  };

  return (
    <div className="flex text-gray-800">
      <main className="flex-1 space-y-6 max-w-[1440px] mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const { end, prefix, suffix, displaySuffix } = parseStatValue(stat.value);
            return (
              <div key={i} className="bg-white p-4 rounded-lg shadow space-y-1">
                <div className={`text-sm font-medium text-${stat.color}-600`}>
                  {stat.title}
                </div>
                <div className="text-xl font-bold">
                  <CountUp
                    end={end}
                    duration={1.5}
                    separator=","
                    prefix={prefix}
                    suffix={suffix}
                  />
                  {displaySuffix}
                </div>
                <div className="text-xs text-gray-500">{stat.change}</div>
              </div>
            );
          })}
        </div>

        {/* Chart + Promo + Pie */}
        <div className="grid grid-cols-4 gap-6">
          {/* Bar Chart */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-500">Monthly Revenue</div>
              <div className="text-xl font-bold">
                {currentMonthIndex !== null
                  ? `$${revenueValues[currentMonthIndex].toLocaleString()}`
                  : '--'}
              </div>
            </div>
            <Bar
              data={revenueData}
              options={{
                plugins: { legend: { display: false } },
                scales: {
                  y: { display: false },
                  x: { grid: { display: false } }
                },
              }}
            />
          </div>

          {/* Promo Card */}
          <div className="bg-gradient-to-br from-red-600 to-red-800 text-white p-6 rounded-lg shadow flex flex-col justify-between">
            <div>
              <div className="bg-white text-red-600 w-fit px-3 py-1 rounded-full text-xs mb-3">NEW</div>
              <h3 className="text-lg font-semibold mb-2">We have added new invoicing templates!</h3>
              <p className="text-sm text-red-100">New templates focused on helping you improve your business</p>
            </div>
            <button className="mt-6 bg-white text-red-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-100 transition">
              Download Now
            </button>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Revenue Share</h3>
            <Pie data={pieData} options={{ plugins: { legend: { position: 'bottom' } } }} />
          </div>
        </div>

        {/* Activities + Invoices */}
        <div className="grid grid-cols-2 gap-6">
          {/* Activities */}
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h3 className="font-semibold text-lg mb-2">Activities</h3>
            <div className="text-sm">
              <span className="text-green-600 font-medium">New Invoice</span>: Francisco Gibbs created invoice <strong>PQ-4491C</strong> — <span className="text-gray-400">Just now</span>
            </div>
            <div className="text-sm">
              <span className="text-red-500 font-medium">Reminder</span>: Invoice JL-3432B sent to <strong>Chester Corp</strong> — <span className="text-gray-400">Friday, 12:59PM</span>
            </div>
          </div>

          {/* Invoices Table */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-4">Recent Invoices</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400">
                  <th className="text-left py-1">No</th>
                  <th className="text-left">Date Created</th>
                  <th className="text-left">Client</th>
                  <th className="text-left">Amount</th>
                  <th className="text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { no: 'PQ-4491C', date: '3 Jul, 2020', client: 'Daniel Padilla', amount: '$2,450', status: 'PAID' },
                  { no: 'IN-9911J', date: '21 May, 2021', client: 'Christina Jacobs', amount: '$1,410', status: 'OVERDUE' },
                  { no: 'UV-2319A', date: '14 Apr, 2020', client: 'Elizabeth Bailey', amount: '$450', status: 'PAID' },
                ].map((invoice, i) => (
                  <tr key={i} className="border-t">
                    <td className="py-2">{invoice.no}</td>
                    <td>{invoice.date}</td>
                    <td>{invoice.client}</td>
                    <td>{invoice.amount}</td>
                    <td className={`font-semibold ${invoice.status === 'PAID' ? 'text-green-600' : 'text-red-500'}`}>
                      {invoice.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
