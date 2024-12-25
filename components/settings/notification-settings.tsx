'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="new-customer">New Customer Notifications</Label>
          <Switch id="new-customer" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="subscription-expiry">Subscription Expiry Alerts</Label>
          <Switch id="subscription-expiry" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="revenue-alerts">Revenue Milestone Alerts</Label>
          <Switch id="revenue-alerts" defaultChecked />
        </div>
      </CardContent>
    </Card>
  );
}