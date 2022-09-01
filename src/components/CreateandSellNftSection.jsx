import React from 'react'
import { combinedShape, paperUpload, wallet } from '../assets'

const CreateandSellNftSection = () => {
    return (
        <div className='flex justify-center items-center mt-[27vh]'>
            <div className='w-[70vw] h-[60vh] p-14 bg-gradient-to-br from-[#131313] rounded-2xl to-transparent border-[#474747] border-[0.5px]'>
                <div className='flex justify-center items-center'>
                    <div className=' font-clashDisplay text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1]'>
                        Create and sell your NFTs
                    </div>
                </div>

                <div className='flex justify-around'>
                    <div className='flex flex-col justify-center items-center '>
                        <img className='m-8' src={wallet} alt="wallet" />
                        <div className='m-5 font-poppins text-2xl font-semibold'>
                            Set up your wallet
                        </div>
                        <div className='text-center font-poppins'>
                            <div>Once you’ve set up your wallet of</div>
                            <div>choice, connect it to OpenSea by </div>
                            <div>clicking the wallet icon in the top right</div>
                            <div>corner. Learn about the wallets we</div>
                            support.
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center '>
                        <img className='m-8' src={paperUpload} alt="wallet" />
                        <div className='m-5 font-poppins text-2xl font-semibold'>
                            Upload & Create Collection
                        </div>
                        <div className='text-center font-poppins'>
                            <div>Upload your work then Click My</div>
                            <div>Collections and set up your collection.</div>
                            <div>Add social links, a description, profile</div>
                            <div>& banner images, and set a </div>
                            secondary sales fee.
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center '>
                        <img className='m-8' src={combinedShape} alt="wallet" />
                        <div className='m-5 font-poppins text-2xl font-semibold'>
                            List them for sale
                        </div>
                        <div className='text-center font-poppins'>
                            <div>Choose between auctions, fixed-price</div>
                            <div>listings, and declining-price listings.</div>
                            <div>You choose how you want to sell your</div>
                            <div>NFTs, and we help you sell them</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreateandSellNftSection