import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SquareChevronRight } from 'lucide-react';
import cpr from '../../../../assets/images/cprIll.png'
import wound from '../../../../assets/images/wound.png'
import burn from '../../../../assets/images/burn.png'
import choke from '../../../../assets/images/choke.png'
import seizure from '../../../../assets/images/seizure1.png'
import dog from '../../../../assets/images/dogbite.png'


// Import the JSON file
import trainingExamples from './training.json';

function Lesson() {

    const training = [
        {
            "name": "CPR",
            "description": "Learn how to perform hands-only CPR to save lives in emergency situations.",
            "imageSrc": cpr
        },
        {
            "name": "Treating Wounds",
            "description": "Learn essential techniques for treating various types of wounds and injuries.",
            "imageSrc": wound
        },
        {
            "name": "Managing Burns",
            "description": "Provide first aid for burns caused by heat, chemicals, or electricity.",
            "imageSrc": burn
        },
        {
            "name": "Choking Response",
            "description": "Assist someone who is choking by performing abdominal thrusts.",
            "imageSrc": choke
        },
        {
            "name": "Seizure Management",
            "description": "Safely manage seizures in emergency situations.",
            "imageSrc": seizure
        },
        {
            "name": "Dog Bite Management",
            "description": "Know how to properly clean and treat a dog bite to prevent infection.",
            "imageSrc": dog
        }
    ]

    return (
        <>
            {
                training.map((example, index) => (
                    <div key={index} className="w-10/12 h-40 flex flex-row justify-between  bg-gray-800 rounded-lg md:w-1/3">

                        <div className='flex flex-col m-5  w-8/12 '>
                            <div className=''>


                                <h1 className='text-white text-lg font-bold'> {example.name}</h1>
                                <h3 className='text-white text-m '>{example.description}</h3>
                            </div>
                            <div>
                                <Button className='bg-orange-600 mt-3 flex flex-row gap-2'>Check it out <SquareChevronRight className="size-5 mt-1" /> </Button>
                            </div>

                        </div>
                        <div className='w-4/12'>
                            <Image className='m-3 w-36 min-w-36' src={example.imageSrc} alt='' />
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default Lesson;
