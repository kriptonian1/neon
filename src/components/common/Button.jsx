import React from 'react'

const Button = ({ children }) => {
  return (

    <button className='bg-[#2F80ED] hover:bg-[#2E8EEE] py-3 px-5 rounded-full font-semibold'>
      {children}
    </button>

  )
}

export default Button