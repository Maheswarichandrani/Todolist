import React from 'react'
import Navbar from '../components/Navbar'
import CreateTask from '../components/CreateTask'
import todo9 from '../assets/todo9.webp'

function WorkTasks() {
  return (
    <>
      <Navbar/>
      <CreateTask/>
      <div className='flex h-full w-full items-center justify-center'>
        <div className=''>
          <img src={todo9} alt='' className='w-[450px] h-[450px]'/>
          <p className='text-xl p-2 font-medium text-center text-gray-600'>No tasks in this category.<br/> Click + to create your task.</p>
        </div>
      </div>
    </>
    
  )
}

export default WorkTasks