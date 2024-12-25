'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  LayoutDashboard,
  Users,
  DollarSign,
  Settings,
  Tags,
  BarChart,
  GitBranch,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    label: 'Customers',
    icon: Users,
    href: '/customers',
  },
  {
    label: 'Revenue',
    icon: DollarSign,
    href: '/revenue',
  },
  {
    label: 'Subscriptions',
    icon: Tags,
    href: '/subscriptions',
  },
  {
    label: 'Analytics',
    icon: BarChart,
    href: '/analytics',
  },
  {
    label: 'Version Control',
    icon: GitBranch,
    href: '/version-control',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-muted/50 border-r max-w-[225px]">
      <div className="px-3 py-2">
        <Link href="/dashboard">
          <h1 className="text-2xl font-bold text-primary mb-4 px-4">The Throne</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Button
              key={route.href}
              variant={pathname === route.href ? 'secondary' : 'ghost'}
              className={cn(
                'w-full justify-start',
                pathname === route.href && 'bg-secondary'
              )}
              asChild
            >
              <Link href={route.href}>
                <route.icon className="h-5 w-5 mr-3" />
                {route.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}