const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Peter Parker",
      feedback: "Amazing event! Well organized and fun.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Marry Jane",
      feedback: "Loved the energy! Will definitely join next year.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Barry Allen",
      feedback: "Great experience, met so many runners!",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    {
      id: 4,
      name: "Diana Prince",
      feedback: "Empowering, Can’t wait for the next marathon.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <div className="mt-12 bg-gray-800 p-8 mb-12 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-white text-center mb-10">What Runners Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mb-4 border-2 border-red-600"
            />
            <p className="text-white italic">{testimonial.feedback}</p>
            <h3 className="text-lg font-bold text-red-500 mt-4">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
