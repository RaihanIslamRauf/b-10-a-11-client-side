import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-base-200 mt-4 mb-4 p-4 w-full md:w-1/3 lg:w-1/4 lg:min-h-screen shadow-lg">
      <ul className="space-y-4">
        <li>
          <Link
            to="/dashboard/add-marathon"
            className="text-base sm:text-lg py-3 px-4 bg-red-600 hover:bg-red-700 text-white w-full block text-center rounded-lg"
          >
            ➕ Add Marathon
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/my-marathons"
            className="text-base sm:text-lg py-3 px-4 bg-red-600 hover:bg-red-700 text-white w-full block text-center rounded-lg"
          >
            📜 My Marathon List
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/my-apply-list"
            className="text-base sm:text-lg py-3 px-4 bg-red-600 hover:bg-red-700 text-white w-full block text-center rounded-lg"
          >
            ✅ My Apply List
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
