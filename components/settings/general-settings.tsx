'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function GeneralSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>General Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <Input id="company" defaultValue="Throne CRM" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="support-email">Support Email</Label>
          <Input id="support-email" type="email" defaultValue="support@throne.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="timezone">Default Timezone</Label>
          <Input id="timezone" defaultValue="UTC-05:00" />
        </div>
      </CardContent>
    </Card>
  );
}