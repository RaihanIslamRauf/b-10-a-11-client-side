import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-base-200 mt-4 mb-4 p-4 w-1/4 lg:min-h-screen shadow-lg">
      <ul className="space-y-4">
        <li>
          <Link to="/dashboard/add-marathon" className="btn bg-red-600 text-white w-full">
            ➕ Add Marathon
          </Link>
        </li>
        <li>
          <Link to="/dashboard/my-marathons" className="btn bg-red-600 text-white w-full">
            📜 My Marathon List
          </Link>
        </li>
        <li>
          <Link to="/dashboard/my-apply-list" className="btn bg-red-600 text-white w-full">
            ✅ My Apply List
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
