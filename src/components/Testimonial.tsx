import { useEffect, useState } from "react";
import image6 from "/src/assets/6.png";
const testimonials = [
  {
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: "Johny Vino",
  },
  {
    quote:
      "Another testimonial text. Great service and professionalism. Highly recommend to everyone!",
    name: "Sarah Lee",
  },
  {
    quote:
      "Fantastic experience, and very satisfied with the outcome. Best team ever!",
    name: "David Kim",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5 seconds

    // Cleanup when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[316px] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${image6})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75 "></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h2 className="text-[#EEFF06] text-3xl font-medium font-primary mb-4">
          TESTIMONIAL
        </h2>
        <p className="text-xl font-primary font-normal leading-relaxed mb-6">
          {testimonials[current].quote}
        </p>
        <h3 className="text-white font-semibold text-xl">
          {testimonials[current].name}
        </h3>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === current ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
