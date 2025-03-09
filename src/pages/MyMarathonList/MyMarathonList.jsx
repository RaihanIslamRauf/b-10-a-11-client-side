import { useEffect, useState } from "react";
import axios from "axios";

const MyMarathonsList = () => {
  const [marathons, setMarathons] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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
    setCurrentMarathon(marathon);
    setIsDeleteModalOpen(true);
  };

  const updateMarathon = () => {
    axios.put(`http://localhost:5000/marathons/${currentMarathon._id}`, form).then(() => {
      setMarathons(marathons.map((m) => (m._id === currentMarathon._id ? { ...m, ...form } : m)));
      setIsModalOpen(false);
    });
  };

  const deleteMarathon = () => {
    axios.delete(`http://localhost:5000/marathons/${currentMarathon._id}`).then(() => {
      setMarathons(marathons.filter((m) => m._id !== currentMarathon._id));
      setIsDeleteModalOpen(false);
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">My Marathons</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left">Location</th>
            <th className="px-4 py-2 text-left">Description</th>
            <th className="px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {marathons.map((marathon) => (
            <tr key={marathon._id} className="border-b">
              <td className="px-4 py-2">{marathon.location}</td>
              <td className="px-4 py-2">{marathon.description}</td>
              <td className="px-4 py-2 flex justify-center space-x-4">
                <button
                  onClick={() => handleUpdate(marathon)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(marathon)}
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
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-base-200 p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Update Marathon</h3>
            <label className="block text-sm font-medium mb-2">Location</label>
            <input
              type="text"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
            />
            <label className="block text-sm font-medium mb-2">Description</label>
            <input
              type="text"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
            />
            <div className="flex justify-center space-x-4">
              <button
                onClick={updateMarathon}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
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
            <p className="mb-4 text-center">Are you sure you want to delete this marathon?</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={deleteMarathon}
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

export default MyMarathonsList;
