import { AnalyticsHeader } from '@/components/analytics/analytics-header';
import { AnalyticsMetrics } from '@/components/analytics/analytics-metrics';
import { CustomerGrowth } from '@/components/analytics/customer-growth';
import { RevenueDistribution } from '@/components/analytics/revenue-distribution';

export default function AnalyticsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <AnalyticsHeader />
      <AnalyticsMetrics />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-7">
        <CustomerGrowth />
        <RevenueDistribution />
      </div>
    </div>
  );
}