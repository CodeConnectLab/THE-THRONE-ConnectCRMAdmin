'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const customers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    type: 'SAAS',
    status: 'active',
    revenue: '$2,400',
    subscriptionEnd: '2024-12-31',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    type: 'Source Code',
    status: 'trial',
    revenue: '$5,000',
    subscriptionEnd: '2024-05-15',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    type: 'Server',
    status: 'active',
    revenue: '$1,200',
    subscriptionEnd: '2024-08-22',
  },
];

export function CustomersTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Revenue</TableHead>
            <TableHead>Subscription End</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell className="font-medium">{customer.name}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>
                <Badge variant="outline">{customer.type}</Badge>
              </TableCell>
              <TableCell>
                <Badge 
                  variant={customer.status === 'active' ? 'default' : 'secondary'}
                >
                  {customer.status}
                </Badge>
              </TableCell>
              <TableCell>{customer.revenue}</TableCell>
              <TableCell>{customer.subscriptionEnd}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}