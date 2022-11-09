import React from 'react'
import { useAuth } from '../context/AuthContext'

export default function LogIn() {
    const {  login } = useAuth()



    return (
        <>
            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white px-4  sm:rounded-lg sm:px-10">

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="bg-white px-2 text-gray-500">Continue with</span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <div>
                                    <button onClick={login}

                                            className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                                    >
                                        <span className="sr-only">Sign in with Google</span>

                                        <svg className="h-5 w-5" viewBox="0 0 48 48">
                                            <title>Google Logo</title>
                                            <clipPath id="g">
                                                <path
                                                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
                                            </clipPath>
                                            <g className="colors" clipPath="url(#g)">
                                                <path fill="#FBBC05" d="M0 37V11l17 13z"/>
                                                <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/>
                                                <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/>
                                                <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/>
                                            </g>
                                        </svg>


                                    </button>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}