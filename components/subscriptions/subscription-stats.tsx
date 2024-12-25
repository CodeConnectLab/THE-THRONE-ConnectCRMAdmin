'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const stats = [
  {
    title: 'Active Subscriptions',
    value: '2,350',
    icon: Users,
    description: '+180 from last month',
  },
  {
    title: 'Trial Subscriptions',
    value: '245',
    icon: Clock,
    description: '+30 from last month',
  },
  {
    title: 'Renewal Rate',
    value: '85%',
    icon: CheckCircle,
    description: '+2.3% from last month',
  },
  {
    title: 'Expiring Soon',
    value: '58',
    icon: AlertCircle,
    description: 'Next 30 days',
  },
];

export function SubscriptionStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}