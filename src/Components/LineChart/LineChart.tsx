'use client';

import { LineChart as RCLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, Legend } from 'recharts';

import styles from './LineChart.module.css';

const LineChart = RCLineChart as any;

const data = [
  { month: 'Jun', pageviews: 15000 },
  { month: 'Jul', pageviews: 20000 },
  { month: 'Aug', pageviews: 135520 },
  { month: 'Sep', pageviews: 5000 },
  { month: 'Oct', pageviews: 5000 },
  { month: 'Nov', pageviews: 12000 },
  { month: 'Dec', pageviews: 18000 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 text-white p-2 rounded-md">
        <p className="text-sm">{payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

export default () => {
  return (
    <ResponsiveContainer width="100%" height="100%" className={styles.lineContainer}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid 
          strokeDasharray="3 3" 
          vertical={false} 
          stroke="#eee"
        />
        <XAxis
          dataKey="month" 
        />
        <YAxis
          dataKey="pageviews"
          tick={{ fill: '#666' }}
          tickFormatter={(value) => `${value / 1000}K`}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="pageviews"
          stroke="#0066FF"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 6, fill: "#0066FF" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
