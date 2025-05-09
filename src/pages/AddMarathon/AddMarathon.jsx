import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useTitle from "../../hooks/useTitle";

const AddMarathon = () => {
  useTitle();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [startRegDate, setStartRegDate] = useState(null);
  const [endRegDate, setEndRegDate] = useState(null);
  const [marathonStartDate, setMarathonStartDate] = useState(null);

  const handleAddMarathon = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    const newMarathon = {
      ...initialData,
      startRegistrationDate: startRegDate,
      endRegistrationDate: endRegDate,
      marathonStartDate,
      createdAt: new Date(),
      totalRegistrationCount: 0,
      createdBy: user?.email,
    };

    try {
      const response = await fetch("http://localhost:5000/marathons", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMarathon),
      });

      const data = await response.json();
      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Marathon event has been added.",
          icon: "success",
          confirmButtonColor: "#d32f2f",
        }).then(() => navigate("/marathons"));
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonColor: "#d32f2f",
      });
    }
  };

  return (
    <div>
      <h2 className="text-3xl text-white font-semibold">Create a Marathon Event</h2>
      <form onSubmit={handleAddMarathon} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Marathon Title</span>
          </label>
          <input type="text" name="title" placeholder="Marathon Title" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Start Registration Date</span>
          </label>
          <DatePicker selected={startRegDate} onChange={(date) => setStartRegDate(date)} className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">End Registration Date</span>
          </label>
          <DatePicker selected={endRegDate} onChange={(date) => setEndRegDate(date)} className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Marathon Start Date</span>
          </label>
          <DatePicker selected={marathonStartDate} onChange={(date) => setMarathonStartDate(date)} className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input type="text" name="location" placeholder="Location" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Running Distance</span>
          </label>
          <select name="runningDistance" className="select select-bordered" required>
            <option disabled selected>Choose Distance</option>
            <option>25k</option>
            <option>10k</option>
            <option>3k</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea name="description" className="textarea textarea-bordered" placeholder="Description" required></textarea>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Marathon Image URL</span>
          </label>
          <input type="text" name="image" placeholder="Image URL" className="input input-bordered" required />
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-red-600 text-white">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddMarathon;
