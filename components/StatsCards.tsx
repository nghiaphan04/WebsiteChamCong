'use client';
import CountUp from 'react-countup';

type Stat = {
  title: string;
  value: string;
  color: string;
  change: string;
};

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

export default function StatsCards({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((stat, i) => {
        const { end, prefix, suffix, displaySuffix } = parseStatValue(stat.value);
        return (
          <div key={i} className="bg-white p-4 rounded-lg shadow space-y-1">
            <div className={`text-sm font-medium text-${stat.color}-600`}>
              {stat.title}
            </div>
            <div className="text-xl font-bold">
              <CountUp end={end} duration={1.5} separator="," prefix={prefix} suffix={suffix} />
              {displaySuffix}
            </div>
            <div className="text-xs text-gray-500">{stat.change}</div>
          </div>
        );
      })}
    </div>
  );
}