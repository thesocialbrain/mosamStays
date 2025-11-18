"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import featuresData from "../lib/data/features.json";

interface Feature {
  title: string;
  description: string;
  imageUrl: string;
}

const typedFeaturesData: Feature[] = featuresData as Feature[];

export default function MosamFeatures() {
  const [value, setValue] = useState<string | undefined>(
    typedFeaturesData?.length ? `feat-0` : undefined
  );

  const [fade, setFade] = useState<boolean>(true);

  // derive numeric index from value (no separate activeIndex to keep in sync)
  const activeIndex = value ? Number(value.replace("feat-", "")) : 0;

  useEffect(() => {
    const out = window.setTimeout(() => setFade(false), 0);
    const ino = window.setTimeout(() => setFade(true), 50);
    return () => {
      clearTimeout(out);
      clearTimeout(ino);
    };
  }, [value]);

  return (
    <section id="features" className="p-8 md:p-16 ">
      <h1 className="text-2xl md:text-[56px] text-center mb-16 md:mb-24 ">
        Escape to opulence,
        <br />
        tranquility, and relaxation at
        <br />
        the Harbour.
      </h1>

      <div className="flex flex-col md:flex-row gap-20 max-w-6xl mx-auto">
        {/* Left Side: Accordion */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <Accordion
            type="single"
            collapsible
            value={value}
            onValueChange={(v) => setValue(v || undefined)}
          >
            {typedFeaturesData.map((feature, index) => (
              <AccordionItem value={`feat-${index}`} key={feature.title}>
                <AccordionTrigger
                  className={`py-3 transition-opacity duration-500 ease-in cursor-pointer text-left ${
                    value === `feat-${index}`
                      ? "text-[#000000]"
                      : "text-[#2b2a2a]"
                  }`}
                >
                  <h3 className="text-[25px] font-medium">{feature.title}</h3>
                </AccordionTrigger>

                <AccordionContent>
                  <div className="pt-2 pb-2">
                    <p className="text-[#646363] text-[16px] font-sans">
                      {feature.description}
                    </p>

                    {/* Mobile-only image under the content */}
                    <div className="md:hidden w-full mt-6">
                      <div className="relative w-full aspect-video overflow-hidden rounded-3xl mb-4">
                        <Image
                          key={typedFeaturesData[index].imageUrl}
                          src={typedFeaturesData[index].imageUrl}
                          alt={typedFeaturesData[index].title}
                          fill
                          className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                            value === `feat-${index}` && fade
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Right Side: Desktop Image (visible from md+) */}
        <div className="w-full md:w-2/3 lg:w-1/2 md:flex items-center justify-center hidden">
          <div className="relative w-3/4 aspect-square overflow-hidden rounded-[50px]">
            {typedFeaturesData[activeIndex] && (
              <Image
                key={typedFeaturesData[activeIndex].imageUrl}
                src={typedFeaturesData[activeIndex].imageUrl}
                alt={typedFeaturesData[activeIndex].title}
                fill
                style={{ objectFit: "cover" }}
                className={`transition-opacity duration-900 ease-in-out ${
                  fade ? "opacity-900" : "opacity-0"
                }`}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
