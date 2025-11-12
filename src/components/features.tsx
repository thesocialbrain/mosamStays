"use client";

import { useState } from "react";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  imageUrl: string;
}

const featuresData: Feature[] = [
  {
    title: "Breathtaking Views",
    description:
      "Experience the beauty of Harbour from every angle, with awe-inspiring vistas of lush landscapes, serene waters, and endless horizons.",
    imageUrl: "/images/1.jpg",
  },
  {
    title: "Infinity Pool",
    description:
      "Lose yourself in the horizon as our stunning infinity pool merges seamlessly with the azure sea. The perfect spot for ultimate relaxation.",
    imageUrl: "/images/2.jpg",
  },
  {
    title: "Championship golf course",
    description:
      "Tee off on our 18-hole championship course, designed by legends and set against a backdrop of dramatic coastal cliffs.",
    imageUrl: "/images/3.jpg",
  },
  {
    title: "Sensua Spa",
    description:
      "Indulge your senses at Sensua Spa, a sanctuary of tranquility offering bespoke treatments inspired by ancient wellness traditions.",
    imageUrl: "/images/1.jpg",
  },
  {
    title: "Michelin restaurant",
    description:
      "Embark on a culinary journey at our Michelin-starred restaurant, where innovative dishes meet the finest local ingredients.",
    imageUrl: "/images/2.jpg",
  },
];

export default function MosamFeatures() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleFeatureClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="p-8 md:p-16 bg-[#fcfaf6] text-[#6b4f3b] font-serif">
      <h1 className="text-4xl md:text-5xl text-center mb-12">
        Escape to opulence,
        <br />
        tranquility, and relaxation at
        <br />
        the Harbour.
      </h1>

      <div className="flex flex-col md:flex-row gap-20 max-w-6xl mx-auto">
        {/* Left Side: Featuress list */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          {featuresData.map((feature, index) => (
            <div key={feature.title} className="border-b border-[#dcd3c9] py-3">
              <h3
                className="text-black text-xl font-medium cursor-pointer"
                onClick={() => handleFeatureClick(index)}
              >
                {feature.title}
              </h3>
              {activeIndex === index && (
                <p className="mt-3 text-base text-[#7d7b78] font-sans">
                  {feature.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 md:flex items-center justify-center hidden ">
          <div className="relative w-3/4 aspect-square overflow-hidden rounded-[50px]">
            <Image
              src={featuresData[activeIndex].imageUrl}
              alt={featuresData[activeIndex].title}
              style={{ objectFit: "cover" }}
              className="transition-all duration-400 ease-in"
              fill
              key={featuresData[activeIndex].imageUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
