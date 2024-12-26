/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="absolute text-white flex flex-col justify-center items-center overflow-hidden w-full h-full top-0 left-0">
      {/* Animated Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative rounded-full overflow-hidden shadow-xl w-80 h-80 border-4 border-white z-10"
      >
        <img
          src="/profile.jpg"
          alt="Shakil's Photo"
          className="rounded-full object-cover"
        />
      </motion.div>

      {/* Creative Text */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="text-center mt-8 z-10"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight font-montserrat">
          {`Hi, I'm`} <span className="text-white">Ahsan Shakil</span>
        </h1>
        <p className="mt-4 text-base md:text-xl font-light text-gray-300 max-w-lg mx-auto font-poppins">
          I build innovative, high-performance web solutions with{" "}
          <span className="text-white">passion</span> and a relentless drive for
          excellence.
        </p>
      </motion.div>

      {/* Call-to-Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        className="flex gap-6 mt-10 z-10"
      >
        <a
          href="#projects"
          className="px-8 py-3 text-lg font-semibold border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-8 py-3 text-lg font-semibold bg-white text-black rounded-full hover:bg-gray-800 hover:text-white border border-white transition-all duration-300"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 text-gray-400 text-sm flex flex-col items-center z-10"
      >
        <span>Scroll Down</span>
        <div className="mt-2 w-6 h-6 border-2 border-gray-400 rounded-full animate-bounce"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
