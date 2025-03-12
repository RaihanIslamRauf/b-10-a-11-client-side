import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";

const MyApplyList = () => {
  useTitle();
  const { user } = useAuth();
  const [registrations, setRegistrations] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRegistration, setCurrentRegistration] = useState(null);
  const [form, setForm] = useState({
    marathonTitle: "",
    startDate: "",
    firstName: "",
    lastName: "",
    contactNumber: "",
  });

  useEffect(() => {
    if (user?.email) {
      axios.get(`https://b-10-a-11-server-side.vercel.app/registrations?email=${user.email}`)
        .then((res) => setRegistrations(res.data))
        .catch((error) => console.error("Error fetching registrations:", error));
    }
  }, [user]);

  const handleUpdate = (registration) => {
    setCurrentRegistration(registration);
    setForm({
      marathonTitle: registration.marathonTitle,
      startDate: registration.startDate,
      firstName: registration.firstName,
      lastName: registration.lastName,
      contactNumber: registration.contactNumber,
    });
    setIsModalOpen(true);
  };

  const updateRegistration = () => {
    axios.put(`https://b-10-a-11-server-side.vercel.app/registrations/${currentRegistration._id}`, form)
      .then(() => {
        setRegistrations(
          registrations.map((r) => (r._id === currentRegistration._id ? { ...r, ...form } : r))
        );
        setIsModalOpen(false);
        Swal.fire("Updated!", "The application has been updated.", "success");
      })
      .catch((error) => {
        console.error("Error updating application:", error);
        Swal.fire("Error!", "Failed to update application.", "error");
      });
  };

  const handleDelete = (registration) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://b-10-a-11-server-side.vercel.app/registrations/${registration._id}`)
          .then(() => {
            setRegistrations(registrations.filter((r) => r._id !== registration._id));
            Swal.fire("Deleted!", "The application has been deleted.", "success");
          })
          .catch((error) => {
            console.error("Error deleting registration:", error);
            Swal.fire("Error!", "Failed to delete application.", "error");
          });
      }
    });
  };

  return (
    <div className="">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4 text-center">
        My Apply List
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 text-white text-xs sm:text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-1 sm:p-2 border border-gray-700">Marathon Title</th>
              <th className="p-1 sm:p-2 border border-gray-700">Start Date</th>
              <th className="p-1 sm:p-2 border border-gray-700">First Name</th>
              <th className="p-1 sm:p-2 border border-gray-700">Last Name</th>
              <th className="p-1 sm:p-2 border border-gray-700">Contact</th>
              <th className="p-1 sm:p-2 border border-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((registration) => (
              <tr key={registration._id} className="bg-gray-900 hover:bg-gray-800">
                <td className="p-1 sm:p-2 border border-gray-700">{registration.marathonTitle}</td>
                <td className="p-1 sm:p-2 border border-gray-700">{registration.startDate}</td>
                <td className="p-1 sm:p-2 border border-gray-700">{registration.firstName}</td>
                <td className="p-1 sm:p-2 border border-gray-700">{registration.lastName}</td>
                <td className="p-1 sm:p-2 border border-gray-700">{registration.contactNumber}</td>
                <td className="p-1 sm:p-2 border border-gray-700 flex lg:flex-row flex-col items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
                  <button
                    onClick={() => handleUpdate(registration)}
                    className="bg-blue-500 btn text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(registration)}
                    className="bg-red-500 btn text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Update Registration</h3>
            {Object.keys(form).map((key) => (
              <div key={key} className="mb-3">
                <label className="block text-xs sm:text-sm font-medium mb-1 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type="text"
                  value={form[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="w-full px-3 py-1 sm:py-2 border border-gray-500 bg-gray-900 rounded text-xs sm:text-sm"
                />
              </div>
            ))}
            <div className="flex justify-between mt-4">
              <button
                onClick={updateRegistration}
                className="bg-blue-500 text-white text-xs sm:text-sm px-3 py-1 sm:py-2 rounded hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white text-xs sm:text-sm px-3 py-1 sm:py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyApplyList;
