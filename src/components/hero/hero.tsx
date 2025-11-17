import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/hero/mosam_heroImage.png';

const Hero: React.FC = () => {
    return (
        <div className="bg-[#fffdec] h-full">

            {/* HERO SECTION */}
            <div className="relative w-full aspect-[3/4] md:h-screen overflow-hidden bg-[#fffdec]">

                {/* TITLE */}
                <p
                    className="
                        relative z-20 
                        pl-4 md:pl-8 
                        pt-30 lg:pt-20 md:pt-28 
                        bg-gradient-to-b 
                        from-[#8B542C] via-[#8B542C]/80 to-transparent 
                        bg-clip-text text-transparent 
                        text-[40px] sm:text-[60px] md:text-[120px] 
                        leading-tight
                    "
                >
                    Mosam Farmstay
                </p>

                {/* FADE AT BOTTOM */}
                <div className="absolute bottom-0 left-0 w-full h-40 z-10 bg-gradient-to-t from-[#fffdec] to-transparent pointer-events-none"></div>

                {/* IMAGE */}
                <Image
                    src={heroImage}
                    alt="Hero Image"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* CONTENT BELOW HERO */}
            <div className="flex flex-col gap-6 items-center justify-center text-center mt-12 px-4">
                <p className="text-[#8B542C] text-2xl sm:text-3xl md:text-4xl max-w-[90%] md:max-w-[450px]">
                    Nothing short of serenity and opulence.
                </p>

                <p className="text-sm sm:text-base max-w-[90%] md:max-w-[450px] text-[#8B542C]">
                    Experience the grandeur of Harbour, a quintessential five-star resort nestled within 100 lush green acres, housing a world-class spa, award-winning Michelin eatery, and a premier golf course.
                </p>

                <button className="text-white bg-gray-900 px-6 py-2 rounded-full shadow-md text-sm sm:text-base">
                    Book a night
                </button>
            </div>
        </div>
    );
};

export default Hero;
