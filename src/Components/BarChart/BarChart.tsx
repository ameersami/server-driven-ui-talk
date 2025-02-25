'use client';

import { BarChart as RCBarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import styles from './BarChart.module.css';

const BarChart = RCBarChart as any;

export default () => {

  const data = [
    { month: 'Jan', oneTime: 100000, recurring: 0 },
    { month: 'Feb', oneTime: 40000, recurring: 0 },
    { month: 'Mar', oneTime: 50000, recurring: 0 },
    { month: 'Apr', oneTime: 60000, recurring: 25000 },
    { month: 'May', oneTime: 8000, recurring: 25000 },
    { month: 'Jun', oneTime: 10000, recurring: 25000 },
    { month: 'Jul', oneTime: 55000, recurring: 25000 },
    { month: 'Aug', oneTime: 45000, recurring: 25000 }
  ];

  return (
    <ResponsiveContainer width="100%" height="100%" className={styles.barContainer}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis 
          dataKey="month" 
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => `${value/1000}K`}
        />
        <Tooltip
          formatter={(value) => `$${value.toLocaleString()}`}
        />
        <Bar 
          dataKey="oneTime" 
          name="One-Time Revenue" 
          fill="#818CF8" 
          radius={[4, 4, 0, 0]}
        />
        <Bar 
          dataKey="recurring" 
          name="Recurring Revenue" 
          fill="#C4B5FD" 
          radius={[4, 4, 0, 0]}
        />
        <Legend
          verticalAlign="bottom" 
          align="center"
          wrapperStyle={{
            paddingTop: '20px',
            width: '100%'
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  )

};