"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [fade, setFade] = useState(false);

  const handleLinkClick = (href: string) => {
    // Start fade animation
    setFade(true);

    // After fade animation, close menu + navigate
    setTimeout(() => {
      setOpen(false);
      setFade(false);
      window.location.href = href; // smooth scroll
    }, 350); // matches fade duration
  };

  return (
    <nav className="bg-[#fffdec] p-6 relative z-50">
      <div className="flex items-center justify-between">
        <p className="text-[#8B542C] text-xl">moSam</p>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-[#8B542C] gap-8 text-lg">
          <Link href="#">Home</Link>
          <Link href="#features">Features</Link>
          <Link href="#faq">FAQs</Link>
          <Link href="#contact-us">Contact Us</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#8B542C]"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-15 right-5
          bg-[#fffdec] shadow-2xl rounded-xl border border-[#e6e2d8]
          p-6 w-56 max-w-[85%]
          transform transition-all duration-300
          ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
          ${fade ? "opacity-0 transition-opacity duration-300" : ""}
          md:hidden
        `}
      >
        <div className="flex flex-col text-[#8B542C] gap-5 text-lg">
          <button onClick={() => handleLinkClick("#")} className="text-left">
            Home
          </button>
          <button
            onClick={() => handleLinkClick("#features")}
            className="text-left"
          >
            Features
          </button>
          <button onClick={() => handleLinkClick("#faq")} className="text-left">
            FAQs
          </button>
          <button
            onClick={() => handleLinkClick("#contact-us")}
            className="text-left"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
