import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-scree h-screen lg:relative flex items-center bg-black justify-center overflow-hidden">
      <div className="absolute w-full lg:h-full bg-gradient-to-b from-black to-transparent opacity-60"></div>
      <div
        className="container mx-auto absolute top-1/6 z-10 text-white text-center"
        data-aos="fade-up"
      >
        <div className="flex flex-wrap -mx-4">
          <div className="w-full">
            <div className="mx-auto mb-[60px] max-w-[850px]">
              <span
                className="text-primary mb-2 lg:mb-4 block text-lg lg:text-2xl font-semibold tracking-wide uppercase"
                data-aos="fade-left"
              >
                🌟 Our Portfolio
              </span>
              <h2
                className="text-white mb-5 leading-[1.208] font-extrabold font-Bebas-neue text-6xl px-5 lg:px-0 lg:text-7xl transform transition-transform duration-700 ease-out hover:scale-110"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                Mradul Kumar Katiyar
              </h2>

              <p
                className="text-gray-300 px-12 lg:px-0 lg:text-2xl font-Roboto"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                ✨ Explore a world of creativity, innovation, and expertise! 🚀
                Each project reflects passion and cutting-edge ideas 🌐🎨. From
                bold solutions 💡 to unique designs 🎥, we aim to inspire and
                ignite imaginations 🔥.Let’s shape a brighter, innovative
                tomorrow together.🌟 Dive in and discover the magic! ✨
              </p>
            </div>
            <div
              className="flex justify-center gap-5"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <a
                className="px-6 py-3 border-2 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-80 transition-all"
                href="#about"
              >
                Explore Portfolio
              </a>
              <a
                className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all"
                href="#contact"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-l from-green-500 to-teal-300 blur-3xl opacity-50 animate-pulse"></div>
    </div>
  );
};

export default Hero;
