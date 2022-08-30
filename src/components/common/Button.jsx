import React from 'react'

/**
 * 
 * @description Button component with different color
 * @param {string} color blue or transparent 
 * @returns react component
 */
const Button = (props) => {

  const blue = "bg-[#2F80ED] hover:bg-[#2E8EEE]";
  const transparent = "bg-transparent border-[1px] border-white hover:bg-[#ffffff21]";

  const classes = props.color === "blue" ? blue : transparent;

  return (

    <button onClick={props.onClick} className={`${classes} py-3 px-11 rounded-full font-semibold`}>
      {props.children}
    </button>

  )
}

export default Button