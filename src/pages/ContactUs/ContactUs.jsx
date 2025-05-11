import Swal from "sweetalert2";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Optionally validate or collect form data here

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thanks for contacting us. We'll get back to you soon.",
      confirmButtonColor: "#dc2626", // Tailwind red-600
    });

    e.target.reset(); // reset the form after submission
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Contact Us</h2>

      <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg shadow-md">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-white mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Your message..."
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
