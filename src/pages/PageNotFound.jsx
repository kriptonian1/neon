import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components'

const PageNotFound = () => {

    const navigate = useNavigate()

    return (
        <div>
            <Navbar />
            <div className='font-clashDisplay text-left flex flex-col justify-center items-center '>

                <div className='text-[15rem] font-clashDisplay font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3F51B1] via-[#A86AA4]  to-[#FFCB70]'>
                    404
                </div>
                <div className='text-[24rem] text-transparent shadow shadow-white'>
                    Oops
                </div>

            </div>
        </div>
    )
}

export default PageNotFound