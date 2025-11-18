const Cta = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 md:gap-6 bg-[#fffdec] py-6 px-4">
      <h1 className="text-4xl md:text-[56px] text-center  md:max-w-[700px]">
        Your tranquil <br /> getaway, starts here.
      </h1>

      <button className="text-white bg-gray-900 h-[41px] w-[133px] mt-4 rounded-full cursor-pointer text-sm sm:text-baseshadow-md">
        Book a night
      </button>
    </div>
  );
};

export default Cta;
