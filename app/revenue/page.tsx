import { RevenueOverview } from '@/components/revenue/revenue-overview';
import { RevenueMetrics } from '@/components/revenue/revenue-metrics';
import { RevenueByType } from '@/components/revenue/revenue-by-type';

export default function RevenuePage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">Revenue Analytics</h2>
      <RevenueMetrics />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-7">
        <RevenueOverview />
        <RevenueByType />
      </div>
    </div>
  );
}