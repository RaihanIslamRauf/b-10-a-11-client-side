/* eslint-disable react/prop-types */
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MarathonsCard = ({ marathon }) => {
  
  const {
    _id, title, image, location, runningDistance, startRegistrationDate, endRegistrationDate
  } = marathon;

  return (
    <div className="card card-compact bg-base-100 shadow-xl p-5 overflow-hidden transition-transform transform hover:scale-105 rounded-lg">
      
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover object-center rounded-md"
        style={{ objectPosition: "50% 20%" }} 
      />
      
      <div className="mt-3">
        <h2 className="text-xl font-bold text-gray-100 leading-tight">{title}</h2>
        <p className="flex items-center gap-2 text-gray-300">
          <FaMapMarkerAlt className="text-red-400" /> {location}
        </p>
        <p className="text-sm text-gray-400">Distance: {runningDistance}</p>
        <p className="text-sm text-gray-400">
          Registration: {new Date(startRegistrationDate).toLocaleDateString()} - {new Date(endRegistrationDate).toLocaleDateString()}
        </p>
        
        <div className="border-b border-gray-700 my-3"></div>
        
        <div className="card-actions justify-end">
          <Link to={`/marathons/${_id}`}>
            <button className="btn bg-red-600 text-white hover:bg-red-700 shadow-md transition-all rounded-md px-2 py-1 ">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MarathonsCard;
