import React from 'react'
import { discordColorImg, discordImg, instagramColorImg, instagramImg, linkdinColorImg, linkdInImg, twitterColorImg, twitterImg } from '../assets'
import { Navbar } from '../components'

const Community = () => {

    const onHoverImg = (e,data) => {
        e.target.src = data;
    };

    const onLeaveImg = (e,data) => {
        e.target.src = data;
    };

    return (
        <div >
            <Navbar />
            
            <div className='w-[300px] h-[300px] absolute rounded-full blur-3xl z-[-1] left-[-100px] top-[30vh] md:top-[50vh] bg-[#9747FF]'>
            </div>
            <div className='w-[300px] h-[300px] absolute rounded-full blur-3xl z-[-1] right-0 bottom-[-50vh] md:bottom-[40vh] bg-[#6654F1]'>
            </div>
            <div className='flex justify-center items-center pt-[15vh] mb-20'>

                <div className='w-[70vw] h-[100%]  p-14 bg-gradient-to-br from-[#131313] rounded-2xl to-transparent border-[#474747] border-[0.5px]'>
                    <div className='flex justify-center'>
                        <div className=' text-transparent bg-clip-text bg-gradient-to-r from-[#FA709A] to-[#FEE140] lg:text-5xl md:text-4xl text-3xl font-semibold '>
                            Connect to me on
                        </div>
                    </div>


                    <div className='flex flex-col md:flex-row  items-center justify-evenly py-10 px-20'>

                        <a href="https://www.linkedin.com/in/sawan-bhattacharya/" target="_blank" rel="noreferrer">
                            <div className='flex flex-col justify-center space-y-5 m-5 items-center'>
                                <img onMouseEnter={(e) => onHoverImg(e,linkdinColorImg)} onMouseLeave={(e) => onLeaveImg(e,linkdInImg)} className='min-w-fit' src={linkdInImg} alt="linkdin" />
                                <div>
                                    <div>Sawan Bhattacahrya</div>
                                </div>
                            </div>
                        </a>

                        <a href="https://twitter.com/kriptonian8" target="_blank" rel="noreferrer">
                            <div className='flex flex-col justify-center items-center space-y-5 m-5'>
                                <img onMouseEnter={(e) => onHoverImg(e,twitterColorImg)} onMouseLeave={(e) => onLeaveImg(e,twitterImg)} className='min-w-fit' src={twitterImg} alt="twitter" />
                                <div>
                                    <div>@kriptonian8</div>
                                </div>
                            </div>
                        </a>

                        <a href="https://discord.com/users/448359781095440385" target="_blank" rel="noreferrer">
                            <div className='flex flex-col justify-center items-center space-y-5 m-5'>
                                <img onMouseEnter={(e) => onHoverImg(e,discordColorImg)} onMouseLeave={(e) => onLeaveImg(e,discordImg)} className='min-w-fit' src={discordImg} alt="discord" />
                                <div>
                                    <div>kriptonian#4773</div>
                                </div>
                            </div>
                        </a>

                        <a href="https://www.instagram.com/_kriptonian/" target="_blank" rel="noreferrer">
                            <div className='flex flex-col justify-center items-center space-y-5 m-5'>
                                <img onMouseEnter={(e) => onHoverImg(e,instagramColorImg)} onMouseLeave={(e) => onLeaveImg(e,instagramImg)} className='min-w-fit' src={instagramImg} alt="instagram" />
                                <div>
                                    <div>_kriptonian</div>
                                </div>
                            </div>
                        </a>


                    </div>

                </div>
            </div>



        </div>
    )
}

export default Community