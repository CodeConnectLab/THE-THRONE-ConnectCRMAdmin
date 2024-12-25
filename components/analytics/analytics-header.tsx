'use client';

import { CalendarDateRangePicker } from '@/components/date-range-picker';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function AnalyticsHeader() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
      <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
      <div className="flex items-center space-x-2">
        <CalendarDateRangePicker />
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>
    </div>
  );
}