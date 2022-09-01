import React from 'react'
import { exodusLogo, metamaskLogo, safepalLogo, trustwalletLogo, walletConnectLogo } from '../assets'
import { CreateandSellNftSection, HeroSection, Navbar, NftTrendSection, TopCollection } from '../components'

const Home = () => {
  return (
    <div className=' text-white font-poppins'>
      <Navbar />
      <HeroSection />


      <div className='mt-32'>
        <div className='flex justify-evenly m-9 px-4'>
          <img src={metamaskLogo} alt="metamask" />
          <img src={trustwalletLogo} alt="trustwallet" />
          <img src={walletConnectLogo} alt="walletconnect" />
        </div>
        <div className='flex justify-evenly m-9 px-4'>
          <img src={exodusLogo} alt="metamask" />
          <img src={safepalLogo} alt="trustwallet" />
        </div>
      </div>


      {/* <NftTrendSection /> */}
      <TopCollection />
      <CreateandSellNftSection />
    </div>





  )
}

export default Home