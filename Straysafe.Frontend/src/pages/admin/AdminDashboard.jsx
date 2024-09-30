import React, { useEffect, useState } from "react";
import AdminSidebarNavigation from "../../components/navigation/AdminSidebarNavigation";
import PageContainer from "../../components/containers/PageContainer";
import MainDashboard from "./subpages/MainDashboard";
import UserActivitiesDashboard from "./subpages/UserActivitiesDashboard";
import AnnouncementsDashboard from "./subpages/AnnouncementsDashboard";
import ReportsDashboard from "./subpages/ReportsDashboard";
import UsersDashboard from "./subpages/UsersDashboard";
import DonationsDashboard from "./subpages/DonationsDashboard";
import NotificationsDashboard from "./subpages/NotificationsDashboard";

function DashboardItem({ active }) {
  if (active === "User Activities") {
    return <UserActivitiesDashboard />;
  } else if (active === "Announcements") {
    return <AnnouncementsDashboard />;
  } else if (active === "Reports") {
    return <ReportsDashboard />;
  } else if (active === "Users") {
    return <UsersDashboard />;
  } else if (active === "Donation") {
    return <DonationsDashboard />;
  } else if (active === "Notifications") {
    return <NotificationsDashboard />;
  }

  return <MainDashboard />;
}
function AdminDashboard() {
  const [activeDashboard, setActiveDashboard] = useState("Home");

  useEffect(() => {}, [activeDashboard]);
  return (
    <div>
      <AdminSidebarNavigation
        setActiveDashboard={setActiveDashboard}
        activeDashboard={activeDashboard}
      />
      <div className="absolute w-auto right-0 sm:left-64 left-0">
        <PageContainer>
          <DashboardItem active={activeDashboard} />
        </PageContainer>
      </div>
    </div>
  );
}

export default AdminDashboard;