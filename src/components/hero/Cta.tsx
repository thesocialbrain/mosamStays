import React from 'react';

const Cta = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-4 md:gap-6 bg-[#fffdec] py-10 px-4">
            
            <p className="
                text-[#8B542C] 
                text-2xl sm:text-3xl 
                max-w-[90%] md:max-w-[700px] 
                text-center
            ">
                Your tranquil getaway, starts here.
            </p>

            <button className="
                text-white 
                bg-gray-900 
                px-6 py-2 
                rounded-full 
                cursor-pointer 
                text-sm sm:text-base
                shadow-md
            ">
                Book a night
            </button>

        </div>
    );
};

export default Cta;
