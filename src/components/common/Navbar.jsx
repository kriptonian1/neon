import React from 'react'
import { logo } from '../../assets'
import { Button } from '.'

const Navbar = () => {
    return (
        <div className='py-[5vh] px-[10vw] flex items-center justify-between'>
            <img className='w-44' src={logo} alt="Neon" />

            <div className='flex  items-center space-x-7 font-semibold'>
                <a href='#'>Marketplace</a>
                <a href='#'>Collection</a>
                <a href='#'>Community</a>
                <a href='#'>Create</a>
                <div className='pl-9'>
                    <button className='bg-[#2F80ED] hover:bg-[#2E8EEE] py-3 px-5 rounded-full font-semibold'>
                        Connect Wallet
                    </button>


                </div>

            </div>



        </div>
    )
}

export default Navbar