'use client';

import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

export function VersionHeader() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
      <h2 className="text-3xl font-bold tracking-tight">Version Control</h2>
      <Button>
        <Upload className="mr-2 h-4 w-4" />
        Deploy New Version
      </Button>
    </div>
  );
}