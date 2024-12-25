'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const versions = [
  {
    version: 'v2.1.0',
    date: '2024-03-15',
    status: 'current',
    changes: [
      'Added new dashboard features',
      'Performance improvements',
      'Bug fixes in reporting module',
    ],
  },
  {
    version: 'v2.0.1',
    date: '2024-02-28',
    status: 'previous',
    changes: [
      'Security patches',
      'UI improvements',
    ],
  },
  {
    version: 'v2.0.0',
    date: '2024-02-01',
    status: 'previous',
    changes: [
      'Major version update',
      'New UI design',
      'Added analytics features',
    ],
  },
];

export function VersionList() {
  return (
    <div className="space-y-4">
      {versions.map((version) => (
        <Card key={version.version} className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <h3 className="text-xl font-semibold">{version.version}</h3>
              <Badge 
                variant={version.status === 'current' ? 'default' : 'secondary'}
              >
                {version.status}
              </Badge>
            </div>
            <span className="text-sm text-muted-foreground">{version.date}</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            {version.changes.map((change, index) => (
              <li key={index}>{change}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}