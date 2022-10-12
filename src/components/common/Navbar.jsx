import React, { useState } from 'react'
import { clipboard, logo } from '../../assets'
import { Button } from '.'
import copy from 'copy-to-clipboard'
import 'flowbite'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const [walletAddr, setWalletAddr] = useState("")

    const navigate = useNavigate();

    const connectWallet = () => {
        window.ethereum.request({ method: 'eth_requestAccounts' })
            .then(res => {
                // Return the address of the wallet
                setWalletAddr(res[0])
                console.log(res)
            })
    }



    return (
        <div className=''>

            <nav className="py-[5vh] px-[10vw] flex items-center justify-between">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <img onClick={() => navigate("/")} className=' w-28 md:w-44 cursor-pointer' src={logo} alt="Neon" />
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#ffffff21] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 items-center rounded-lg border md:flex-row md:space-x-7 md:mt-0  md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 font-semibold text-white rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">Marketplace</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Collection</a>
                            </li>
                            <li>
                                <a href="/community" className="block py-2 pr-4 pl-3 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Community</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Create</a>
                            </li>
                            <li className='pl-9'>
                                {
                                    walletAddr != "" ?
                                        <div onClick={copy(walletAddr)} className='bg-[#2F80ED] flex cursor-copy items-center truncate w-[11rem] hover:bg-[#2E8EEE] py-3 px-5 rounded-full font-semibold'>
                                            <img className='w-5 m-1' src={clipboard} alt="clipboard" />
                                            <div className='truncate'>
                                                {walletAddr}
                                            </div>

                                        </div>
                                        : <button onClick={() => connectWallet()} className='bg-[#2F80ED] truncate w-[10rem] hover:bg-[#2E8EEE] py-3 px-5 rounded-full font-semibold'>
                                            Connect Wallet
                                        </button>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <img className='w-44' src={logo} alt="Neon" /> */}

            {/* <div className='flex  items-center space-x-7 font-semibold'>
                <a href='#'>Marketplace</a>
                <a href='#'>Collection</a>
                <a href='#'>Community</a>
                <a href='#'>Create</a>
                <div className='pl-9'>

                    {
                        walletAddr != "" ?
                            <div onClick={copy(walletAddr)} className='bg-[#2F80ED] flex cursor-copy items-center truncate w-[11rem] hover:bg-[#2E8EEE] py-3 px-5 rounded-full font-semibold'>
                                <img className='w-5 m-1' src={clipboard} alt="clipboard" />
                                <div className='truncate'>
                                    {walletAddr}
                                </div>

                            </div>
                            : <button onClick={() => connectWallet()} className='bg-[#2F80ED] truncate w-[10rem] hover:bg-[#2E8EEE] py-3 px-5 rounded-full font-semibold'>
                                Connect Wallet
                            </button>
                    }




                </div>

            </div> */}



        </div>
    )
}

export default Navbar