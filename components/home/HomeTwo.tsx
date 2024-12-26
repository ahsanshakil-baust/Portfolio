"use client";
import { useEffect, useState } from "react";
import ThreeScene from "../animation/ThreeScene";
import Hero from "./Hero";

export default function HomeTwo() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("animate-on-scroll");
      const rect = element?.getBoundingClientRect();
      if (rect && rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial render
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <ThreeScene />
      <Hero />
    </div>
  );
}
