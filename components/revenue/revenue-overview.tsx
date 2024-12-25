'use client';

import { Card } from '@/components/ui/card';
import { ChartContainer } from '@/components/ui/chart-container';
import { ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', total: 4500 },
  { name: 'Feb', total: 5200 },
  { name: 'Mar', total: 4800 },
  { name: 'Apr', total: 6100 },
  { name: 'May', total: 5900 },
  { name: 'Jun', total: 7200 },
];

export function RevenueOverview() {
  return (
    <Card className="col-span-1 md:col-span-4">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">Revenue Trend</h3>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <ChartContainer data={data} />
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}