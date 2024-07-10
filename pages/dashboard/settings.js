import RootLayout from '@/components/Layout';
import DashboardLayout from '@/components/DashboardLayout';

const Settings = () => {
  return <div>My settings screen</div>;
};

Settings.getLayout = (page1) => (
  <RootLayout>
    <DashboardLayout>{page1}</DashboardLayout>
  </RootLayout>
);

export default Settings;
