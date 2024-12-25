import { VersionHeader } from '@/components/version-control/version-header';
import { VersionList } from '@/components/version-control/version-list';

export default function VersionControlPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <VersionHeader />
      <VersionList />
    </div>
  );
}