import { Card } from '@/components/ui/card';
import { Overview } from '@/components/dashboard/overview';
import { RecentCustomers } from '@/components/dashboard/recent-customers';
import { DashboardHeader } from '@/components/dashboard/header';
import { DashboardCards } from '@/components/dashboard/cards';

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <DashboardHeader />
      <DashboardCards />
      
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-1 md:col-span-2 lg:col-span-4">
          <div className="p-6">
            <h2 className="text-xl font-semibold">Revenue Overview</h2>
            <Overview />
          </div>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-3">
          <div className="p-6">
            <h2 className="text-xl font-semibold">Recent Customers</h2>
            <RecentCustomers />
          </div>
        </Card>
      </div>
    </div>
  );
}