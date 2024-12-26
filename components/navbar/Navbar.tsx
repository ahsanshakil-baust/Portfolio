"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const navbarContent = {
  title: "Ahsan's Portfolio",
  links: [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle clicks outside the mobile menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`${
        isScrolled
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white"
      } fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center px-10 font-montserrat transition-all duration-300`}
    >
      <div className="font-bold text-2xl">{navbarContent.title}</div>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex space-x-8">
        {navbarContent.links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="hover:text-gray-600 transition duration-300 relative"
          >
            <span className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-all duration-300 rounded-full"></span>
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center">
        <button
          ref={buttonRef}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-3xl focus:outline-none"
        >
          ☰
        </button>

        {isMobileMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-16 right-0 bg-white text-black p-4 rounded-lg shadow-lg w-48"
          >
            {navbarContent.links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block py-2 px-4 text-lg hover:text-gray-600 transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
