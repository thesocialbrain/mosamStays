import React from "react";

const Cta = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 md:gap-6 bg-[#fffdec] py-10 px-4">
      <h1
        className="
                text-2xl md:text-[56px] text-center
                
                max-w-[90%] md:max-w-[700px] 
                
            "
      >
        Your tranquil <br /> getaway, starts here.
      </h1>

      <button
        className="
                text-white 
                bg-gray-900 
                px-6 py-2 mt-4
                rounded-full 
                cursor-pointer 
                text-sm sm:text-base
                shadow-md
            "
      >
        Book a night
      </button>
    </div>
  );
};

export default Cta;
