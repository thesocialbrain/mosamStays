"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#fffdec] p-6 relative z-50">
      <div className="flex items-center justify-between">
        <p className="text-[#8B542C] text-xl">mosam</p>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-[#8B542C] gap-8 text-lg">
          <p>Home</p>
          <p>Explore</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#8B542C]"
          onClick={() => setOpen((prev) => !prev)}  // <-- TOGGLE HERE
        >
          {open ? <X size={28} /> : <Menu size={28} />}  {/* hamburger swaps to X */}
        </button>
      </div>

      {/* RIGHT SIDE FLOATING BOX MENU */}
      <div
        className={`
          fixed top-15 right-5
          bg-[#fffdec] shadow-2xl rounded-xl border border-[#e6e2d8]
          p-6 w-56 max-w-[85%]
          transform transition-all duration-300 
          ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
          md:hidden
        `}
      >
        <div className="flex flex-col text-[#8B542C] gap-5 text-lg">
          <p>Home</p>
          <p>Explore</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
