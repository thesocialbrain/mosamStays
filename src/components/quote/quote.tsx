import Image from 'next/image'
import React from 'react'
import quoteImage from '../../../public/quote/mosalQuote.png'

const Quote = () => {
    return (
        <div className="bg-[#fffdec] h-full">
            <div className="relative w-full h-screen bg-[#fffdec]">
                <Image
                    src={quoteImage}
                    alt="Hero Image"
                    fill
                    className="object-cover pt-10"
                    priority
                />

                {/* TEXT OVER IMAGE */}
                <div className="absolute top-1/3 left-1/2 z-10 text-center px-4 w-[500px] flex flex-col gap-6">
                    <p className="text-[#8B542C] text-xl">
                        “Awakening to harmonious bird tunes, delighting in the magic of forest walks, 
                        and admiring the breathtaking spectacle of the cliffs. A tranquil getaway and 
                        the variety of pursuits is vast.”
                    </p>
                    <p className='text-[#8B542C] flex items-start justify-start'>-Sarah Colloins</p>
                </div>
            </div>
        </div>
    )
}

export default Quote
