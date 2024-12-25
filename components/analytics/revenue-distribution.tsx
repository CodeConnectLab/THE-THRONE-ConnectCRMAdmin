'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const distributionData = [
  {
    segment: 'Enterprise',
    customers: 150,
    percentage: '45%',
    revenue: '$380,000',
  },
  {
    segment: 'Mid-Market',
    customers: 280,
    percentage: '35%',
    revenue: '$295,000',
  },
  {
    segment: 'Small Business',
    customers: 570,
    percentage: '20%',
    revenue: '$168,000',
  },
];

export function RevenueDistribution() {
  return (
    <Card className="col-span-1 md:col-span-3">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">Revenue Distribution</h3>
        <div className="space-y-6">
          {distributionData.map((item) => (
            <div key={item.segment} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{item.segment}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {item.customers} customers
                  </span>
                </div>
                <span className="font-medium">{item.percentage}</span>
              </div>
              <div className="text-lg font-semibold">{item.revenue}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}