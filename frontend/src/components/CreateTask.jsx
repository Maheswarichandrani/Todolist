import React from 'react'
import { IoIosCreate } from "react-icons/io";
import {GoTasklist} from 'react-icons/go';
import { useState } from 'react';
import todo10 from '../assets/todo10.png'

function CreateTask() {

    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [task, setTask] = useState("");
     
  return (
    <>
        <div className="p-6 relative"> 
                <div className="fixed bottom-20 right-20 cursor-pointer">
                  <span className="absolute inset-0 flex items-center justify-center animate-ping ">
                    <span onClick={() =>
                        {
                        setIsModalOpen(prev => !prev);
                    }} className="w-20 h-12 rounded-full bg-primary opacity-75"></span>
                  </span> 
                  <button>
                    <IoIosCreate className="text-5xl text-primary"/>
                  </button>
                </div>
              </div>
    {isModalOpen && (
        <div className="fixed inset-0 px-6 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-sky-50 w-[40%] h-[400px] p-6 rounded-lg shadow-lg">
                <div className='flex flex-row gap-9'>
                    <img src={todo10} alt='' className='h-[150px] w-[150px] inline-block p-3 mb-8'/>
                    <h2 className="text-4xl font-semibold mt-14 mb-12 font-sans">Add New Task <GoTasklist className='inline-block text-5xl ml-5 text-blue-400 text-center'/></h2>
                </div>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter your task..."
                    className="w-full border text-xl border-gray-200 rounded-md p-3 bg-gradient-to-t from-blue-200 to-sky-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <div className="flex justify-end mt-4 p-4 gap-6">
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="px-6 py-3 text-xl bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            console.log("Task Saved:", task); 
                            setIsModalOpen(false);
                        }}
                        className="px-6 py-3 bg-blue-400 text-white text-xl rounded-md hover:bg-blue-600"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
        )}
    </>
  )
}

export default CreateTask