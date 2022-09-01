import React from 'react'

/**
 * 
 * @param {string} image 
 * @param {string} title 
 * @param {string} time 
 * @returns react component
 */

const ArticleCard = ({image, title, time}) => {
    return (
        <div className='bg-gradient-to-br from-transparent to-[#131313] border-[#474747] border-[0.5px] w-[25rem] h-auto  rounded-2xl'>
            <img className='rounded-t-2xl' src={image} alt="" />

            <div className='m-4 '>
                <div className='font-semibold pb-4'>
                    {title}
                </div>

                <div className='text-[#A7A7A7]'>
                    {time}
                </div>
            </div>


        </div>
    )
}

export default ArticleCard