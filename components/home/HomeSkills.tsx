/* eslint-disable @typescript-eslint/no-explicit-any */
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
          icon: "/icons/react.svg",
          color: "#61DAFB",
          proficiency: 90,
        },
        {
          name: "CSS",
          icon: "/icons/css.svg",
          color: "#2965F1",
          proficiency: 85,
        },
        {
          name: "HTML",
          icon: "/icons/html.svg",
          color: "#E34F26",
          proficiency: 90,
        },
        {
          name: "Next.js",
          icon: "/icons/nextjs.svg",
          color: "#000000",
          proficiency: 85,
        },
        {
          name: "Tailwind",
          icon: "/icons/tailwind.svg",
          color: "#19BBB9",
          proficiency: 85,
        },
        {
          name: "BootStrap",
          icon: "/icons/bootstrap.svg",
          color: "#563D7C",
          proficiency: 85,
        },
        {
          name: "Redux & RTK",
          icon: "/icons/redux.svg",
          color: "#764ABC",
          proficiency: 85,
        },
      ],
    },
    {
      name: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: "/icons/node.svg",
          color: "#8CC84B",
          proficiency: 80,
        },
        {
          name: "Express",
          icon: "/icons/express.svg",
          color: "#000000",
          proficiency: 75,
        },
      ],
    },
    {
      name: "Database",
      skills: [
        {
          name: "MongoDB",
          icon: "/icons/mongodb.svg",
          color: "#47A248",
          proficiency: 80,
        },
        {
          name: "MySQL",
          icon: "/icons/mysql.svg",
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
          icon: "/icons/js.svg",
          color: "#F7DF1E",
          proficiency: 90,
        },
        {
          name: "TypeScript",
          icon: "/icons/typescript.svg",
          color: "#3178C6",
          proficiency: 85,
        },
        {
          name: "C#",
          icon: "/icons/csharp.svg",
          color: "#68217A",
          proficiency: 85,
        },
      ],
    },
    {
      name: "Others",
      skills: [
        {
          name: "Git & Github",
          icon: "/icons/git.svg",
          color: "#F1502F",
          proficiency: 80,
        },
        {
          name: "Jira",
          icon: "/icons/jira.svg",
          color: "#2584FF",
          proficiency: 70,
        },
        {
          name: "Notion",
          icon: "/icons/notion.svg",
          color: "#000000",
          proficiency: 65,
        },
        {
          name: "Adobe XD",
          icon: "/icons/xd.svg",
          color: "#470238",
          proficiency: 65,
        },
        {
          name: "Figma",
          icon: "/icons/figma.svg",
          color: "#FF7262",
          proficiency: 65,
        },
      ],
    },
  ],
};

const HomeSkills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const CircleProgressBar = ({ percentage, color, icon, name }: any) => {
    const radius = 50;
    const stroke = 8;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44">
        {/* Circular Progress Bar */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#e6e6e6"
            strokeWidth={stroke}
            fill="none"
          />
          <motion.circle
            cx="60"
            cy="60"
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

        {/* Content inside the circle */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <img
            src={icon}
            alt={name}
            className="w-10 h-10 mb-1 md:w-12 md:h-12"
          />
          <p className="text-xs md:text-sm font-semibold text-black mb-1">
            {name}
          </p>
          <p className="text-xs text-gray-600">{percentage}%</p>
        </div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-r from-gray-50 via-gray-100 to-white font-poppins md:text-center"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6"
        >
          {skillsContent.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm md:text-lg text-gray-600 mb-12"
        >
          {skillsContent.description}
        </motion.p>

        {/* Tabs Section */}
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
          <Tabs
            value={activeTab}
            onChange={(e, newValue) => setActiveTab(newValue)}
            aria-label="Home Tabs"
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

        {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"> */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {skillsContent.tabs[activeTab].skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group flex items-center justify-center rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
            >
              <CircleProgressBar
                percentage={skill.proficiency}
                color={skill.color}
                icon={skill.icon}
                name={skill.name}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSkills;
