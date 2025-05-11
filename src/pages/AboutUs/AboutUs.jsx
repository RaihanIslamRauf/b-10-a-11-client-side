

const AboutUs = () => {
     return (
    <div className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-red-500 mb-6">About Us</h1>
        <p className="text-lg text-center text-gray-300 mb-8">
          Welcome to <span className="text-white font-semibold">RunTrack</span> — your gateway to the most exciting marathon events around the world.
        </p>

        <div className="space-y-6">
          <p className="text-gray-300">
            At RunTrack, we are passionate about running and the global community it builds. Our mission is to connect runners from all walks of life with world-class marathon experiences — from bustling city races to scenic cultural routes.
          </p>

          <p className="text-gray-300">
            Whether you are a first-time runner or a seasoned marathoner, our platform helps you discover upcoming races, learn from community testimonials, and track your progress.
          </p>

          <p className="text-gray-300">
            We believe that every race is more than just a distance — it’s a journey of personal growth, discipline, and achievement. Join us and become part of a movement that runs on passion, purpose, and community.
          </p>

          <p className="text-gray-300">
            Ready to lace up? Explore upcoming events, hear what other runners have to say, and make your mark on the world — one mile at a time.
          </p>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Let’s Run the World Together.</h2>
          <p className="text-gray-400">– The RunTrack Team</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;