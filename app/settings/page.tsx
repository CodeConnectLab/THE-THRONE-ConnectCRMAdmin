import { SettingsHeader } from '@/components/settings/settings-header';
import { GeneralSettings } from '@/components/settings/general-settings';
import { NotificationSettings } from '@/components/settings/notification-settings';
import { SecuritySettings } from '@/components/settings/security-settings';

export default function SettingsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <SettingsHeader />
      <div className="grid gap-4">
        <GeneralSettings />
        <NotificationSettings />
        <SecuritySettings />
      </div>
    </div>
  );
}