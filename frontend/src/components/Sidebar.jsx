import React from 'react'
import todo6 from '../assets/todo6.png'
import { IoStar } from "react-icons/io5";
import { RiBrushAiFill } from "react-icons/ri";
import { BiSolidCategory } from "react-icons/bi";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { GoTasklist } from "react-icons/go";
import { VscFeedback } from "react-icons/vsc";
import { useState } from 'react';
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { IoClose } from 'react-icons/io5';
import { RiLogoutBoxFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Sidebar({isSidebarOpen,setIsSidebaropen}) {

    const [isOpen,setisOpen] = useState(false);

  return (
    <>
        {isSidebarOpen && (<div className='fixed bg-gray-600 opacity-70 inset-0'>
        </div>)}
        <div className={`w-[450px] top-0 bg-blue-50 fixed left-0 h-full overflow-y-auto transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0': '-translate-x-full'}`}>
            <div className='flex flex-col items-end'>
                <img src={todo6} alt='' className='h-[250px] p-1 rounded-sm'/>
                <button
                    className="text-2xl p-2 border rounded-md mr-3"
                    onClick={() => setIsSidebaropen(false)} 
                    >
                                                    Icon={() => (
                                    <GoTasklist size={30}/>
                                )}
                </button>
            </div>
            <div className='flex items-start justify-center flex-col p-10'>
                <ul className=''>
                    <li className='pb-10 cursor-pointer'>
                        <Link to='/star'>
                            <p className='text-[25px] flex items-center gap-16 font-semibold'><IoStar className='inline-block w-8 h-8 text-primary'/> Star Tasks</p>
                        </Link>
                    </li>
                    <li className='pb-10  cursor-pointer'>
                        <Link to='/theme'>
                            <p className='text-[25px] flex items-center gap-16 font-semibold'><RiBrushAiFill  className='inline-block w-8 h-8 text-primary'/>Theme</p>
                        </Link>
                    </li>
                    <li className={`pb-10  cursor-pointer ${isOpen ? 'mb-80' : ''}`}>
                        <div className='relative inline-block'>
                        <button onClick={() => setisOpen(!isOpen)} className='text-[25px] flex items-center gap-16 font-semibold border-b border-blue-100 pb-4'><BiSolidCategory  className='inline-block w-8 h-8 text-primary' />Category <IoIosArrowDropdownCircle className={`text-primary w-6 h-6 transition-transform transform ${isOpen ? 'rotate-180': 'rotate-0'}`}/></button>
                        {(isOpen) && (
                            <div className='absolute flex flex-col gap-5 items-start pt-4 justify-center'>
                                <Link to='/all'>
                                    <p className='text-[20px] flex items-center gap-16 hover:bg-slate-200 cursor-pointer font-semibold w-[300px] px-2 py-2 rounded-md'><GoTasklist className='inline-block w-6 h-6 '/>All</p>
                                </Link>
                                <Link to='/work-tasks'>
                                    <p className='text-[20px] flex items-center gap-16 hover:bg-slate-200 cursor-pointer font-semibold w-[300px] px-2 py-2 rounded-md'><GoTasklist className='inline-block w-6 h-6'/>Work</p>
                                </Link>
                                <Link to='/personal'>
                                    <p className='text-[20px] flex items-center gap-16 hover:bg-slate-200 cursor-pointer font-semibold w-[300px] px-2 py-2 rounded-md'><GoTasklist className='inline-block w-6 h-6'/>Personal</p>
                                </Link>
                                <Link to='/wishlist'>
                                    <p className='text-[20px] flex items-center gap-16 hover:bg-slate-200 cursor-pointer font-semibold w-[300px] px-2 py-2 rounded-md'><GoTasklist className='inline-block w-6 h-6'/>Wishlist</p>
                                </Link>
                                <Link to='/birthday'>
                                    <p className='text-[20px] flex items-center gap-16 hover:bg-slate-200 cursor-pointer font-semibold w-[300px] px-2 py-2 rounded-md'><GoTasklist className='inline-block w-6 h-6'/>Birthday</p>
                                </Link>
                            </div>
                        )}
                    </div>
                    </li>
                    <li className='pb-10  cursor-pointer'>
                        <Link to='/'>
                            <p className='text-[25px] flex items-center gap-16 font-semibold'><IoMdAddCircle className='inline-block w-8 h-8 text-primary'/>Create Task</p>
                        </Link>
                    </li>
                    <li className='pb-10  cursor-pointer'>
                        <p className='text-[25px] flex items-center gap-16 font-semibold'><VscFeedback className='inline-block w-8 h-8 text-primary'/>Feedback</p>
                    </li>
                    <li className='pb-10  cursor-pointer'>
                        <p className='text-[25px] flex items-center gap-16 font-semibold'><IoSettingsSharp className='inline-block w-8 h-8 text-primary'/>Settings</p>
                    </li>
                    <li className='pb-10  cursor-pointer'>
                        <p className='text-[25px] flex items-center gap-16 font-semibold'><RiLogoutBoxFill className='inline-block w-8 h-8 text-primary'/>Logout</p>
                    </li>
                </ul>
                
            </div>
    </div>
    </>
  )
}

export default Sidebar