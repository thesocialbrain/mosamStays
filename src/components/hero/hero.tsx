import React from 'react';
import Image from 'next/image'
import heroImage from '../../../public/hero/mosam_heroImage.png'
import Cta from './Cta';

const Hero: React.FC = () => {
    return (
        <div className="bg-[#fffdec] h-full">
            <div className="relative w-full h-screen bg-[#fffdec]">
                <p className="relative pl-6 pt-25 z-10 bg-gradient-to-b from-[#8B542C] via-[#8B542C]/80 to-transparent bg-clip-text text-transparent text-[120px]">
                    Mosam Farmstay
                </p>
                <Image
                    src={heroImage}
                    alt="Hero Image"
                    fill
                    className="object-cover pt-10"
                    priority
                />
            </div>
            <div className='flex flex-col  gap-6 items-center justify-center text-center mt-10 px-4'>
                <p className='text-[#8B542C] text-4xl w-[400px]'>Nothing short of serenity and opulence.</p>
                <p className='w-[400px]'>Experience the grandeur of Harbour, a quintessential five-star resort nestled within 100 lush green acres, housing a world-class spa, award-winning Michelin eatery, and a premier golf course.</p>
                <button className='text-white bg-gray-900 px-4 py-2 rounded-l-full rounded-r-full cursor-pointer'>Book a night</button>
            </div>
        </div>
    );
};

export default Hero;
