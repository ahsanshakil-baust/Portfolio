"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

// Define the projects data
const projects = [
  {
    title: "RealEzy",
    image: "/projects/realezy.png",
    description:
      "A modern web application for real estate solutions. Developed core features and UI with React and TailwindCSS.",
    technologies: ["React", "TailwindCSS", "Node.js"],
    collaboration: "In collaboration with RealEzy Inc.",
    link: "https://realezy.com",
  },
  {
    title: "Parbatipur Govt College",
    image: "/projects/pgc.png",
    description:
      "Built a responsive online portal to improve user accessibility and engagement.",
    technologies: ["HTML", "CSS", "JavaScript"],
    collaboration: "Freelance Project",
    link: "https://example.com/project2",
  },
  {
    title: "OMPHD",
    image: "/projects/omphd.png",
    description:
      "Crafted a sleek portfolio website showcasing creative design and expertise.",
    technologies: ["Next.js", "GraphQL", "TailwindCSS"],
    collaboration: "In partnership with OMPHD Agency.",
    link: "https://example.com/project3",
  },
  {
    title: "Chiro Sobuj Group",
    image: "/projects/cs.png",
    description:
      "Developed an organizational website with a focus on simplicity and communication.",
    technologies: ["PHP", "Bootstrap", "MySQL"],
    collaboration: "Commissioned by Chiro Sobuj Group.",
    link: "https://example.com/project4",
  },
];

const HomeProjects: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          My Projects
        </h2>
        <div className="space-y-10">
          {projects.map((project, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.3}
              scale={1.05}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <motion.div
                className="flex flex-col md:flex-row"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                {/* Image Section */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full md:w-1/2 h-60 object-cover"
                />

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <p className="text-sm text-gray-500 mb-2">
                      <strong>Technologies:</strong>{" "}
                      {project.technologies.join(", ")}
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Collaboration:</strong> {project.collaboration}
                    </p>
                  </div>

                  {/* Call-to-Action Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md text-sm font-medium hover:bg-blue-600 transition-all duration-300"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
