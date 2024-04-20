import React from 'react'
import Image from 'next/image';
import cpr from '../../../../assets/images/cprIll.png';
import { Button } from '@/components/ui/button';
function Lesson() {
    return (


        <div className="w-10/12 h-40 flex flex-row justify-between  bg-gray-800 rounded-lg md:w-1/3">

            <div className='flex flex-col m-5 '>
                <div className=''>

                    <h3 className='text-white text-m font-bold'>Last visited : 21/01/2024</h3>
                    <h1 className='text-white text-lg font-bold'> CPR (CPRR)</h1>
                    <h3 className='text-white text-m font-bold'>Description Description</h3>
                </div>
                <div>
                    <Button className='bg-orange-600 mt-3'>Check it out </Button>
                </div>

            </div>
            <div>
                <Image className='m-5 w-36' src={cpr} alt='' />
            </div>
        </div>


    )
}

export default Lesson
