'use client';

import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';

export function SettingsHeader() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
      <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      <Button>
        <Save className="mr-2 h-4 w-4" />
        Save Changes
      </Button>
    </div>
  );
}