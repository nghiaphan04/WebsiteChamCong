
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';


import PromoCard from '../../components/PromoCard';
import PieChartCard from '../../components/PieChartCard';
import ActivitiesCard from '../../components/ActivitiesCard';
import InvoiceTable from '../../components/InvoiceTable';
import StatsCards from '../../components/StatsCards';
import RevenueChart from '../../components/RevenueChart';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

export default function DashboardPage() {

  const revenueValues = [5000, 7500, 8000, 9500, 12000, 10500, 15000, 13000, 12500, 11000, 10800, 9200];


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

  return (
    <div className="flex text-gray-800">
      <main className="flex-1 space-y-6 max-w-[1440px] mx-auto">
      
        <StatsCards stats={stats} />

        <div className="grid grid-cols-4 gap-6">
          <RevenueChart
            data={revenueValues}
          />
          <PromoCard />
          <PieChartCard data={pieData} />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <ActivitiesCard />
          <InvoiceTable />
        </div>
      </main>
    </div>
  );
}
