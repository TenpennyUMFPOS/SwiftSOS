"use client"
import React, { useEffect, useState } from 'react'
import profileFormHandler from './_actions/profileFormHandler'
import { SubmitBtn } from './utils/SubmitBtn';

export default function CompleteProfile() {
    const [username, setUsername] = useState("");
    const [gender, setGender] = useState("");
    const [birth_date, setBirthDate] = useState("");
    const [birth_month, setBirthMonth] = useState("");
    const [birth_year, setBirthYear] = useState("");
    const [ERE, setERE] = useState("");
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    const checkFormValid = () => {
        if (
            username != "" &&
            gender != "" &&
            ERE != "" && // for now
            isValidDate(+birth_date, +birth_month, +birth_year)
        ) {
            setIsSubmitDisabled(false);
        }
    };
    useEffect(() => {
        checkFormValid();
    });
    function isValidDate(date: number, month: number, year: number) {
        // Create a new Date object with the provided values
        const inputDate = new Date(year, month - 1, date);

        // Check if the input values match the values in the Date object
        // and if the resulting date is a valid date
        const isValid =
            inputDate.getDate() === date &&
            inputDate.getMonth() === month - 1 &&
            inputDate.getFullYear() === year;

        // Check if the person is at least 16 years old
        const today = new Date();
        const minimumBirthDate = new Date(
            today.getFullYear() - 100,
            today.getMonth(),
            today.getDate()
        );
        const maximumBirthDate = new Date(
            today.getFullYear() - 15,
            today.getMonth(),
            today.getDate()
        );
        return (
            isValid && inputDate >= minimumBirthDate && inputDate < maximumBirthDate
        );
    }
    const handleGenderButtonClick = (selectedGender: React.SetStateAction<string>) => {
        setGender(selectedGender);
        console.log("gender", gender)
    };

    return (
        <>
            <div className="min-h-screen p-6 bg-gray-100 flex bg-orange items-center justify-center font-monospace">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <h2 className="font-semibold text-xl text-gray-600">One more step ..</h2>
                        <p className="text-gray-500 mb-6">Please fill out all the fields in order to continue</p>

                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">


                            <form action={profileFormHandler}>

                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className="md:col-span-5">
                                            <div className='border-b-4 hover:border-b-red'>
                                                <input
                                                    type="text"
                                                    id='username'
                                                    placeholder='username'
                                                    name='username'
                                                    className="h-10 border border-hidden mt-1 focus:border-transparent font-monospace focus:outline-none rounded px-4 w-full bg-gray-50 "
                                                    onChange={(e) => setUsername(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="md:col-span-5 flex flex-row gap-6 mt-3">

                                            <button
                                                type="button"
                                                className={`flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-${gender === "male" ? "red" : "black"} rounded-md hover:bg-white hover:border-red hover:border-2 hover:text-black`}
                                                onClick={() => handleGenderButtonClick("male")}
                                            >
                                                Male
                                            </button>

                                            <button
                                                type="button"
                                                className={`flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-${gender === "female" ? "red" : "black"} rounded-md hover:bg-white hover:border-red hover:border-2 hover:text-black`}
                                                onClick={() => handleGenderButtonClick("female")}
                                            >
                                                Female
                                            </button>

                                            <button
                                                type="button"
                                                className={`flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-${gender === "other" ? "red" : "black"} rounded-md hover:bg-white hover:border-red hover:border-2 hover:text-black`}
                                                onClick={() => handleGenderButtonClick("other")}
                                            >
                                                Other
                                            </button>

                                            <input
                                                readOnly
                                                className="hidden"
                                                type="text"
                                                name="gender"
                                                value={gender}
                                            />
                                        </div>
                                        <div className="md:col-span-1 border-b-4 border-b-black hover:border-b-red font-monospace">

                                            <input
                                                className="transition-all border-hidden  focus:border-transparent focus:outline-none flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="JJ"
                                                type="number"
                                                name="birth_date"
                                                onChange={(e) => setBirthDate(e.target.value)}

                                            />
                                        </div>
                                        <div className="md:col-span-1 border-b-4 border-b-black hover:border-b-red font-monospace">
                                            <input
                                                className="transition-all border-hidden focus:border-transparent focus:outline-none  flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="MM"
                                                type="number"
                                                name="birth_month"
                                                onChange={(e) => setBirthMonth(e.target.value)}
                                            />


                                        </div>

                                        <div className="md:col-span-2 border-b-4 border-b-black hover:border-b-red font-monospace">
                                            <input
                                                className="transition-all border-hidden focus:border-transparent focus:outline-none  flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="AAAA"
                                                type="number"
                                                name="birth_year"
                                                onChange={(e) => setBirthYear(e.target.value)}
                                            />

                                        </div>

                                        <div className="md:col-span-5 my-2 flex flex-col font-monospace border-b-4 h-32">


                                            <textarea
                                                id="about"
                                                onChange={(e) => setERE(e.target.value)}
                                                placeholder='Tell us briefly about your experiences as a volunteer'
                                                name="ERE"
                                                className='h-32 transition-all border-hidden focus:border-transparent focus:outline-none  flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                                            />

                                        </div>
                                        <div className="md:col-span-1  font-monospace ">
                                            <button type="submit" className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                                                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                    <path d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z" opacity=".3"></path>
                                                    <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                                                </svg>
                                                <span className="pl-2 mx-1">Save</span>
                                            </button>
                                        </div>








                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


