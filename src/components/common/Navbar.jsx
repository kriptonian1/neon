import React, { useState } from 'react'
import { clipboard, logo } from '../../assets'
import { Button } from '.'
import copy from 'copy-to-clipboard'

const Navbar = () => {

    const [walletAddr, setWalletAddr] = useState("")

    const connectWallet = () => {
        window.ethereum.request({ method: 'eth_requestAccounts' })
            .then(res => {
                // Return the address of the wallet
                setWalletAddr(res[0])
                console.log(res)
            })
    }



    return (
        <div className='py-[5vh] px-[10vw] flex items-center justify-between'>
            <img className='w-44' src={logo} alt="Neon" />

            <div className='flex  items-center space-x-7 font-semibold'>
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

            </div>



        </div>
    )
}

export default Navbar