import React from 'react'
import { exodusLogo, metamaskLogo, safepalLogo, trustwalletLogo, walletConnectLogo } from '../assets'
import { ArticleSection, CreateandSellNftSection, Footer, HeroSection, Navbar, NftTrendSection, TopCollection } from '../components'

const Home = () => {
  return (
    <div className=' text-white font-poppins'>
      <Navbar />
      <HeroSection />


      <div className='w-[200px] md:w-full mt-32'>
        <div className='flex md:justify-around space-x-3 m-9 px-4'>
          <img src={metamaskLogo} alt="metamask" />
          <img src={trustwalletLogo} alt="trustwallet" />
          <img src={walletConnectLogo} alt="walletconnect" />
        </div>
        <div className='flex md:justify-around space-x-3 md:max-w-[100vw] m-9 px-4'>
          <img src={exodusLogo} alt="metamask" />
          <img src={safepalLogo} alt="trustwallet" />
        </div>
      </div>


      {/* <NftTrendSection /> */}
       <TopCollection />
      {/* <CreateandSellNftSection /> */}
      <ArticleSection /> 
      <Footer/>
    </div>
  )
}

export default Home