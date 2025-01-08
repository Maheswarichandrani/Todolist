import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import todo8 from '../assets/todo8.png'
import CreateTask from '../components/CreateTask'

function AllTasks() {

  const [task,setTask] = useState("");

  return (
    <>
      <Navbar/>
      <CreateTask/>
      <div className="flex items-start justify-center mt-6">
        <div className="flex items-center h-[80px] w-[90%] bg-slate-100 rounded-xl shadow-lg p-4 space-x-4">
          <div className="bg-secondary text-black h-8 w-8 rounded-full flex items-center justify-center text-lg">
            ✓
          </div>
          <p className="text-2xl font-medium text-gray-800">Eating</p>
        </div>
      </div>
      <div className='flex h-full w-full items-center justify-center'>
        <div className=''>
          <img src={todo8} alt='' className='w-[450px] h-[450px]'/>
          <p className='text-xl p-2 font-medium text-center text-gray-600'>No tasks in this category.<br/> Click + to create your task.</p>
        </div>
      </div>
    </>
  )
}

export default AllTasks