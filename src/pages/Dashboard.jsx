import Sidebar from "../components/Sidebar";
import CustomDashboard from "../components/CustomDashboard";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6">
        <CustomDashboard />
      </main>
    </div>
  );
};

export default Dashboard;
