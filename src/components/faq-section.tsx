// "use client";
// import React, { useState } from "react";
// import { ChevronDown, ChevronRight } from "lucide-react";

// import faqData from "../lib/data/faq.json";

// interface FaqItemData {
//   question: string;
//   answer: string;
// }

// const typedFaqData: FaqItemData[] = faqData as FaqItemData[];

// interface FaqItemProps {
//   question: string;
//   answer: string;
//   isOpen: boolean;
//   onClick: () => void;
// }

// const FaqItem: React.FC<FaqItemProps> = ({
//   question,
//   answer,
//   isOpen,
//   onClick,
// }) => {
//   const Icon = isOpen ? ChevronDown : ChevronRight;

//   return (
//     <div
//       className="border border-gray-200 rounded-xl my-3 mx-3  cursor-pointer transition-shadow duration-400 bg-white hover:shadow-sm"
//       onClick={onClick}
//     >
//       <div className="flex justify-between items-start px-3 py-2">
//         <h3
//           className={`text-lg font-sans text-[16px] font-semibold pl-2 ${
//             isOpen ? "text-stone-800" : "text-stone-700"
//           } leading-relaxed`}
//         >
//           {question}
//         </h3>
//         <Icon
//           size={24}
//           className={`text-amber-900 transition-transform duration-400 ${
//             isOpen ? "rotate-180" : ""
//           }`}
//         />
//       </div>

//       <div
//         className={`overflow-hidden transition-all duration-500 ease-in ${
//           isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div
//           className={` transition-all duration-400 ease-out ${
//             isOpen ? "p-5 pt-2" : "p-0"
//           }`}
//         >
//           <p className="text-[12px] font-sans text-[#656565]">{answer}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const FaqSection: React.FC = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(1);

//   const toggleFaq = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="py-12">
//       <div className="text-center mb-12 mx-5">
//         <h1 className="text-3xl md:text-[56px] text-center mb-20">
//           Your Questions, Answered
//         </h1>
//       </div>

//       <div className="max-w-3xl mx-auto px-4">
//         {typedFaqData.map((item, index) => (
//           <FaqItem
//             key={index}
//             question={item.question}
//             answer={item.answer}
//             isOpen={openIndex === index}
//             onClick={() => toggleFaq(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FaqSection;

"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

import faqData from "../lib/data/faq.json";

interface FaqItemData {
  question: string;
  answer: string;
}

const typedFaqData: FaqItemData[] = faqData as FaqItemData[];

const FaqSection: React.FC = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-12 mx-5">
        <h1 className="text-3xl md:text-[56px] text-center mb-20">
          Your Questions, Answered
        </h1>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {typedFaqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-xl my-3 mx-3 bg-white hover:shadow-sm transition-shadow duration-200 overflow-hidden last:rounded-b-xl last:border-b"
            >
              <AccordionTrigger className="px-4 py-2 pl-5 pt-2 no-underline hover:no-underline">
                <div className="flex items-start justify-between w-full">
                  <h3 className="text-lg font-sans text-[16px] font-semibold leading-relaxed text-stone-700">
                    {item.question}
                  </h3>
                </div>
              </AccordionTrigger>

              <AccordionContent className="transition-all duration-300 p-5 pb-3 pt-1">
                <p className="text-[15px] font-sans text-[#656565]">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FaqSection;
