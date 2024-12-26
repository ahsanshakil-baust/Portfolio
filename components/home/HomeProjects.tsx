/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

// Define the projects data object
const projects = [
  {
    title: "Project 1",
    image: "/path/to/project1.jpg",
  },
  {
    title: "Project 2",
    image: "/path/to/project2.jpg",
  },
  {
    title: "Project 3",
    image: "/path/to/project3.jpg",
  },
];

const HomeProjects: React.FC = () => {
  return (
    <section id="portfolio" className="py-20">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Featured Work
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
              <h3 className="text-xl text-white">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeProjects;
