import React from 'react'

function InputField({
    type ,
    value ,
    label,
    onChange,
    placeholder,
    containerStyles,
    className,
    Icon,
    ...props
}) {
  return (
    <div className={`w-full flex relative flex-col  rounded-full ${containerStyles}`}>

        <label className='font-semibold text-xl mb-1'>
            {label}
        </label>
        <div className='flex w-full items-center bg-white rounded-md border border-black '>
            {Icon && 
            <div className='  h-full p-3  flex items-center justify-center '>
                <Icon/>
            </div>}
            <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`flex-1   text-2xl  rounded-md p-3  focus:outline-none bg-transparent ${className}`}
            {...props}
        />
        </div>

    </div>
  )
}

export default InputField