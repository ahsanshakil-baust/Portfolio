import React from "react";
import Hero from "./Hero";
import HomeAbout from "./HomeAbout";
import HomeSkills from "./HomeSkills";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeSkills />
    </>
  );
};

export default Home;
