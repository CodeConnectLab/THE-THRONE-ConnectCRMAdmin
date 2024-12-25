'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const recentCustomers = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    type: 'SAAS',
    status: 'active',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    type: 'Source Code',
    status: 'trial',
  },
  {
    name: 'Bob Johnson',
    email: 'bob@example.com',
    type: 'Server',
    status: 'active',
  },
];

export function RecentCustomers() {
  return (
    <div className="space-y-8 mt-4">
      {recentCustomers.map((customer) => (
        <div key={customer.email} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>
              {customer.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{customer.name}</p>
            <p className="text-sm text-muted-foreground">{customer.email}</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Badge variant="outline">{customer.type}</Badge>
            <Badge 
              variant={customer.status === 'active' ? 'default' : 'secondary'}
            >
              {customer.status}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
}