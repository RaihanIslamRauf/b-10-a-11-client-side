import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import marathon1 from "../../assets/marathon1.jpg";
import marathon2 from "../../assets/marathon2.jpg";

const JoinNow = () => {
    const navigate = useNavigate();

    return (
        <div className="hero bg-[#0f172a] min-h-96 px-4 md:px-8">
            <div className="hero-content flex-col lg:flex-row-reverse gap-16 lg:gap-24">
                
                {/* Animated Images */}
                <div className="flex-1 flex flex-col space-y-6">
                    <motion.img
                        src={marathon1}
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-red-500 shadow-2xl"
                    />
                    <motion.img
                        src={marathon2}
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 10, delay: 5, repeat: Infinity }}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-red-500 shadow-2xl"
                    />
                </div>

                {/* Text Section */}
                <div className="flex-1 space-y-4">
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{
                            duration: 2,
                            delay: 1,
                            ease: "easeOut",
                            repeat: Infinity,
                        }}
                        className="text-5xl font-bold text-white"
                    >
                        Be a Part of the{" "}
                        <motion.span 
                            animate={{ color: ["#ecff33", "#33ffe3", "#ff6133"] }} 
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            Marathon!
                        </motion.span>
                    </motion.h1>
                    
                    <p className="py-6 text-gray-300">
                        Push your limits, meet fellow runners, and make unforgettable memories. Secure your spot today!
                    </p>

                    <button 
                        onClick={() => navigate("/register")} 
                        className="btn bg-red-600 text-white"
                    >
                        Join Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JoinNow;
