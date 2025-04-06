import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto px-6">
        {/* Logo and description */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-4">
          <div className="flex flex-col text-center md:text-left">
            <h1 className="text-3xl font-bold">Vixan <span className="text-orange-500">.</span></h1>
            <p className="mt-2 text-sm">
              Welcome to our digital agency. We specialize in helping businesses like yours succeed online. From website design and development.
            </p>
            <p className="mt-2 text-xl font-semibold">info@email.com</p>
          </div>

          {/* Social media links */}
          <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500">Facebook</a>
              <a href="#" className="hover:text-orange-500">Linkedin</a>
              <a href="#" className="hover:text-orange-500">Instagram</a>
              <a href="#" className="hover:text-orange-500">Twitter</a>
              <a href="#" className="hover:text-orange-500">Dribbble</a>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="flex flex-col md:flex-row justify-between mb-4 text-sm">
          <div className="flex flex-col items-center md:items-start">
            <p>46 JOHN ST, TORONTO ON M5V 3W2</p>
            <p className="mt-1">Phone: (406) 555-0120</p>
          </div>

          {/* Footer navigation links */}
          <div className="flex flex-wrap space-x-8 mt-2 md:mt-0 justify-center md:justify-start">
            <a href="#" className="hover:text-orange-500">Home</a>
            <a href="#" className="hover:text-orange-500">About</a>
            <a href="#" className="hover:text-orange-500">Services</a>
            <a href="#" className="hover:text-orange-500">Portfolio</a>
            <a href="#" className="hover:text-orange-500">Blog</a>
            <a href="#" className="hover:text-orange-500">Contact Us</a>
          </div>
        </div>

        {/* Copyright info with top border */}
        <div className="text-center text-xs text-gray-500 border-t border-gray-700 pt-2">
          <p>Copyright 2025, All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
