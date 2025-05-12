import CountUp from "react-countup";

const StatsCount = () => {
  return (
    <section className="mt-6 bg-gray-800 text-white py-12 px-4 md:px-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">Runtrack Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Participants */}
        <div className="bg-[#2c3b3c] rounded-2xl p-6 shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-[#334646]">
          <h3 className="text-2xl font-semibold mb-2">Participants</h3>
          <p className="text-4xl font-bold text-red-600">
            <CountUp end={12500} duration={3} separator="," />
          </p>
        </div>

        {/* Kilometers Run */}
        <div className="bg-[#2c3b3c] rounded-2xl p-6 shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-[#334646]">
          <h3 className="text-2xl font-semibold mb-2">Total Km Run</h3>
          <p className="text-4xl font-bold text-red-600">
            <CountUp end={83200} duration={3} separator="," />
          </p>
        </div>

        {/* Marathons Hosted */}
        <div className="bg-[#2c3b3c] rounded-2xl p-6 shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-[#334646]">
          <h3 className="text-2xl font-semibold mb-2">Marathons Hosted</h3>
          <p className="text-4xl font-bold text-red-600">
            <CountUp end={89} duration={3} />
          </p>
        </div>

        {/* Active Cities */}
        <div className="bg-[#2c3b3c] rounded-2xl p-6 shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-[#334646]">
          <h3 className="text-2xl font-semibold mb-2">Active Cities</h3>
          <p className="text-4xl font-bold text-red-600">
            <CountUp end={37} duration={3} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsCount;
