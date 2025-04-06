"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto px-6 sm:px-12 lg:px-16 relative">
      <nav className="w-full p-4 bg-black text-white flex justify-between items-center sticky top-0 z-50 shadow-md">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          Vixan<span className="text-orange-500">.</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 font-semibold text-sm">
          <li><a href="/" className="hover:text-orange-500">HOME</a></li>
          <li><a href="/about" className="hover:text-orange-500">ABOUT</a></li>
          <li><a href="/pages" className="hover:text-orange-500">PAGES</a></li>
          <li><a href="/services" className="hover:text-orange-500">SERVICES</a></li>
          <li><a href="/portfolio" className="hover:text-orange-500">PORTFOLIO</a></li>
          <li><a href="/blog" className="hover:text-orange-500">BLOG</a></li>
          <li><a href="/contact" className="hover:text-orange-500">CONTACT</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-6 shadow-lg lg:hidden">
            <a href="/" className="hover:text-orange-500">HOME</a>
            <a href="/about" className="hover:text-orange-500">ABOUT</a>
            <a href="/pages" className="hover:text-orange-500">PAGES</a>
            <a href="/services" className="hover:text-orange-500">SERVICES</a>
            <a href="/portfolio" className="hover:text-orange-500">PORTFOLIO</a>
            <a href="/blog" className="hover:text-orange-500">BLOG</a>
            <a href="/contact" className="hover:text-orange-500">CONTACT</a>
          </div>
        )}
      </nav>
    </div>
  );
}
