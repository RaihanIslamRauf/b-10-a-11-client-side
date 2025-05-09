import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2"; 
import useTitle from "../../hooks/useTitle";

const MarathonRegister = () => {
    useTitle();
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth(); 

    const [marathon, setMarathon] = useState(null);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        additionalInfo: "",
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMarathonData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/marathons/${id}`);
                if (!response.ok) throw new Error("Failed to fetch marathon data");
                const data = await response.json();
                setMarathon(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMarathonData();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user?.email) {
            Swal.fire("Error", "User email is missing. Please log in.", "error");
            return;
        }

        if (!formData.firstName || !formData.lastName || !formData.contactNumber) {
            Swal.fire("Warning", "Please fill all required fields.", "warning");
            return;
        }

        const registrationData = {
            marathonId: id,
            marathonTitle: marathon.title,
            startDate: marathon.marathonStartDate,
            email: user.email,
            ...formData,
        };

        try {
            const response = await fetch("http://localhost:5000/registrations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(registrationData),
            });

            if (!response.ok) throw new Error("Registration failed");

            // Update total registration count
            await fetch(`http://localhost:5000/marathons/${id}/updateRegistrationCount`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
            });

            Swal.fire({
                title: "Success!",
                text: "Registration Successful!",
                icon: "success",
                confirmButtonColor: "#d32f2f",
            }).then(() => navigate("/dashboard/my-apply-list"));
        } catch (err) {
            Swal.fire("Error", err.message, "error");
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!marathon) return <p>Marathon not found.</p>;

    const formattedStartDate = new Date(marathon.marathonStartDate).toDateString();

    return (
        <div className="max-w-lg mx-auto bg-base-100 shadow-md rounded-lg p-6 mt-10 mb-10">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Register for {marathon.title}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={user?.email || ""}
                        readOnly
                        className="input input-bordered bg-base-200"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Marathon Title</span>
                    </label>
                    <input
                        type="text"
                        name="marathonTitle"
                        value={marathon.title}
                        readOnly
                        className="input input-bordered bg-base-200"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Start Date</span>
                    </label>
                    <input
                        type="text"
                        name="startDate"
                        value={formattedStartDate}
                        readOnly
                        className="input input-bordered bg-base-200"
                    />
                </div>

                {/* User Input Fields */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">First Name</span>
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        required
                        onChange={handleChange}
                        className="input input-bordered"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Last Name</span>
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        required
                        onChange={handleChange}
                        className="input input-bordered"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Contact Number</span>
                    </label>
                    <input
                        type="tel"
                        name="contactNumber"
                        placeholder="Contact Number"
                        value={formData.contactNumber}
                        required
                        onChange={handleChange}
                        className="input input-bordered"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Additional Information</span>
                    </label>
                    <textarea
                        name="additionalInfo"
                        placeholder="Additional Information (Optional)"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        className="textarea textarea-bordered"
                    ></textarea>
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-red-600 text-white w-full">
                        Submit Registration
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MarathonRegister;
