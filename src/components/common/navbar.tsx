import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-6 bg-[#fffdec] ">
      <p className='text-[#8B542C] text-xl'>mosam</p>
      <div className="text-[#8B542C] flex gap-8 text-lg">
        <p>Home</p>
        <p>Explore</p>
        <p>About Us</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
};

export default Navbar;
