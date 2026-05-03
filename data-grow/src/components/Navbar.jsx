import React, { useState } from 'react'
import { AiOutlineMenuFold} from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";



const Navbar = () => {
    const [nav,setNav] =useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center h-24 mx-auto max-w-310 px-4 text-white'>
        <h1 className='w-full text-3xl text-[#00bf90] font-bold'>DataGrow.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                
                <li className='p-4'>Resources</li>

                <li className='p-4'>About</li>

                <li className='p-4'>Contact</li>
        
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <IoCloseSharp size={30} /> : <AiOutlineMenuFold  size={30}/>}
            </div>

            <div className={nav ? 'fixed bg-gray-950 left-0 top-0 w-[60%] h-full border-r border-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl text-[#00bf90] font-bold'>DataGrow.</h1>
                <ul className='p-4 uppercase'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    
                    <li className='p-4 border-b border-gray-600'>Resources</li>

                    <li className='p-4 border-b border-gray-600'>About</li>

                    <li className='p-4 border-b border-gray-600 '>Contact</li>
        
                </ul>

            </div>
    </div>
    

    
  )
}

export default Navbar