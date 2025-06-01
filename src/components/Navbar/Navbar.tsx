"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";
import { Menu, X } from "lucide-react"; // You may use Heroicons or Lucide icons

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "#about", label: "about." },
    { href: "#projects", label: "projects." },
    { href: "#gallery", label: "gallery." },
    { href: "#contact", label: "contact." },
  ];

  return (
    <nav className="p-4 px-6 md:px-20 sticky top-0 z-50 backdrop-blur-3xl bg-white/30 dark:bg-black/20 shadow-md transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold tracking-widest">
          markndrei.
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-14 font-light">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative group transition-colors duration-300 hover:text-red-500 dark:hover:text-blue-300"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Theme Toggle + Mobile Hamburger */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <ThemeToggle />
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-start px-6 pt-4 pb-2 space-y-4 font-light text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="w-full transition-colors duration-300 hover:text-red-500 dark:hover:text-blue-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
