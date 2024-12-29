import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="text-white min-h-screen absolute max-w-[1200px] top-0 left-0 w-full h-full flex justify-center items-center flex-col absolute-center px-5">
      {/* Hero Section */}
      <div className="w-full flex font-parkinsans gap-2 lg:gap-8 justify-center lg:justify-between items-center lg:flex-row flex-col-reverse">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left mt-10 lg:mt-0"
        >
          <span className="text-base">Software Developer</span>
          <h2 className="text-3xl sm:text-4xl md:text-7xl/[90px] font-normal mb-5">
            Hello I&apos;m <br />{" "}
            <span className="font-montserrat font-bold">Ahsan Shakil</span>
          </h2>
          <p className="text-gray-400 mt-2 sm:mt-4 max-w-lg">
            I excel at crafting elegant digital experiences and am proficient in
            various programming languages and technologies.
          </p>
          <div className="flex flex-wrap items-center space-x-4 mt-6 justify-center lg:justify-start">
            <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
              Download CV
            </button>
            <div className="flex space-x-3 text-gray-400 mt-3 sm:mt-0">
              <a href="#" className="hover:text-white">
                GitHub
              </a>
              <a href="#" className="hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white">
                YouTube
              </a>
            </div>
          </div>
        </motion.div>

        <div className="relative mt-[300px] sm:mt-10 lg:mt-10 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] p-2">
          <div className="absolute inset-0 w-[160%] h-[160%] rounded-full animate-rotate">
            <Image
              src="/circle/circle2.png"
              alt="circle"
              layout="fill"
              className="rounded-full w-full h-full z-10"
            />
          </div>
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            layout="fill"
            className="rounded-full"
          />
        </div>
      </div>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center lg:self-start font-montserrat">
        <div className="flex justify-center items-center gap-2">
          <h3 className="text-4xl lg:text-5xl font-bold text-[#fff]">10</h3>
          <p className="text-gray-400 text-sm text-left">
            Years of <br /> experience
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <h3 className="text-4xl lg:text-5xl font-bold text-[#fff]">22</h3>
          <p className="text-gray-400 text-sm text-left">
            Projects <br /> completed
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <h3 className="text-4xl lg:text-5xl font-bold text-[#fff]">7</h3>
          <p className="text-gray-400 text-sm text-left">
            Technologies <br /> mastered
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <h3 className="text-4xl lg:text-5xl font-bold text-[#fff]">427</h3>
          <p className="text-gray-400 text-sm text-left">
            Code <br /> commits
          </p>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="text-gray-400 text-sm flex flex-col items-center z-10 mt-10 lg:mt-0 lg:absolute lg:bottom-10"
      >
        <span>Scroll Down</span>
        <div className="mt-2 w-6 h-6 border-2 border-gray-400 rounded-full animate-bounce"></div>
      </motion.div>
    </div>
  );
}
