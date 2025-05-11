import { useEffect, useState } from "react";
import MarathonsCard from "../Home/MarathonsCard";
import useTitle from "../../hooks/useTitle";
import { FaSearch } from 'react-icons/fa'; 
import { BsSortAlphaUp, BsFillCalendarDateFill, BsFillPeopleFill } from 'react-icons/bs'; 

const Marathons = () => {
  useTitle();
  const [marathons, setMarathons] = useState([]);
  const [sortBy, setSortBy] = useState(""); 
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    fetch("https://b-10-a-11-server-side.vercel.app/marathons")
      .then((res) => res.json())
      .then((data) => setMarathons(data))
      .catch((error) => console.error("Error fetching marathons:", error));
  }, []);

  // Correct sorting using actual field names from MongoDB
  const sortedMarathons = [...marathons].sort((a, b) => {
    if (sortBy === "dateAsc") return new Date(a.marathonStartDate) - new Date(b.marathonStartDate);
    if (sortBy === "dateDesc") return new Date(b.marathonStartDate) - new Date(a.marathonStartDate);
    if (sortBy === "registrations") return b.totalRegistrationCount - a.totalRegistrationCount;
    if (sortBy === "name") return a.title.localeCompare(b.title);
    return 0;
  });

  // Search functionality: filter marathons based on the search term
  const filteredMarathons = sortedMarathons.filter((marathon) =>
    marathon.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto py-6 px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-8">All Marathons</h1>

      {/* Search and Sort Section */}
      <div className="flex justify-between items-center mb-6">
        {/* Search Input */}
        <div className="relative w-1/2 md:w-1/3 lg:w-1/4">
          <input
            type="text"
            placeholder="Search by Marathon Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-3 pl-10 w-full rounded-md text-white focus:outline-none"
            style={{ backgroundColor: "#333" }} 
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 px-2 rounded-md text-white flex items-center"
            style={{ backgroundColor: "#333" }} 
          >
            <option value="">Sort By</option>
            <option value="dateAsc">
              <BsFillCalendarDateFill className="mr-2" /> Date (Soonest First)
            </option>
            <option value="dateDesc">
              <BsFillCalendarDateFill className="mr-2" /> Date (Latest First)
            </option>
            <option value="registrations">
              <BsFillPeopleFill className="mr-2" /> Most Popular
            </option>
            <option value="name">
              <BsSortAlphaUp className="mr-2" /> Name (A-Z)
            </option>
          </select>
        </div>
      </div>

      {/* Display the filtered and sorted marathons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredMarathons.map((marathon) => (
          <MarathonsCard key={marathon._id} marathon={marathon} />
        ))}
      </div>
    </div>
  );
};

export default Marathons;
