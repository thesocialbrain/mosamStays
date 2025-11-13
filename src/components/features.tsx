"use client";

import { useState } from "react";
import Image from "next/image";

import featuresData from "../lib/data/features.json";

interface Feature {
  title: string;
  description: string;
  imageUrl: string;
}

const typedFeaturesData: Feature[] = featuresData as Feature[];

export default function MosamFeatures() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);

  const handleFeatureClick = (index: number) => {
    if (index === activeIndex) return;
    setFade(false); // fade out current image
    setTimeout(() => {
      setActiveIndex(index); // change image after fade-out
      setFade(true); // fade new image in
    }, 300); // match transition duration
  };

  return (
    <section className="p-8 md:p-16 ">
      <h1 className="text-3xl md:text-[56px] text-center mb-16 md:mb-24 ">
        Escape to opulence,
        <br />
        tranquility, and relaxation at
        <br />
        the Harbour.
      </h1>

      <div className="flex flex-col md:flex-row gap-20 max-w-6xl mx-auto">
        {/* Left Side: Featurees  */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          {typedFeaturesData.map((feature, index) => (
            <div
              key={feature.title}
              className={`border-b border-[#D9D9D9] py-3 transition-all duration-300 cursor-pointer ${
                activeIndex === index ? "text-[#000000]" : "text-[#2b2a2a]"
              }`}
              onClick={() => handleFeatureClick(index)}
            >
              <h3 className="text-[25px] text-[#000000] font-medium">
                {feature.title}
              </h3>
              {activeIndex === index && (
                <p className="mt-2 text-[#646363] text-[16px] text-base font-sans">
                  {feature.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right Side: Images */}
        <div className="w-full md:w-2/3 lg:w-1/2 md:flex items-center justify-center hidden">
          <div className="relative w-3/4 aspect-square overflow-hidden rounded-[50px]">
            <Image
              key={typedFeaturesData[activeIndex].imageUrl}
              src={typedFeaturesData[activeIndex].imageUrl}
              alt={typedFeaturesData[activeIndex].title}
              fill
              style={{ objectFit: "cover" }}
              className={`transition-opacity duration-500 ease-in-out ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
