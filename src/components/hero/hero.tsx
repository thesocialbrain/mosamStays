import React from 'react';
import Image from 'next/image'
import heroImage from '../../../public/hero/mosam_heroImage.png'    

const Hero: React.FC = () => {
    return (
        <div className="bg-[#fffdec] h-screen">
            <div className="relative w-full h-screen bg-[#fffdec]">
                <Image
                    src={heroImage}
                    alt="Hero Image"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

        </div>
    );
};

export default Hero;
