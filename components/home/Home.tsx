import React from "react";
import Hero from "./Hero";
import HomeAbout from "./HomeAbout";
import HomeSkills from "./HomeSkills";
import HomeProjects from "./HomeProjects";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeSkills />
      <HomeProjects />
    </>
  );
};

export default Home;
