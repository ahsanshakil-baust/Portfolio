/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";

const Hero = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sceneRef = useRef<HTMLDivElement | null>(null); // Ref for the container of the Three.js scene

  const icons = [
    { src: "/icons/html.png", alt: "HTML" },
    { src: "/icons/css.png", alt: "CSS" },
    { src: "/icons/js.png", alt: "JavaScript" },
    { src: "/icons/nodejs.png", alt: "Node.js" },
    { src: "/icons/database.png", alt: "MongoDB" },
    { src: "/icons/mysql.png", alt: "MySQL" },
    { src: "/icons/php.png", alt: "PHP" },
    { src: "/icons/cpp.png", alt: "C++" },
    { src: "/icons/java.png", alt: "Java" },
    { src: "/icons/react.png", alt: "React" },
  ];

  useEffect(() => {
    if (!sceneRef.current) return;

    // Set up the basic Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    const textureLoader = new TextureLoader();
    const iconsMeshes: THREE.Sprite[] = [];
    const light = new THREE.AmbientLight(0x404040, 1.5); // Soft ambient light
    scene.add(light);

    // Create 3D objects (icons) for each icon
    icons.forEach((icon) => {
      const texture = textureLoader.load(icon.src);
      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.1,
        blending: 5,
      });
      const iconMesh = new THREE.Sprite(material);
      iconMesh.scale.set(1.5, 1.5, 1.5); // Icon scale
      iconMesh.position.set(
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * 10 - 5
      ); // Random position within the view
      scene.add(iconMesh);
      iconsMeshes.push(iconMesh);
    });

    // Adjust the camera position
    camera.position.z = 7;

    // Animation loop to render the scene and move the icons based on mouse position
    const animate = () => {
      requestAnimationFrame(animate);

      // Create parallax effects based on mouse movement
      const speed = 0.000005; // Adjust speed for parallax movement
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const mouseOffsetX = (mousePosition.x - centerX) * speed;
      const mouseOffsetY = (mousePosition.y - centerY) * speed;

      iconsMeshes.forEach((iconMesh, index) => {
        iconMesh.position.x += mouseOffsetX * (index + 1) * 0.1;
        iconMesh.position.y += mouseOffsetY * (index + 1) * 0.1;

        // Reset position if the icon moves out of view
        if (Math.abs(iconMesh.position.x) > 10)
          iconMesh.position.x = Math.random() * 10 - 5;
        if (Math.abs(iconMesh.position.y) > 10)
          iconMesh.position.y = Math.random() * 10 - 5;
        if (Math.abs(iconMesh.position.z) > 10)
          iconMesh.position.z = Math.random() * 10 - 5;
      });

      // Camera movement for a more dynamic experience
      camera.position.x = (mousePosition.x / window.innerWidth - 0.5) * 2;
      camera.position.y = -(mousePosition.y / window.innerHeight - 0.5) * 2;
      camera.lookAt(scene.position); // Keep the camera focused on the center

      renderer.render(scene, camera);
    };

    animate();

    // Resize the renderer on window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, [mousePosition]);

  return (
    <section className="relative h-screen bg-gradient-to-r bg-black text-white flex flex-col justify-center items-center overflow-hidden">
      {/* Three.js Icons */}
      <div ref={sceneRef} className="absolute z-0"></div>

      {/* Animated Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative rounded-full overflow-hidden shadow-xl w-80 h-80 border-4 border-white z-10"
      >
        <img
          src="/profile.jpg"
          alt="Shakil's Photo"
          className="rounded-full object-cover"
        />
      </motion.div>

      {/* Creative Text */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="text-center mt-8 z-10"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight font-montserrat">
          {`Hi, I'm`} <span className="text-white">Ahsan Shakil</span>
        </h1>
        <p className="mt-4 text-base md:text-xl font-light text-gray-300 max-w-lg mx-auto font-poppins">
          I build innovative, high-performance web solutions with{" "}
          <span className="text-white">passion</span> and a relentless drive for
          excellence.
        </p>
      </motion.div>

      {/* Call-to-Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        className="flex gap-6 mt-10 z-10"
      >
        <a
          href="#projects"
          className="px-8 py-3 text-lg font-semibold border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-8 py-3 text-lg font-semibold bg-white text-black rounded-full hover:bg-gray-800 hover:text-white border border-white transition-all duration-300"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 text-gray-400 text-sm flex flex-col items-center z-10"
      >
        <span>Scroll Down</span>
        <div className="mt-2 w-6 h-6 border-2 border-gray-400 rounded-full animate-bounce"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
