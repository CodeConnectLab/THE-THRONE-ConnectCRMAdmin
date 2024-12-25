'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const revenueByType = [
  {
    type: 'SAAS',
    amount: '$45,231.89',
    percentage: '54.5%',
    trend: '+10.5%',
  },
  {
    type: 'Source Code',
    amount: '$23,456.40',
    percentage: '28.3%',
    trend: '+15.2%',
  },
  {
    type: 'Server',
    amount: '$14,234.89',
    percentage: '17.2%',
    trend: '-4.3%',
  },
];

export function RevenueByType() {
  return (
    <Card className="col-span-1 md:col-span-3">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">Revenue by Type</h3>
        <div className="space-y-6">
          {revenueByType.map((item) => (
            <div key={item.type} className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{item.type}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {item.percentage}
                  </span>
                </div>
                <p className="text-lg font-semibold mt-1">{item.amount}</p>
              </div>
              <span className={item.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}>
                {item.trend}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}