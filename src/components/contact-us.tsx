"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DARK_NAVY = "#090A25";

const ContactUsForm: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 pt-20 pb-40">
        {/* <div className="lustria text-4xl font-bold text-black">
          Hello with Lustria font!
        </div> */}
        <div className="text-3xl md:text-[56px] text-center mb-20 leading-snug">
          <h1>Contact Us</h1>
        </div>

        {/* Contact Form  */}

        <div className="max-w-4xl mx-4 sm:mx-14 md:mx-auto px-2 relative z-20 ">
          <div className="flex  border-2 border-gray-200 rounded-2xl overflow-hidden bg-white">
            <div className="hidden md:block w-1/2 p-2">
              <Image
                src="/contact.webp"
                alt="Estate placeholder"
                className="w-full h-full object-fit rounded-lg"
                width={700}
                height={400}
              />
            </div>

            {/* Form */}
            <div className="w-full md:w-1/2 p-4 sm:p-6 ">
              <form className="space-y-3 font-sans">
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
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900 text-black "
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
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900 text-black"
                  />
                </div>

                <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-stone-700 mb-1">
                      Check In
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        placeholder="DD/MM/YYYY"
                        className="w-full pl-4 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900 text-black"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-stone-700 mb-1 ">
                      Check Out
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        placeholder="DD/MM/YYYY"
                        className="w-full pl-4 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900 text-black"
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
                      className="appearance-none w-full px-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900 text-black"
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
                    placeholder="Enter message you want to send"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-amber-900 focus:border-amber-900 resize-none text-black"
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
        className="pb-8 px-8 sm:px-16 text-white text-center relative z-10 w-full mt-[-600px] md:mt-[-450px]"
        style={{ backgroundColor: DARK_NAVY }}
      >
        <div className="pt-[560px] md:pt-[400px] lg:pt-[420px]">
          <div className="text-center mb-34">
            <p className="lustria text-[40px]">
              Your peaceful sanctuary <br />
              awaits you.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-[16px] sm:text-[20px] md:text-[24px] text-[#FFFEED] mb-[34px] ">
            <span className="mb-2">mosam farmstays &copy; 2025</span>
            <Link href="https://thesocialbrain.in" target="_blank">
              <span className="cursor-pointer">
                made by{" "}
                <span className="mb-2 hover:text-white font-semibold italic">
                  thesocialbrain.in
                </span>
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUsForm;
