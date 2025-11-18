import Image from "next/image";
import heroImage from "../../../public/hero/cropped-hero.png";

const Hero = () => {
  return (
    <div className="bg-[#fffdec] h-full">
      {/* HERO SECTION */}
      <div className="relative w-full aspect-3/4 md:h-screen overflow-hidden bg-[#fffdec]">
        {/* TITLE */}
        <p className="relative z-20 pl-2 md:pl-8 lg:pl-12 pt-24 lg:pt-16 md:pt-28 bg-linear-to-b from-[#8B542C] via-[#8B542C]/80 to-transparent bg-clip-text text-transparent text-[50px] md:text-[120px] lg:text-[156px] leading-tight">
          Mosam Farmstay
        </p>

        {/* FADE AT BOTTOM */}
        <div className="absolute bottom-0 left-0 w-full h-40 z-10 bg-linear-to-t from-[#fffdec] to-transparent pointer-events-none"></div>

        {/* IMAGE */}
        <Image
          src={heroImage}
          alt="Hero Image"
          fill
          className=""
          priority
        />
      </div>

      {/* CONTENT BELOW HERO */}
      <div className="flex flex-col gap-6 items-center justify-center text-center mt-20 lg:mt-18 px-4 mb-16 ">
        <h1 className="text-2xl md:text-[56px] text-center mb-4 md:mb-4 max-w-[90%] md:max-w-[650px]">
          Nothing short of <br /> serenity and opulence.
        </h1>

        <p className="text-sm sm:text-base max-w-[90%] md:max-w-[600px] font-sans text-[#070707]">
          A British style dreamy wooden cottage villa in Nashik-Igatpuri, built
          with love and surrounded by nature. Enjoy serene landscapes and cozy
          comfort, making it an ideal and affordable retreat for couples,
          families and nature lovers.
        </p>

        <button className="text-white bg-gray-900 px-6 py-2 rounded-full shadow-md text-sm sm:text-base mt-6">
          Book a night
        </button>
      </div>
    </div>
  );
};

export default Hero;
