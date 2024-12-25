'use client';

import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

interface ChartContainerProps {
  data: Array<{ name: string; total: number }>;
}

export function ChartContainer({ data }: ChartContainerProps) {
  return (
    <LineChart data={data}>
      <XAxis 
        dataKey="name"
        stroke="#888888"
        fontSize={12}
        tickLine={false}
        axisLine={false}
      />
      <YAxis
        stroke="#888888"
        fontSize={12}
        tickLine={false}
        axisLine={false}
        tickFormatter={(value) => `$${value}`}
      />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="total"
        stroke="hsl(var(--primary))"
        strokeWidth={2}
        dot={false}
      />
    </LineChart>
  );
}