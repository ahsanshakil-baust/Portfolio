"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const ParticleScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let camera: THREE.PerspectiveCamera,
      scene: THREE.Scene,
      renderer: THREE.WebGLRenderer;
    let mouseX = 0,
      mouseY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        2,
        2000
      );
      camera.position.z = 1000;

      const spriteLoader = new THREE.TextureLoader();

      // Array of textures for different particle groups (updated with all images)
      const textures = [
        "/icons/html.svg",
        "/icons/css.svg",
        "/icons/js.svg",
        "/icons/react.svg",
        "/icons/csharp.svg",
        "/icons/bootstrap.svg",
        "/icons/express.svg",
        "/icons/figma.svg",
        "/icons/git.svg",
        "/icons/github.svg",
        "/icons/jira.svg",
        "/icons/mongodb.svg",
        "/icons/mysql.svg",
        "/icons/nextjs.svg",
        "/icons/node.svg",
        "/icons/notion.svg",
        "/icons/redux.svg",
        "/icons/tailwind.svg",
        "/icons/typescript.svg",
        "/icons/xd.svg",
      ];

      // Function to create a particle group with a specific texture and position
      const createParticleGroup = (
        textureUrl: string,
        numParticles: number,
        offsetX: number,
        offsetY: number,
        offsetZ: number
      ) => {
        const geometry = new THREE.BufferGeometry();
        const vertices: number[] = [];

        // Load the texture for the particle group
        const texture = spriteLoader.load(textureUrl);

        // Generate particles with random positions and this specific texture
        for (let i = 0; i < numParticles; i++) {
          const x = 5000 * Math.random() - 1000 + offsetX;
          const y = 5000 * Math.random() - 1000 + offsetY;
          const z = 5000 * Math.random() - 1000 + offsetZ;

          vertices.push(x, y, z);
        }

        geometry.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(vertices, 3)
        );

        const material = new THREE.PointsMaterial({
          size: 50,
          sizeAttenuation: true,
          map: texture,
          alphaTest: 0.5,
          transparent: true,
          opacity: 0.6,
        });

        const particles = new THREE.Points(geometry, material);
        return particles;
      };

      // Create 20 particle groups with different textures and positions
      const particleGroups = textures.map((texture, index) => {
        const offsetX = (index % 5) * 1000 - 2500; // Spread out particles on X axis
        const offsetY = Math.floor(index / 5) * 1000 - 2500; // Spread out particles on Y axis
        return createParticleGroup(texture, 1000, offsetX, offsetY, 0);
      });

      // Add particle groups to the scene
      particleGroups.forEach((group) => scene.add(group));

      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setAnimationLoop(animate);

      window.addEventListener("resize", onWindowResize);
      document.body.addEventListener("pointermove", onPointerMove);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onPointerMove = (event: MouseEvent) => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };

    const animate = () => {
      render();
    };

    const render = () => {
      //   const time = Date.now() * 0.00005;

      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    init();

    return () => {
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-screen"></canvas>;
};

export default ParticleScene;
