import { useNavigate } from "react-router-dom";

const JoinNow = () => {
    const navigate = useNavigate(); 

    return (
        <div className="bg-[#0f172a] py-16 text-center rounded-lg shadow-lg mt-12">
            <h2 className="text-4xl font-bold text-white mb-4">Be a Part of the Marathon!</h2>
            <p className="text-lg text-gray-300 mb-6 px-6 md:px-20">
                Push your limits, meet fellow runners, and make unforgettable memories. Secure your spot today!
            </p>
            <button
                onClick={() => navigate("/register")} 
                className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300"
            >
                Join Now
            </button>
        </div>
    );
};

export default JoinNow;
