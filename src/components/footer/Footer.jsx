import React from 'react'
import { logo } from '../../assets'

const Footer = () => {
  return (
    <div className='bg-[#0E1135]'>
      <div className='flex justify-center items-center flex-col pt-[11vh]'>

        <div className='font-clashDisplay text-3xl font-semibold '>
          Get More Updates
        </div>
        <div className='my-[5vh] m-5'>
          Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks
        </div>

        {/* email input */}
        <div className="relative">
          <input type="email" id="email" className="block p-4 pl-10 w-[29vw] text-sm text-gray-900 bg-[#D9D9D9] focus:outline-none rounded-full border border-[#D9D9D9] placeholder:text-[#3a3939]" placeholder="Your Email..." required />
          <button type="button" className="text-white absolute right-2.5 bottom-2.5 bg-[#2F80ED] hover:bg-blue-800  focus:outline-none focus:ring-blue-300 rounded-full text-sm px-6 py-2  font-semibold">I'm In</button>
        </div>

        <div className='my-[10vh] flex justify-center items-center border-b-[0.01px] w-[60vw] border-white'></div>

      </div>

      <div className='flex justify-evenly'>
        <div>
          <img className='w-44 my-5' src={logo} alt="Neon" />
          <div>
            the leading NFT Marketplace on Ethereum <br /> Home to the next generation of digital creators.<br />Discover the best NFT collections.
          </div>
        </div>


        <ul>
          <div className='text-3xl pb-4'>Marketplace</div>
          <li>Explore</li>
          <li>Articles</li>
          <li>How it Works</li>
          <li>Help</li>
        </ul>
        
        <ul>
          <div className='text-3xl pb-4'>Links</div>
          <li>Tokens</li>
          <li>API</li>
          <li>Big Bounty</li>
          <li>Become Partners</li>
        </ul>

      </div>

      <div className='flex space-x-1 items-center justify-center py-6'>
        <div>Made with ❤️ by</div> <a href="https://github.com/kriptonian1"> Kriptonian</a>
      </div>

    </div>
  )
}

export default Footer