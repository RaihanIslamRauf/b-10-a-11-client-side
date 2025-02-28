import UpcomingMarathonCard from "./UpcomingMarathonCard";

const UpcomingMarathons = () => {
  const marathons = [
    {
      _id: "1",
      title: "New York City Marathon",
      image: "https://i.ibb.co.com/pjZ9HkwG/NewYork.jpg",
      location: "New York, USA",
      runningDistance: "42.2 km",
      startDate: "2025-05-15",
      description: "Join thousands of runners in the heart of New York City!",
    },
    {
      _id: "2",
      title: "London Marathon",
      image: "https://i.ibb.co.com/DPdVNxpZ/London.jpg",
      location: "London, UK",
      runningDistance: "42.2 km",
      startDate: "2025-04-21",
      description: "Run past iconic landmarks in one of the world's greatest cities!",
    },
    {
      _id: "3",
      title: "Tokyo Marathon",
      image: "https://i.ibb.co.com/bMVxSP6n/Tokyo.jpg",
      location: "Tokyo, Japan",
      runningDistance: "42.2 km",
      startDate: "2025-03-03",
      description: "Experience the energy of Tokyo with runners from around the world!",
    },
    {
      _id: "4",
      title: "Berlin Marathon",
      image: "https://i.ibb.co.com/FLhhB76m/Berlin.jpg",
      location: "Berlin, Germany",
      runningDistance: "42.2 km",
      startDate: "2025-09-28",
      description: "A world-famous race with a record-breaking fast course!",
    },
    {
      _id: "5",
      title: "Boston Marathon",
      image: "https://i.ibb.co.com/v6TP0bRP/Boston.jpg",
      location: "Boston, USA",
      runningDistance: "42.2 km",
      startDate: "2025-04-14",
      description: "One of the oldest and most prestigious marathons in the world!",
    },
    {
      _id: "6",
      title: "Chicago Marathon",
      image: "https://i.ibb.co.com/S7Q58xmF/Chicago.jpg",
      location: "Chicago, USA",
      runningDistance: "42.2 km",
      startDate: "2025-10-12",
      description: "A flat and fast course through the Windy City!",
    },
  ];

  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-3xl text-center font-bold text-white mb-6">Upcoming Marathons</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {marathons.map((marathon) => (
          <UpcomingMarathonCard key={marathon._id} marathon={marathon} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingMarathons;
