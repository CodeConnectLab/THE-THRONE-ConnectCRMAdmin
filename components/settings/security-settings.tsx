'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Key, Shield } from 'lucide-react';

export function SecuritySettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Security Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="current-password">Current Password</Label>
          <Input id="current-password" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="new-password">New Password</Label>
          <Input id="new-password" type="password" />
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="w-full">
            <Key className="mr-2 h-4 w-4" />
            Change Password
          </Button>
          <Button variant="outline" className="w-full">
            <Shield className="mr-2 h-4 w-4" />
            Enable 2FA
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}