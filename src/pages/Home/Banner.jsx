import { useState, useEffect } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";

const images = [pic1, pic2, pic3];
const captions = [
  { title: "Run Towards Glory", text: "Join the race and push your limits." },
  { title: "Unite & Run", text: "Experience the thrill of competition." },
  { title: "Cross the Finish Line", text: "Celebrate your achievement with us." },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative rounded-md py-8 w-full h-[400px] overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="min-w-full relative">
            <img src={img}   style={{ objectPosition: "50% 20%" }}  className="w-full h-[400px] object-cover" alt={`Slide ${index + 1}`} />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
              <h2 className="text-3xl font-bold">{captions[index].title}</h2>
              <p className="text-lg mt-2">{captions[index].text}</p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={prevSlide} className="absolute left-5 top-1/2 -translate-y-1/2 text-3xl text-white bg-black bg-opacity-40 p-2 rounded-full hover:bg-opacity-60 transition">
        <IoIosArrowDropleftCircle />
      </button>
      <button onClick={nextSlide} className="absolute right-5 top-1/2 -translate-y-1/2 text-3xl text-white bg-black bg-opacity-40 p-2 rounded-full hover:bg-opacity-60 transition">
        <IoIosArrowDroprightCircle />
      </button>


      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-gray-400"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
