import React from 'react'
import Navbar from '../components/Navbar'
import todo8 from '../assets/todo8.png'
import CreateTask from '../components/CreateTask'

function AllTasks() {
  return (
    <>
      <Navbar/>
      <CreateTask/>
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