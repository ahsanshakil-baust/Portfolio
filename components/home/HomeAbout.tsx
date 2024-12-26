// components/About.tsx

import React from "react";

// Define content object for flexibility
const aboutContent = {
  journey: {
    title: "From Curious Beginnings to Purposeful Creation",
    paragraphs: [
      "It all started with a spark of curiosity. A friend of mine, immersed in the world of creativity, caught my attention. As I completed my BSc in Electrical Engineering, I found myself drawn not to circuits, but to the endless possibilities of digital creation. It was during the pandemic—an uncertain time when the world seemed to slow down—that my passion for software development truly ignited.",
      "While others spent their days in isolation, I dove into coding. Despite having no formal understanding of what a software engineer's schedule looked like, I was driven by an unyielding desire to create. I coded tirelessly, day and night, fueled by determination. My journey wasn’t easy, but with each line of code, I came closer to the world I had always dreamed of entering—the software industry.",
    ],
  },
  whatDrivesMe: {
    title: "What Fuels My Passion: The Heart of My Creativity",
    paragraphs: [
      "What drives me is not just the process of creating but the impact that my work has on others. I’m deeply passionate about building products that are both functional and beautiful, solutions that make people’s lives easier, more efficient, and enjoyable. I believe in crafting experiences that not only solve problems but also inspire a sense of wonder and delight.",
      "My approach is rooted in a belief that technology should serve a purpose greater than just its functionality. It should connect, empower, and inspire others. My goal is to design with empathy and innovate with purpose, always seeking to create work that resonates with people on a deeper level. Whether I’m solving complex technical challenges or designing with creativity in mind, I remain committed to building solutions that have a meaningful and lasting impact.",
    ],
  },
};

const About = () => {
  return (
    <section
      className="py-20 bg-gradient-to-r from-gray-50 via-gray-100 to-white font-poppins"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-start md:text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
            My Journey & What Drives Me
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover the passion and purpose that fuel my creative journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Section - My Journey */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 font-montserrat">
              {aboutContent.journey.title}
            </h3>
            {aboutContent.journey.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right Section - What Drives Me */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 font-montserrat">
              {aboutContent.whatDrivesMe.title}
            </h3>
            {aboutContent.whatDrivesMe.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
