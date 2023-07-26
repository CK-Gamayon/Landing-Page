import React from 'react'
import Single from '../assets/placeholder.jpg'
import Double from '../assets/placeholder2.jpg'
import Triple from '../assets/placeholder3.jpg'

function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='mas-w-[1240ox] ms-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-40 mx-auto bg-white' src={Single} alt='/'/>
            <h2 className='text-2xl font-bold text-center py-8'>Event 1</h2>
            <p className='text-center text-4xl font-bold'>xx/xx/xx</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Held by: The xxxx Ministry</p>
                <p className='py-2 border-b mx-8'>Headed by: Pastor ABCD</p>
                <p className='py-2 border-b mx-8'>Agenda: lorem ipsum dolor amet</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>See More</button>
        </div>
        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-40 mx-auto bg-transparent' src={Double} alt='/'/>
            <h2 className='text-2xl font-bold text-center py-8'>Event 1</h2>
            <p className='text-center text-4xl font-bold'>xx/xx/xx</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Held by: The xxxx Ministry</p>
                <p className='py-2 border-b mx-8'>Headed by: Pastor ABCD</p>
                <p className='py-2 border-b mx-8'>Agenda: lorem ipsum dolor amet</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>See More</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-40 mx-auto bg-white' src={Triple} alt='/'/>
            <h2 className='text-2xl font-bold text-center py-8'>Event 1</h2>
            <p className='text-center text-4xl font-bold'>xx/xx/xx</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Held by: The xxxx Ministry</p>
                <p className='py-2 border-b mx-8'>Headed by: Pastor ABCD</p>
                <p className='py-2 border-b mx-8'>Agenda: lorem ipsum dolor amet</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>See More</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
