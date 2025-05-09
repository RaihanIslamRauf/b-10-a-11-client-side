import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyMarathonsList = () => {
  useTitle();
  const [marathons, setMarathons] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMarathon, setCurrentMarathon] = useState(null);
  const [form, setForm] = useState({ location: "", description: "" });

  useEffect(() => {
    axios.get("http://localhost:5000/marathons").then((res) => setMarathons(res.data));
  }, []);

  const handleUpdate = (marathon) => {
    setCurrentMarathon(marathon);
    setForm({ location: marathon.location, description: marathon.description });
    setIsModalOpen(true);
  };

  const handleDelete = (marathon) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/marathons/${marathon._id}`).then(() => {
          setMarathons(marathons.filter((m) => m._id !== marathon._id));
          Swal.fire("Deleted!", "Your marathon has been deleted.", "success");
        });
      }
    });
  };

  const updateMarathon = () => {
    axios.put(`http://localhost:5000/marathons/${currentMarathon._id}`, form).then(() => {
      setMarathons(marathons.map((m) => (m._id === currentMarathon._id ? { ...m, ...form } : m)));
      setIsModalOpen(false);
      Swal.fire("Updated!", "Marathon details have been updated.", "success");
    });
  };

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white text-center">
        My Marathons
      </h2>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full lg:min-w-[500px]  border-collapse">
          <thead>
            <tr className="border-b bg-gray-800 text-white">
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {marathons.map((marathon) => (
              <tr key={marathon._id} className="border-b bg-gray-700 text-white">
                <td className="px-4 py-2">{marathon.location}</td>
                <td className="px-4 py-2">{marathon.description}</td>
                <td className="px-4 py-2 flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
                  <button
                    onClick={() => handleUpdate(marathon)}
                    className="bg-blue-500 btn text-white px-4 py-2 rounded hover:bg-blue-600 w-full md:w-auto"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(marathon)}
                    className="bg-red-500 btn text-white px-4 py-2 rounded hover:bg-red-600 w-full md:w-auto"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
            <h3 className="text-xl font-semibold mb-4">Update Marathon</h3>
            <label className="block text-sm font-medium mb-2">Location</label>
            <input
              type="text"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="w-full px-4 py-2 border border-gray-500 bg-gray-900 rounded mb-4"
            />
            <label className="block text-sm font-medium mb-2">Description</label>
            <input
              type="text"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full px-4 py-2 border border-gray-500 bg-gray-900 rounded mb-4"
            />
            <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
              <button
                onClick={updateMarathon}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full md:w-auto"
              >
                Update
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 w-full md:w-auto"
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

export default MyMarathonsList;
