import React from 'react'
import {
    
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from 'react-icons/fa'

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto p py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>UCCP CDO</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare  size={30}/>
                <FaInstagramSquare size={30}/>
                <FaTwitterSquare   size={30}/>
                <FaGithubSquare    size={30}/>
                
            </div>
        </div>
      <div className='lg:cols-span-2 flex justify-between'>
    <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Ministry</li>
            <li className='py-2 text-sm'>Resources</li>
            <li className='py-2 text-sm'>About</li>
            <li className ='py-2 text-sm'>Contact</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Inquiries</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>References</li>
            <li className ='py-2 text-sm'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Network</h6>
        <ul>
            <li className='py-2 text-sm'>Organizations</li>
            <li className='py-2 text-sm'>Patrons</li>
            <li className='py-2 text-sm'>Partners</li>
            <li className ='py-2 text-sm'>Office</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>Careers</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className ='py-2 text-sm'>Newsletter</li>
        </ul>
    </div>
      </div>
    </div>
  )
}

export default Footer
