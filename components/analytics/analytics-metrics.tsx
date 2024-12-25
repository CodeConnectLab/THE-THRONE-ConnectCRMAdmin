'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, DollarSign, ArrowUpRight, Repeat } from 'lucide-react';

const metrics = [
  {
    title: 'Customer Acquisition Cost',
    value: '$125.50',
    change: '-12.5%',
    icon: Users,
  },
  {
    title: 'Average Revenue Per User',
    value: '$850.00',
    change: '+23.1%',
    icon: DollarSign,
  },
  {
    title: 'Customer Lifetime Value',
    value: '$4,250.00',
    change: '+15.3%',
    icon: ArrowUpRight,
  },
  {
    title: 'Churn Rate',
    value: '2.5%',
    change: '-0.8%',
    icon: Repeat,
  },
];

export function AnalyticsMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className={metric.change.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}>
                {metric.change} from last month
              </span>
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}