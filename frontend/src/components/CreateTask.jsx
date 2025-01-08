import React from 'react'
import { IoIosCreate } from "react-icons/io";
import { GoTasklist } from 'react-icons/go';
import { useState } from 'react';
import todo10 from '../assets/todo10.png'
import axios from 'axios';
import InputField from './InputField';
import { Tags } from '../utils';
import { IoClose } from 'react-icons/io5';

function CreateTask() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [task, setTask] = useState();
    const [tags , setTags] = useState([]);

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/tasks/addTasks",)
        } catch (error) {

        }
    };

    const handleAddTag = (tag) => {
        setTags([...tags , tag]);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="p-6 relative">
                    <div className="fixed bottom-20 right-20 cursor-pointer">
                        <span className="absolute inset-0 flex items-center justify-center animate-ping ">
                            <span onClick={() => {
                                setIsModalOpen(prev => !prev);
                            }} className="w-20 h-12 rounded-full bg-primary opacity-75"></span>
                        </span>
                        <button>
                            <IoIosCreate className="text-5xl text-primary" />
                        </button>
                    </div>
                </div>
                {isModalOpen && (
                    <div className="fixed inset-0 px-6 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                        <div className="bg-sky-50 w-[40%] min-h-[400px] max-h-[90%] flex flex-col gap-5 overflow-y-auto p-6 rounded-lg shadow-lg">
                            <div className='flex flex-row gap-9'>
                                <img src={todo10} alt='' className='min-h-[150px] w-[150px] inline-block p-3 mb-8' />
                                <h2 className="text-4xl font-semibold mt-14 mb-12 font-sans">Add New Task <GoTasklist className='inline-block text-5xl ml-5 text-blue-400 text-center' /></h2>
                            </div>

                            {/* Inputs */}

                            <InputField
                                type="text"
                                label={"New Task"}
                                placeholder={"Input New Task Here"}
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                                Icon={() => (
                                    <GoTasklist size={30}/>
                                )}
                            />
                            <InputField
                                type="text"
                                label={"New Task"}
                                placeholder={"Add Description"}
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                                className={`h-24 text-start`}
                                Icon={() => (
                                    <GoTasklist size={30}/>
                                )}
                            />
                            <InputField
                                type="date"
                                label={"New Task"}
                                placeholder={""}
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                                Icon={() => (
                                    <GoTasklist size={30}/>
                                )}
                            />
                            <InputField
                                type="date"
                                label={"New Task"}
                                placeholder={""}
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                                Icon={() => (
                                    <GoTasklist size={30}/>
                                )}
                            />

                            {/* tags */}
                            <div className={`w-full flex flex-col items-center justify-center`}>
                                <span className='mb-2 text-start w-full text-2xl font-semibold capitalize'>Tags</span>
                                <div className='flex-1 w-full flex min-h-10 gap-3 mb-2 flex-wrap'>
                                    {tags.map((tag , i) => (
                                        <div key={i} onClick={() => setTags(tags.filter((data) => data != tag))} className='relative'>
                                            <div className='absolute cursor-pointer -top-2 hover:bg-gray-200 rounded-full -right-2 '>
                                                <IoClose size={15}/>
                                            </div>
                                            <span key={i} className='rounded-full h-fit bg-blue-500 text-white transition-all duration-500 hover:scale-105 cursor-pointer  border border-blue-500 px-4 py-1 font-semibold text-xl text-center'>
                                                {tag}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className='flex-1 w-full flex gap-3 flex-wrap'>
                                    {Tags.filter((tag) => !tags.includes(tag)).map((tag , i) => (
                                        <span key={i} onClick={() => handleAddTag(tag)} className='rounded-full hover:bg-blue-600 hover:text-white transition-all duration-500 hover:scale-105 cursor-pointer  border border-blue-500 px-4 py-1 font-semibold text-xl text-center'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
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
            </form>
        </>
    )
}

export default CreateTask