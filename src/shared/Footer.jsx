import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1A2526] text-white p-10">
      <div className="px-4 md:px-8 footer lg:flex-row flex-col justify-between items-start gap-8"> {/* Added px-4 md:px-8 */}
        {/* Brand Section */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Runtrack Logo" className="w-[30px]" />
          <h1 className="text-[20px] text-red-500 font-bold italic">Runtrack</h1>
        </div>
        <p className="text-white max-w-sm ml-2">
          Runtrack is your ultimate platform for marathon management, providing seamless event registration, tracking, and results.
        </p>

        {/* Quick Links */}
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-3 text-red-500">Quick Links</h6>
          <ul className="flex flex-col gap-2">
            <li><a href="#about" className="hover:text-red-500">About Us</a></li>
            <li><a href="#events" className="hover:text-red-500">Upcoming Marathons</a></li>
            <li><a href="#faq" className="hover:text-red-500">FAQs</a></li>
            <li><a href="#privacy" className="hover:text-red-500">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-red-500">Terms of Service</a></li>
          </ul>
        </nav>

        {/* Social Media Section */}
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-3 text-red-500">Follow Us</h6>
          <div className="flex flex-row items-center justify-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <FaYoutube size={24} />
            </a>
          </div>
        </nav>

        {/* Contact Us Section */}
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-3 text-red-500">Contact Us</h6>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>+1 800 RUN-TRACK</span>
            </p>
            <p className="flex items-center gap-2">
              <IoMail />
              <span>support@runtrack.com</span>
            </p>
            <p>Address: 5678 Marathon Street, Runners CityRC 12345</p>
          </div>
        </nav>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-6 text-gray-400">
        <p className="lg:text-[14px] text-[13px]">
          Copyright © {new Date().getFullYear()} - All rights reserved by Runtrack.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
