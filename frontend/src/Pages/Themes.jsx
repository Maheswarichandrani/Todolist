import React from 'react'
import themeStore from '../store/themeStore';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Themes() {
    const {setTheme} = themeStore();
    const themes = ["blue", "pink", "green", "gray", "red", "yellow", "darkGreen", "orange", "purple"];
    const navigate = useNavigate();

  return (
    <>
        <div className="w-full h-full pt-36 flex items-center justify-center flex-col relative">
            <div className='w-[650px] h-[650px] bg-secondary rounded-xl border shadow-xl'>
                <div className="absolute top-5 left-5 border border-slate-200 rounded-lg">
                    <p onClick={() => navigate(-1)} className="cursor-pointer">
                        <IoMdArrowRoundBack className="text-4xl text-gray-600 hover:text-gray-800" />
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    <p className="text-5xl font-semibold pb-10 text-gray-800">Pure Colors</p>
                    <div className="grid grid-cols-5 gap-6 sm:grid-cols-4 md:grid-cols-6">
                    {themes.map((theme) => (
                        <button
                        key={theme}
                        style={{ backgroundColor: theme }}
                        className={`w-20 h-20 rounded-full border border-gray-300 cursor-pointer shadow-lg transition-transform transform hover:scale-110`}
                        onClick={() => setTheme(theme)}
                        title={theme} 
                        ></button>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Themes