import React, { useState } from "react";
import todo4 from '../assets/todo4.webp';
import todo5 from '../assets/todo5.webp';
import {motion} from 'framer-motion';
import { Link, useNavigate } from "react-router-dom";
import themeStore from "../store/themeStore";
import { toast } from "react-toastify";
import axios from 'axios'


function SignIn (){
    
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [username,setUsername] = useState();
    const [loading,setLoading] = useState();
    const {setUserInfo} = themeStore();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:5000/api/user/register',{username,email,password},{withCredentials: true});

            if(response.statusText != 'OK'){
                throw new Error(response.data.message)
            }

            setUserInfo(response.data.user)
            setLoading(false)
            toast.success(response.data.message);
            navigate('/')
        } catch (error) {
            toast.error(error.message)
            setLoading(false);
        }
    }
    return (
        <>
            <div className="h-screen flex items-center justify-evenly p-12">
                    <motion.div 
                    className="flex items-center justify-start h-[850px] w-[650px] gap-6 flex-col border p-12 rounded-lg shadow-lg"
                        initial = {{x: '-100vw',opacity: 0}}
                        animate = {{x:0 , opacity: 1}}
                        transition = {{duration:2,type: 'spring',stiffness: 30}}>
                            <div className="flex gap-0 items-center justify-center flex-col">
                                <img src={todo4} alt="To-Do List" className="w-full h-[100px] object-cover rounded-lg shadow-lg" />
                                <p className = "text-5xl font-bold p-4 bg-gradient-to-r from-pink-400 to-blue-800 text-transparent bg-clip-text">Sign Up</p>
                            </div>
                            <p className="text-xl italic text-gray-600 mb-3 text-center">
                                "The journey of a thousand miles begins with one step."
                                <br />— Lao Tzu
                            </p>
                        <form onSubmit={handleSubmit}>
                                <div className="flex flex-col items-center justify-center">
                                    <div className="flex gap-8 flex-col">
                                        <input className="block h-[50px] w-[500px] text-xl bg-gradient-to-r text-black from-pink-100 to-sky-200 border border-blue-100 focus:outline-none p-4 rounded-md"
                                        type="text" placeholder="Enter username " value={username} onChange={(e) => setUsername(e.target.value)}/>
                                        <input className="block h-[50px] w-[500px] text-xl bg-gradient-to-r text-black from-pink-100 to-sky-200 border border-blue-100 focus:outline-none p-4 rounded-md"
                                        type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                        <input className="h-[50px] w-[500px] text-xl bg-gradient-to-r text-black from-pink-100 to-sky-200 border border-blue-100 focus:outline-none p-4 rounded-md"
                                        type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="flex items-start flex-col gap-5 justify-start pt-3 ml-4">
                                    <p className="text-[18px]">Already have an account? <Link to = '/auth/login' className="hover:underline hover:text-blue-500">Login here</Link></p>
                                    <label className="text-lg">
                                        <input type="checkbox"/> I agree to the terms and conditions
                                    </label>
                                </div>
                                
                                <div className="p-3 pt-8 flex items-center justify-center gap-5 flex-col">
                                    <button type="submit" className=" w-[500px] bg-blue-300 text-2xl p-3 focus:scale-105 hover:bg-blue-200 rounded-lg">
                                        {loading?<div className="w-[15px] h-[15px] rounded-full border-[4px] border-gray-400 border-t-black animate-spin"></div>:""}
                                    Sign In</button>
                                    <p className="text-xl italic text-gray-500 mt-4">
                                        "Start organizing your tasks like a pro!"
                                    </p>
                                </div>

                        </form>
                    </motion.div>
                        <motion.div   
                            className=""
                            initial={{ x: '100vw', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 2,type: 'spring', stiffness: 30 }}
                        >
                            <img src={todo5} alt="to-do-list" className="w-[650px] h-[600px] object-cover rounded-lg" />
                        </motion.div>
                </div>
        </>
    )
} 

export default SignIn