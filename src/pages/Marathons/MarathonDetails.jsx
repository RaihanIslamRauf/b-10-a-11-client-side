import { useEffect, useState} from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";


const MarathonDetails = () => {
    useTitle();
    const { id } = useParams();
    const navigate = useNavigate();

    const [marathon, setMarathon] = useState(null);
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

    useEffect(() => {
        const fetchMarathonDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/marathons/${id}`);
                const data = await response.json();
                setMarathon(data);
    
                const currentDate = new Date();
                const startDate = new Date(data.startRegistrationDate);
                const endDate = new Date(data.endRegistrationDate);
                setIsRegistrationOpen(currentDate >= startDate && currentDate <= endDate);
            } catch (error) {
                console.error("Error fetching marathon details:", error);
            }
        };
    
        fetchMarathonDetails();
    }, [id]);
    

    if (!marathon) return <p>Loading...</p>;

    return (
        <div className="max-w-4xl mx-auto bg-base-100 shadow-lg rounded-lg py-6 px-4 mt-10 mb-10">
            <img src={marathon.image} alt={marathon.title} className="w-full h-60 object-cover rounded-md"  style={{ objectPosition: "50% 20%" }}/>
            <h1 className="text-3xl text-gray-100 font-bold mt-4">{marathon.title}</h1>
            <p className="flex items-center gap-2 text-gray-300"> <FaMapMarkerAlt className="text-red-400" />  {marathon.location}</p>
            <p className="text-gray-400">
                Registration: {marathon.startRegistrationDate} - {marathon.endRegistrationDate}
            </p>
            <p className="text-lg font-semibold">Total Registrations: {marathon.totalRegistrations || 0}</p>

            <button
                onClick={() => navigate(`/register/${marathon._id}`)}
                disabled={!isRegistrationOpen}
                className={`btn mt-4 px-6 py-2 rounded-md text-white ${
                    isRegistrationOpen ? "bg-red-600 hover:bg-red-700" : "bg-gray-400 cursor-not-allowed"
                }`}
            >
                {isRegistrationOpen ? "Register Now" : "Registration Closed"}
            </button>
        </div>
    );
};

export default MarathonDetails;
