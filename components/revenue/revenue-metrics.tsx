'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

const metrics = [
  {
    title: 'Total Revenue',
    value: '$82,923.18',
    change: '+20.1%',
    trend: 'up',
  },
  {
    title: 'SAAS Revenue',
    value: '$45,231.89',
    change: '+10.5%',
    trend: 'up',
  },
  {
    title: 'Source Code Sales',
    value: '$23,456.40',
    change: '+15.2%',
    trend: 'up',
  },
  {
    title: 'Server Revenue',
    value: '$14,234.89',
    change: '-4.3%',
    trend: 'down',
  },
];

export function RevenueMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className={metric.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'} style={{ display: 'flex', alignItems: 'center' }}>
                {metric.change}
                {metric.trend === 'up' ? (
                  <TrendingUp className="h-4 w-4 ml-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 ml-1" />
                )}
              </span>
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}