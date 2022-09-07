import React from 'react'


/**
 * 
 * @param {int} price price of the token 
 * @returns react component
 */
const CardsTop = ({image,title,creator,eth,value,price}) => {

  return (
    <div className='bg-gradient-to-br from-transparent to-[#131313] border-[#474747] border-[0.5px] w-[300px] h-[472px] p-4 rounded-2xl'>

      <img className='rounded-xl' decoding='sync' loading='eager' src={image} alt="nft" />


      <div className='font-poppins font-semibold mt-3 mb-1'>
        {title}
      </div>

      <div className='text-xs font-thin text-[#A7A7A7]'>
        {creator}
      </div>

      <div className='mt-12 font-poppins flex justify-between'>
        <div>
          <div className='font-semibold'>
          {eth}
          </div>
          <div className='font-extralight text-xs'> 
          Floor Price 
          </div>
        </div>
        
        <div>
          <div className='font-semibold'>
          {value}
          </div>
          <div className={`font-extralight text-xs text-red-500 ${(price > 0) ? `text-[#24FF00]` : `text-[#FF0000]`}`}> 
          {`${price}%`} 
          </div>
        </div>


      </div>

    </div>
  )
}

export default CardsTop