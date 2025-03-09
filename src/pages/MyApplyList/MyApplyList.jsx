import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const MyApplyList = () => {
  const { user } = useAuth(); 
  const [registrations, setRegistrations] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [currentRegistration, setCurrentRegistration] = useState(null);
  const [form, setForm] = useState({
    marathonTitle: "",
    startDate: "",
    firstName: "",
    lastName: "",
    contactNumber: "",
  });

  useEffect(() => {
    const fetchRegistrations = async () => {
      if (user?.email) {
        try {
          const response = await axios.get(
            `http://localhost:5000/registrations?email=${user.email}`
          );
          setRegistrations(response.data);
        } catch (error) {
          console.error("Error fetching registrations:", error);
        }
      }
    };

    if (user) {
      fetchRegistrations();
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
    setIsUpdateModalOpen(true);
  };


  const handleDelete = (registration) => {
    setCurrentRegistration(registration);
    setIsDeleteModalOpen(true);
  };

 
  const updateRegistration = () => {
    axios
      .put(
        `http://localhost:5000/registrations/${currentRegistration._id}`,
        form
      )
      .then(() => {
        setRegistrations(
          registrations.map((r) =>
            r._id === currentRegistration._id ? { ...r, ...form } : r
          )
        );
        setIsUpdateModalOpen(false);
      })
      .catch((error) => {
        console.error("Error updating registration:", error);
      });
  };

  
  const deleteRegistration = () => {
    axios
      .delete(
        `http://localhost:5000/registrations/${currentRegistration._id}`
      )
      .then(() => {
        setRegistrations(
          registrations.filter((r) => r._id !== currentRegistration._id)
        );
        setIsDeleteModalOpen(false);
      })
      .catch((error) => {
        console.error("Error deleting registration:", error);
      });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">My Apply List</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left">Marathon Title</th>
            <th className="px-4 py-2 text-left">Start Date</th>
            <th className="px-4 py-2 text-left">First Name</th>
            <th className="px-4 py-2 text-left">Last Name</th>
            <th className="px-4 py-2 text-center">Contact Number</th>
            <th className="px-4 py-2 text-center">Actions</th> 
          </tr>
        </thead>
        <tbody>
          {registrations.map((registration) => (
            <tr key={registration._id} className="border-b">
              <td className="px-4 py-2">{registration.marathonTitle}</td>
              <td className="px-4 py-2">{registration.startDate}</td>
              <td className="px-4 py-2">{registration.firstName}</td>
              <td className="px-4 py-2">{registration.lastName}</td>
              <td className="px-4 py-2">{registration.contactNumber}</td>
              <td className="px-4 py-2 flex justify-center space-x-4">
                <button
                  onClick={() => handleUpdate(registration)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(registration)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Modal */}
      {isUpdateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-base-200 p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Update Registration</h3>
            <label className="block text-sm font-medium mb-2">Marathon Title</label>
            <input
              type="text"
              value={form.marathonTitle}
              onChange={(e) => setForm({ ...form, marathonTitle: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
            />
            <label className="block text-sm font-medium mb-2">Start Date</label>
            <input
              type="date"
              value={form.startDate}
              onChange={(e) => setForm({ ...form, startDate: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
            />
            <label className="block text-sm font-medium mb-2">First Name</label>
            <input
              type="text"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
            />
            <label className="block text-sm font-medium mb-2">Last Name</label>
            <input
              type="text"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
            />
            <label className="block text-sm font-medium mb-2">Contact Number</label>
            <input
              type="text"
              value={form.contactNumber}
              onChange={(e) => setForm({ ...form, contactNumber: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
            />
            <div className="flex justify-center space-x-4">
              <button
                onClick={updateRegistration}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => setIsUpdateModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Confirm Delete</h3>
            <p className="mb-4 text-center">
              Are you sure you want to delete this registration?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={deleteRegistration}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Yes
              </button>
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
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
