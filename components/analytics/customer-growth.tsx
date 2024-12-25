'use client';

import { Card } from '@/components/ui/card';
import { ChartContainer } from '@/components/ui/chart-container';
import { ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', total: 1200 },
  { name: 'Feb', total: 1500 },
  { name: 'Mar', total: 1800 },
  { name: 'Apr', total: 2100 },
  { name: 'May', total: 2400 },
  { name: 'Jun', total: 2800 },
];

export function CustomerGrowth() {
  return (
    <Card className="col-span-1 md:col-span-4">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">Customer Growth</h3>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <ChartContainer data={data} />
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}