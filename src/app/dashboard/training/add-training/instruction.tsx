import React from 'react'
import Image from 'next/image'
import step1 from './images/cpr/step1.png'
export default function Instruction() {
    return (
        <div className='w-10/12   mt-5 relative md:w-8/12 rounded-t-3xl border-2 border-gray-800'>
            <div className='flex flex-col items-center justify-center '>
                <div className='w-full  relative rounded-t-2xl'>
                    <Image src={step1} alt='' className='self-center w-full h-[250px] rounded-t-3xl ' />
                    <div className='ml-5 mt-5 border-2 border-gray-800 rounded-[100%] w-[50px] h-[50px] text-center bg-white absolute top-0 left-0'>
                        <h1 className='mt-1.5 text-2xl font-extrabold  text-gray-800 '>1</h1>
                    </div>
                </div>
            </div>
            <div className='h-auto  border-gray-800 border-t-0 bg-gray-800 '>
                <p className='text-2xl text-center font-extrabold text-white'> Ensure the area is safe. Check for dangers like traffic or fire.</p>
            </div>
        </div>
    )
}


