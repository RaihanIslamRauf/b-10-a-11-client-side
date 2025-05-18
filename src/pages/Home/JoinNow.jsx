import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import marathon1 from "../../assets/marathon1.jpg";
import marathon2 from "../../assets/marathon2.jpg";

const JoinNow = () => {
  const navigate = useNavigate();

  return (
    <div className="hero bg-[#0f172a] min-h-[24rem] px-4 py-12 md:px-8">
      <div className="hero-content flex flex-col lg:flex-row-reverse gap-12 lg:gap-24 items-center lg:items-start">
        {/* Animated Images */}
        <div className="flex-1 flex flex-col space-y-6 items-center lg:items-start">
          <motion.img
            src={marathon1}
            loading="lazy"
            animate={{
              y: window.innerWidth < 640 ? [20, 40, 20] : [50, 100, 50],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="w-36 sm:w-48 md:w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-red-500 shadow-2xl"
            alt="Marathon 1"
          />
          <motion.img
            src={marathon2}
            loading="lazy"
            animate={{
              x: window.innerWidth < 640 ? [30, 50, 30] : [100, 150, 100],
            }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            className="w-36 sm:w-48 md:w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-red-500 shadow-2xl"
            alt="Marathon 2"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 space-y-6 text-center lg:text-left px-4 lg:px-0">
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: "easeOut",
              repeat: Infinity,
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            Be a Part of the{" "}
            <motion.span
              animate={{ color: ["#ecff33", "#33ffe3", "#ff6133"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Marathon!
            </motion.span>
          </motion.h1>

          <p className="text-gray-300 max-w-md mx-auto lg:mx-0">
            Push your limits, meet fellow runners, and make unforgettable
            memories. Secure your spot today!
          </p>

          <button
            onClick={() => navigate("/register")}
            className="btn bg-red-600 text-white px-6 py-3 text-sm sm:text-base"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinNow;
