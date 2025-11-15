import React from 'react'

const Cta = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center gap-8 bg-[#fffdec] h-[300px]'>
            <p className='text-6xl text-[#8B542C] w-[700px] flex items-center justify-center text-center'>Your tranquil getaway, starts here.</p>
            <button className='text-white bg-gray-900 px-4 py-2 rounded-l-full rounded-r-full cursor-pointer'>Book a night</button>
        </div>
    )
}

export default Cta