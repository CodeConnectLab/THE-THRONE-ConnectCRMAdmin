import { SubscriptionsHeader } from '@/components/subscriptions/subscriptions-header';
import { SubscriptionsTable } from '@/components/subscriptions/subscriptions-table';
import { SubscriptionStats } from '@/components/subscriptions/subscription-stats';

export default function SubscriptionsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <SubscriptionsHeader />
      <SubscriptionStats />
      <SubscriptionsTable />
    </div>
  );
}