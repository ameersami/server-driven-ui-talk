'use client';

import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip, Legend } from 'recharts';

const RevenuePieChart = () => {
  const data = [
    { name: 'One-Time Revenue', value: 368000 },
    { name: 'Recurring Revenue', value: 150000 }
  ];

  const COLORS = ['#818CF8', '#C4B5FD'];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="80%"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Legend
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{
            paddingTop: '20px',
            width: '100%'
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default RevenuePieChart;