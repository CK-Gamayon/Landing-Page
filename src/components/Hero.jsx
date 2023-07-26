import React from 'react';
import Typed from 'react-typed'

function Hero() {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-90px] w-full h-screen mx-auto text-center flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>
                BECOMING CLOSER WITH JESUS
            </p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                Grow in faith.
            </h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>
                    Foster
                </p>
                <Typed
                className='md:text-7xl sm:text-4xl text-xl font-bold pl-2' 
                    strings={['Fellowship', 'Friendship', 'and Worship']} 
                    typeSpeed={120} 
                    backSpeed={140} 
                    loop 
                />
            </div>
            <p className='md:text-2xl text-xl font-bold text-grey-500'>Join us as we build a community of faithful followers in this UCCP Portal </p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Register Now</button>
        </div>
    </div>
  )
}

export default Hero