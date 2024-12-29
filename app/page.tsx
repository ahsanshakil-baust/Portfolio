import Home from "@/components/home/Home";
import HomeAbout from "@/components/home/HomeAbout";
import HomeProjects from "@/components/home/HomeProjects";
import HomeSkills from "@/components/home/HomeSkills";
import Navbar from "@/components/navbar/Navbar";

export default function Index() {
  return (
    <>
      <Navbar />
      <Home />
      <HomeAbout />
      <HomeSkills />
      {/* <HomeProjects /> */}
    </>
  );
}
