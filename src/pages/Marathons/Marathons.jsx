import { useEffect, useState } from "react";
import MarathonsCard from "../Home/MarathonsCard";
import useTitle from "../../hooks/useTitle";
import { FaSearch } from 'react-icons/fa'; 

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

  const sortedMarathons = [...marathons].sort((a, b) => {
    if (sortBy === "dateAsc") return new Date(a.marathonStartDate) - new Date(b.marathonStartDate);
    if (sortBy === "dateDesc") return new Date(b.marathonStartDate) - new Date(a.marathonStartDate);
    if (sortBy === "registrations") return b.totalRegistrationCount - a.totalRegistrationCount;
    if (sortBy === "name") return a.title.localeCompare(b.title);
    return 0;
  });

  const filteredMarathons = sortedMarathons.filter((marathon) =>
    marathon.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto mt-4 mb-4 py-6 px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-8">All Marathons</h1>

      {/* Search and Sort Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        {/* Search Input */}
        <div className="relative w-full sm:w-1/2 md:w-1/3">
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

        {/* Sort Dropdown */}
        <div className="w-full sm:w-auto">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-3 w-full sm:w-auto rounded-md text-white"
            style={{ backgroundColor: "#333" }}
          >
            <option value="">Sort By</option>
            <option value="dateAsc">📅 Date (Soonest First)</option>
            <option value="dateDesc">📅 Date (Latest First)</option>
            <option value="registrations">👥 Most Popular</option>
            <option value="name">🔤 Name (A-Z)</option>
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
