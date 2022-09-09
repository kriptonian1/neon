import React from 'react'
import { HeroImg } from '../assets'
import { Button } from './common'
import Tilt from "react-parallax-tilt";

const HeroSection = () => {

    return (
        <div className='flex md:justify-evenly'>
            <div className=' pl-4 pt-[10vh] '>
                <div className='text-5xl md:text-7xl font-clashDisplay'>
                    <div>Discover</div>
                    <div>collect, & sell</div>
                    <div className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1]'>Extraordinary</div>
                    <div>
                        NFTs
                    </div>
                    <div className={`bg-[#0400ff98] h-[40vh] w-[14vw] rounded-full blur-[150px] absolute left-[20vw] top-[28vh]`}></div>
                </div>

                <div className='font-poppins pt-7'>
                    <div>
                        the leading NFT Marketplace on Ethereum
                    </div>
                    <div>
                        Home to the next generation of digital creators.
                    </div>
                    <div>
                        Discover the best NFT collections.
                    </div>
                </div>

                <div className='space-x-6 py-8'>
                    <Button color="blue">
                        Explore
                    </Button>
                    <Button color="transparent">
                        Create
                    </Button>
                </div>

                <div className='flex justify-between space-x-6'>
                    <div className=' flex flex-col items-center'>
                        <div className='font-clashDisplay text-3xl font-semibold'>
                            432K+
                        </div>
                        Collections
                    </div>
                    <div className=' flex flex-col items-center'>
                        <div className='font-clashDisplay text-3xl font-semibold'>
                            200K+
                        </div>
                        Artists
                    </div>
                    <div className=' flex flex-col items-center'>
                        <div className='font-clashDisplay text-3xl font-semibold'>
                            10K+
                        </div>
                        <div>
                            Community
                        </div>

                    </div>
                </div>


            </div>

            <Tilt
                className="tilt hidden md:flex"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                transitionSpeed={1000}
                gyroscope={true}
                scale={1.05}
            >
                <img className='w-[35vw] hidden md:flex' data-tilt src={HeroImg} alt="hero" />
            </Tilt>





        </div>
    )
}

export default HeroSection