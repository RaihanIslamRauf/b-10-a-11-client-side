/* eslint-disable react/prop-types */
import { FaMapMarkerAlt } from "react-icons/fa";

const UpcomingMarathonCard = ({ marathon }) => {
  const { title, image, location, runningDistance, startDate, description } = marathon;

  return (
    <div className="card bg-base-100 shadow-xl p-5 overflow-hidden transition-transform transform hover:scale-105 rounded-lg">
      
      {/* Marathon Image */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover object-center rounded-md"
        style={{ objectPosition: "50% 20%" }} 
      />
      
      {/* Marathon Details */}
      <div className="mt-3">
        <h2 className="text-xl font-bold text-gray-100 leading-tight">{title}</h2>
        <p className="flex items-center gap-2 text-gray-300">
          <FaMapMarkerAlt className="text-red-400" /> {location}
        </p>
        <p className="text-sm text-gray-400">Distance: {runningDistance}</p>
        <p className="text-sm text-gray-400">Start Date: {new Date(startDate).toLocaleDateString()}</p>
        <p className="text-sm text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default UpcomingMarathonCard;
