import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Section */}
      <div className="p-6 w-full">
        <h2 className="text-3xl font-bold text-white">🏃 Welcome to Marathon Dashboard</h2>
        <p className="text-lg text-white mt-2">Select an option from the sidebar</p>

        {/* Outlet will render the nested components based on the route */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
