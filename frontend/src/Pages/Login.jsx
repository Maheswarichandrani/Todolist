import React, { useState } from "react";
import todo1 from '../assets/todo2.avif'
import todo2 from '../assets/todo3.png';
import {motion} from 'framer-motion';
import themeStore from "../store/themeStore";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify";


function Login() {

    const navigate = useNavigate();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState()
    const [loading,setLoading] = useState(false);
    const {setUserInfo} = themeStore();


    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            setLoading(true)
            const response = await axios.post('http://localhost:5000/api/user/login',{email,password},{withCredentials: true});

            if(response.statusText != 'OK'){
                throw new Error(response.data.message)
            }

            setUserInfo(response.data.user);
            toast.success(response.data.message)
            setLoading(false)
            navigate('/')
            
        } catch (error) {
            setLoading(false)
            toast.error(response.data.message)
        }
    }

    return(
        <>
        <div className="h-screen flex items-center justify-evenly p-28">
            <motion.div className="flex items-center justify-start h-[800px] w-[650px] gap-6 flex-col border p-16 rounded-lg shadow-lg"
                initial = {{x: '-100vw' , opacity: 0}}
                animate={{x: 0,opacity: 1}}
                transition={{duration: 2,type: 'spring',stiffness: 30}}
            >
                <div className="flex gap-0 items-center justify-center">
                    <img src={todo1} alt="To-Do List" className="w-[150px] h-[150px] object-cover rounded-lg shadow-lg" />
                    <p className = "text-5xl font-bold p-10 bg-gradient-to-r from-pink-400 to-blue-800 text-transparent bg-clip-text">Login Here</p>
                </div>
                <p className="text-xl italic text-gray-600 mb-8 text-center">
                    "The secret of getting ahead is getting started." <br /> — Mark Twain
                </p>
            <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex gap-10 flex-col">
                            <input className="block h-[50px] w-[500px] text-xl bg-gradient-to-r text-black from-pink-100 to-sky-200 border border-blue-100 focus:outline-none p-5 rounded-md"
                            type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <input className="h-[50px] w-[500px] text-xl bg-gradient-to-r text-black from-pink-100 to-sky-200 border border-blue-100 focus:outline-none p-5 rounded-md"
                            type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex items-start justify-between pt-5 pb-6 gap-4 p-3">
                        <label className="text-lg text-gray-700 ml-2">
                            <input type="checkbox" className="text-xl cursor-pointer" /> Remember Me
                        </label>
                        <p className="text-gray-600 hover:underline hover:text-blue-600 cursor-pointer text-lg">Forgot password?</p>
                    </div>
                    <div className="p-5 flex items-center justify-center gap-5 flex-col">
                        <button type="submit" className=" w-[500px] bg-blue-300 text-2xl p-3 focus:scale-105 hover:bg-blue-200 rounded-lg">
                            {loading ? <div className="w-6 h-6 animate-spin rounded-full ml-52 border-[3px] border-t-black border-gray-400"></div>:"Login"}
                        </button>
                        <p className="text-xl italic text-gray-500 mt-6">
                            "Believe you can and you're halfway there."
                        </p>
                    </div>
            </form>
            </motion.div>
            <motion.div className=""
                initial = {{x: '100vw' , opacity: 0}}
                animate={{x: 0,opacity: 1}}
                transition={{duration: 2,type: 'spring',stiffness: 30}}
            >
                <img src={todo2} alt="to-do-list" className="w-[600px] h-[500px] object-cover rounded-lg" />
            </motion.div>
        </div>
        </>
    )
}

export default Login