import React from 'react'
import typed from 'react-typed'

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
                    strings={['BTB', 'BTC', 'SASS']} //'Fellowship', 'Friendship', 'and Worship'
                    typeSpeed={120} 
                    backSpeed={140} 
                    loop 
                />
            </div>
            //*<p>in</p>
        </div>
    </div>
  )
}

export default Hero