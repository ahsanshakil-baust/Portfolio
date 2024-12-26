/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { motion } from "framer-motion";

// Define skills content with icon colors and proficiency
const skillsContent = {
  title: "Technologies & Skills",
  description:
    "These are the tools and technologies that I use to build modern, scalable web applications.",
  tabs: [
    {
      name: "Frontend",
      skills: [
        {
          name: "React",
          icon: "/icons/react.png",
          color: "#61DAFB",
          proficiency: 90,
        },
        {
          name: "CSS",
          icon: "/icons/css.png",
          color: "#2965F1",
          proficiency: 85,
        },
        {
          name: "HTML",
          icon: "/icons/html.png",
          color: "#E34F26",
          proficiency: 90,
        },
        {
          name: "Next.js",
          icon: "/icons/nextjs.png",
          color: "#000000",
          proficiency: 85,
        },
      ],
    },
    {
      name: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: "/icons/nodejs.png",
          color: "#8CC84B",
          proficiency: 80,
        },
        {
          name: "Express",
          icon: "/icons/express.png",
          color: "#000000",
          proficiency: 75,
        },
        {
          name: "Python",
          icon: "/icons/python.png",
          color: "#306998",
          proficiency: 70,
        },
      ],
    },
    {
      name: "Database",
      skills: [
        {
          name: "MongoDB",
          icon: "/icons/mongodb.png",
          color: "#47A248",
          proficiency: 80,
        },
        {
          name: "PostgreSQL",
          icon: "/icons/postgresql.png",
          color: "#336791",
          proficiency: 75,
        },
      ],
    },
    {
      name: "Programming Languages",
      skills: [
        {
          name: "JavaScript",
          icon: "/icons/js.png",
          color: "#F7DF1E",
          proficiency: 90,
        },
        {
          name: "TypeScript",
          icon: "/icons/ts.png",
          color: "#3178C6",
          proficiency: 85,
        },
      ],
    },
    {
      name: "Others",
      skills: [
        {
          name: "Git",
          icon: "/icons/git.png",
          color: "#F1502F",
          proficiency: 80,
        },
        {
          name: "Docker",
          icon: "/icons/docker.png",
          color: "#2496ED",
          proficiency: 70,
        },
        {
          name: "GraphQL",
          icon: "/icons/graphql.png",
          color: "#E10098",
          proficiency: 65,
        },
      ],
    },
  ],
};

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Circular Progress Bar Component
  const CircleProgressBar = ({
    percentage,
    color,
  }: {
    percentage: number;
    color: string;
  }) => {
    const radius = 40;
    const stroke = 8;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <svg
        width="100"
        height="100"
        className="w-24 h-24 mb-4"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="gray"
          strokeWidth={stroke}
          fill="none"
        />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          stroke={color}
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        />
      </svg>
    );
  };

  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-r from-gray-50 via-gray-100 to-white text-center"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-4xl font-extrabold text-black mb-6"
        >
          {skillsContent.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg text-gray-700 mb-12"
        >
          {skillsContent.description}
        </motion.p>

        {/* Tabs Section */}
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
          <Tabs
            value={activeTab}
            onChange={(e, newValue) => setActiveTab(newValue)}
            aria-label="Skills Tabs"
            centered
            variant="scrollable"
            allowScrollButtonsMobile
          >
            {skillsContent.tabs.map((tab, index) => (
              <Tab
                key={index}
                label={tab.name}
                sx={{
                  textTransform: "none",
                  fontWeight: activeTab === index ? "bold" : "normal",
                  color:
                    activeTab === index ? "primary.main" : "text.secondary",
                  "&.Mui-selected": { color: "primary.main" },
                }}
              />
            ))}
          </Tabs>
        </Box>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {skillsContent.tabs[activeTab].skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-4 group-hover:opacity-90 transition-all"
              />
              <h3 className="text-xl font-semibold text-black mb-4 group-hover:text-indigo-600 transition-all">
                {skill.name}
              </h3>

              {/* Circular Progress Bar with dynamic color */}
              <CircleProgressBar
                percentage={skill.proficiency}
                color={skill.color}
              />

              <p className="text-sm text-gray-600">
                {skill.proficiency}% Proficiency
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
