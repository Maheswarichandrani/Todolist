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
    <div className='flex items-center justify-center w-90%'>
        <div className='flex items-start justify-start p-5'>
            <p onClick={() => navigate(-1)} className='cursor-pointer'><IoMdArrowRoundBack className='text-3xl'/></p>
        </div> 
       <div className='flex flex-col gap-4'>
       <p>Pure colors</p>
        <div className="">
            {themes.map((theme) => (
                <button key={theme}
                    className={`p-4 rounded-lg bg-${theme} cursor-pointer`}
                    onClick={() => setTheme(theme)}
                >
                    {theme}
                </button>
            ))}
        </div>
       </div>
    </div>
    </>
  )
}

export default Themes