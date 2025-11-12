"use client";

import React from "react";
import { Calendar, ChevronDown } from "lucide-react";
import Image from "next/image";

// for testing (will change afterwards)
const DARK_NAVY = "#1C1F2B";
const LIGHT_CREAM = "#FDFBF7";

const ContactUsForm: React.FC = () => {
  const customTitleFont =
    "font-serif text-4xl md:text-5xl text-amber-900 leading-snug";
  const customFooterFont = "font-serif text-3xl md:text-4xl text-white";

  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="flex-1 bg-white pt-20 pb-40"
        style={{ backgroundColor: LIGHT_CREAM }}
      >
        <div className="text-center mb-16">
          <h2 className={customTitleFont}>Contact Us</h2>
        </div>

        {/* Contact Form Container (The main white box) */}
        {/* ADDED relative z-20 HERE to put the form above the z-10 footer */}
        <div className="max-w-4xl mx-auto px-2 relative z-20">
          <div className="flex  border-2 rounded-2xl overflow-hidden bg-white">
            {/* Left Block (Dark Image/Placeholder) */}
            <div
              className="hidden md:block w-1/2 p-2"
              style={{ backgroundColor: LIGHT_CREAM }}
            >
              <Image
                src="/contact.webp"
                alt="Estate placeholder"
                className="w-full h-full object-fit rounded-lg"
                width={700}
                height={400}
              />
            </div>

            {/* Form */}
            <div className="w-full md:w-1/2 p-4 sm:p-6">
              <form className="space-y-3">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-stone-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Eg. John Doe"
                    // Reduced py-3 to py-2
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-stone-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Eg. john@email.com"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900"
                  />
                </div>

                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-stone-700 mb-1">
                      Check In
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="DD/MM/YYYY"
                        className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900"
                      />
                      <Calendar
                        size={18}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-stone-700 mb-1 invisible">
                      Check Out (Hidden Label)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="DD/MM/YYYY"
                        className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900"
                      />
                      <Calendar
                        size={18}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm font-medium text-stone-700 mb-1"
                  >
                    Guests
                  </label>
                  <div className="relative">
                    <select
                      id="guests"
                      defaultValue="1 Guest"
                      className="appearance-none w-full px-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900"
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4+ Guests</option>
                    </select>
                    <ChevronDown
                      size={18}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-stone-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900 resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-stone-800 text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-stone-700 transition duration-300 shadow-lg"
                    style={{ backgroundColor: DARK_NAVY }}
                  >
                    Make an Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="pb-8 px-8 sm:px-16 text-white text-center relative z-10 w-full mt-[-450px]"
        style={{ backgroundColor: DARK_NAVY }}
      >
        <div className="pt-[380px]">
          <div className="text-center mb-36">
            <p className={customFooterFont}>
              Your peaceful sanctuary awaits you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 ">
            <span>mosam farmstays &copy; 2025</span>
            <span>
              made by{" "}
              <a
                href="https://thesocialbrain.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white underline"
              >
                thesocialbrain.in
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUsForm;
