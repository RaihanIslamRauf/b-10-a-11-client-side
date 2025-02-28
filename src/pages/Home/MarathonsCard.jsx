/* eslint-disable react/prop-types */
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MarathonsCard = ({ marathon }) => {
  
  const {
  _id,title,image,location,runningDistance,startRegistrationDate,endRegistrationDate
  } = marathon;

  return (
    <div className="card card-compact bg-base-100 shadow-xl p-4 overflow-hidden transition-transform transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-xl font-bold text-white mt-2">{title}</h2>
      <p className="flex items-center  gap-2 text-white">
        <FaMapMarkerAlt /> {location}
      </p>
      <p className="text-sm text-white">Distance: {runningDistance}</p>
      <p className="text-sm text-white">Registration: {new Date(startRegistrationDate).toLocaleDateString()} - {new Date(endRegistrationDate).toLocaleDateString()}</p>
      <div className="card-actions justify-end mt-4">
        <Link to={`/marathons/${_id}`}>
          <button className="btn bg-red-600 text-white">See Details</button>
        </Link>
      </div>
    </div>
  );
};

export default MarathonsCard;