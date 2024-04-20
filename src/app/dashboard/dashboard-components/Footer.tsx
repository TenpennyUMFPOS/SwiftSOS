"use client"
import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">


                    <a href='/dashboard' type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray dark:hover:bg-gray group">
                        <svg className="w-6 h-6 mb-1 text-gray dark:text-gray group-hover:text-blue dark:group-hover:text-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                        </svg>
                        <span className="text-sm text-gray dark:text-gray group-hover:text-blue dark:group-hover:text-blue">Home</span>
                    </a>


                    <a href='/dashboard/training' type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray dark:hover:bg-gray group">
                        <svg className="w-6 h-6 mb-1 text-gray dark:text-gray group-hover:text-blue dark:group-hover:text-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"></path>
                        </svg>
                        <span className="text-sm text-gray dark:text-gray group-hover:text-blue dark:group-hover:text-blue">Wallet</span>
                    </a>




                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray dark:hover:bg-gray group">
                        <svg className="w-6 h-6 mb-1 text-gray dark:text-gray group-hover:text-blue dark:group-hover:text-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"></path>
                        </svg>
                        <span className="text-sm text-gray dark:text-gray-400 group-hover:text-blue dark:group-hover:text-blue">Profile</span>
                    </button>
                </div>
            </div>
        </>
    )
}


