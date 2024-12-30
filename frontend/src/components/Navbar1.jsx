import React from 'react'
import todo7 from '../assets/todo7.webp'
import { MdLogin } from "react-icons/md";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar1() {
  return (
    <>
        <div className='flex items-center justify-center border-b border-blue-100'>
            <div className='w-[80%] flex items-center justify-between p-4'>
                <div className='p-1'>
                    <img className='w-[200px] h-[70px] object-cover' src={todo7} alt="todo-logo" />
                </div>
                <div className='flex flex-row gap-16'>
                    <Link to='/auth/login'>
                        <button className='text-[22px] font-semibold bg-blue-300 px-4 py-2 rounded-md hover:bg-blue-200 focus:scale-105 border border-blue-300' ><MdLogin className='inline-block mr-4'/>Login</button>
                    </Link>
                    <Link to = '/auth/register'>
                        <button className='text-[22px] font-semibold bg-blue-300 px-4 py-2 rounded-md hover:bg-blue-200 focus:scale-105 border border-blue-300' ><FaSignInAlt className='inline-block mr-3'/>Sign Up</button>
                    </Link>
                </div>
                </div>
        </div>
    </>
  )
}

export default Navbar1