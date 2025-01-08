import React, { useEffect, useRef } from 'react'
import { MdMenu } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaTasks } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Calendar from "react-calendar"; 
import Sidebar from './Sidebar';
import { useState} from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';


function Navbar() {
    const optionsRef = useRef(null);
    const [isSidebarOpen,setIsSidebaropen] = useState();
    const [isCalendarOpen,setIscalendarOpen] = useState();
    const [selectedDate,setSelectedDate] = useState(new Date());
    const [isOptions,setIsOptions] = useState(false);

    const handleDate = (newDate) => {
        setSelectedDate(newDate)
    }

    useEffect(()=>{
        const handleClick = (e) => {
            if(optionsRef?.current && !optionsRef.current.contains(e.target)){
                setIsOptions(false)
            }
        };

        document.addEventListener("mousedown",handleClick)
        return (() => {
            document.removeEventListener("mousedown",handleClick)
        })
    },[])

  return (
    <>
    <main>
        <div className={`flex items-center justify-center bg-secondary border-b shadow-sm border-slate-300 p-2 px-3 transform transition-transform duration-300 ${isSidebarOpen?'translate-x-[450px] fixed w-[80%]':'translate-0'}`}>
            <div className='flex flex-row w-[80%] items-center justify-between'>
                <p onClick={() => setIsSidebaropen(true)} className='text-4xl flex flex-col  items-center justify-center cursor-pointer text-gray-600'><MdMenu /><span className='text-lg font-semibold'>Menu</span></p>
                <p onClick={() => setIscalendarOpen(!isCalendarOpen)} className='text-4xl flex flex-col  items-center justify-center cursor-pointer text-gray-600'><SlCalender /><span className='text-lg font-semibold'>Calendar</span></p>
                <Link to='/all'>
                    <p className='text-4xl cursor-pointer flex flex-col  items-center justify-center text-gray-600'><FaTasks /><span className='text-lg font-semibold '>Tasks</span></p>
                </Link>
                <Link to='/profile'>
                    <p className='text-4xl cursor-pointer flex flex-col  items-center justify-center text-gray-600'><CgProfile /><span className='text-lg font-semibold '>Mine</span></p>
                </Link>
            </div>
        </div>
        {/*Calender popup*/}
            {isCalendarOpen && (
            <div className="calendar-popup fixed top-20px left-[20%] text-2xl text-center text-blue-900 font-semibold bg-white shadow-lg p-4 rounded-md z-50"
            >
                <Calendar
                    onChange={handleDate} 
                    value={selectedDate} 
                />
            </div>
        )}
        <Sidebar
            isSidebarOpen={ isSidebarOpen}
            setIsSidebaropen={setIsSidebaropen}
        />
        {/* All tasks lists */}
        <div className='flex p-2'>
            <div className='flex flex-row items-center flex-nowrap justify-around gap-12 p-2 overflow-x-scroll w-full'>
                <Link to='/all'>
                    <p className='p-1 bg-secondary font-medium rounded-3xl px-5 text-gray-500 hover:bg-primary text-[20px] cursor-pointer '>All</p>
                </Link>
                <Link to='/work-tasks'>
                    <p className='p-1 bg-secondary font-medium rounded-3xl px-5 text-gray-500 hover:bg-primary text-[20px] cursor-pointer '>Work</p>
                </Link>
                <Link to='/personal'>
                    <p className='p-1 bg-secondary font-medium rounded-3xl px-5 text-gray-500 hover:bg-primary text-[20px] cursor-pointer '>Personal</p>
                </Link>
                <Link to='/wishlist'>
                    <p className='p-1 bg-secondary font-medium rounded-3xl px-5 text-gray-500 hover:bg-primary text-[20px] cursor-pointer '>Wishlists</p>
                </Link>
                <Link to='/birthday'>
                    <p className='p-1 bg-secondary font-medium rounded-3xl px-5 text-gray-500 hover:bg-primary text-[20px] cursor-pointer '>Birthday</p>
                </Link>
            </div>
            <div className='flex items-center justify-center p-3'>
                <p onClick={() => setIsOptions(prev => !prev)} className='text-2xl mb-6 bg-secondary cursor-pointer p-2 rounded-full'><BsThreeDotsVertical /></p>
            </div>
        </div>
        {isOptions && (
            <div  ref={optionsRef} className='relative flex items-end justify-end'>
                <div className='bg-white h-[250px] w-[200px] absolute top-0 right-3 rounded-xl shadow-xl border border-gray-200'>
                    <div className='p-5 flex flex-col gap-6'>
                        <p className='text-xl text-black font-medium cursor-pointer'>Manage Categories</p>
                        <p className='text-xl text-black font-medium cursor-pointer'>Search</p>
                        <p className='text-xl text-black font-medium cursor-pointer'>Sort By</p>
                        <p className='text-xl text-black font-medium cursor-pointer'>Print</p>
                    </div>
                </div>
            </div>
        )}
    </main>
    </>
  )
}

export default Navbar