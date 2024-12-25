'use client';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export function CustomersHeader() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
      <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
      <Button>
        <Plus className="mr-2 h-4 w-4" />
        Add Customer
      </Button>
    </div>
  );
}