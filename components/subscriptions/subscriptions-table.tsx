'use client';

import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatDate } from '@/lib/utils';

const subscriptions = [
  {
    id: '1',
    customer: 'Acme Corp',
    plan: 'Enterprise SAAS',
    status: 'active',
    startDate: '2024-01-15',
    endDate: '2025-01-14',
    amount: '$599/month',
  },
  {
    id: '2',
    customer: 'TechStart Inc',
    plan: 'Source Code License',
    status: 'trial',
    startDate: '2024-03-01',
    endDate: '2024-03-15',
    amount: '$2,999',
  },
  {
    id: '3',
    customer: 'DataFlow Systems',
    plan: 'Server + Support',
    status: 'active',
    startDate: '2024-02-01',
    endDate: '2025-01-31',
    amount: '$299/month',
  },
];

export function SubscriptionsTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subscriptions.map((subscription) => (
            <TableRow key={subscription.id}>
              <TableCell className="font-medium">
                {subscription.customer}
              </TableCell>
              <TableCell>
                <Badge variant="outline">{subscription.plan}</Badge>
              </TableCell>
              <TableCell>
                <Badge 
                  variant={subscription.status === 'active' ? 'default' : 'secondary'}
                >
                  {subscription.status}
                </Badge>
              </TableCell>
              <TableCell>{formatDate(subscription.startDate)}</TableCell>
              <TableCell>{formatDate(subscription.endDate)}</TableCell>
              <TableCell>{subscription.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}