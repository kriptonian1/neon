import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components'

const PageNotFound = () => {

    const navigate = useNavigate()
 
    return (
        <div>
            <Navbar />
            <div className='font-clashDisplay text-6xl text-left flex flex-col justify-center items-center h-[80vh]'>
                <div className='m-10'>
                    <div>Oops!!!</div>
                    <div>You are not supposed to found</div>
                    <div>this page</div>
                    <div>404</div>
                </div>

                <button onClick={() => navigate("/")} className='bg-[#2F80ED] text-base w-[10rem] hover:bg-[#2E8EEE] py-3 px-5 rounded-full font-semibold'>
                    Go back Home
                </button>

            </div>
        </div>
    )
}

export default PageNotFound