import React from 'react'
import { rectangle1, rectangle2, rectangle3 } from '../assets'
import { ArticleCard, Button } from './common'

const ArticleSection = () => {

    const articleData = [
        {
            img: rectangle1,
            title: "We've lowered marketplace fees on all your favorite NFTs",
            time: "January 23, 2022"
        },
        {
            img: rectangle2,
            title: "Your Ultimate Guide to Getting Started With NFTs on Rarible",
            time: "April 03, 2022"
        },
        {
            img: rectangle3,
            title: "Why Community Marketplaces are the future of NFT trading",
            time: "July 7, 2022"
        }
    ]

    return (
        <div className='mt-[27vh] mb-[10vh]'>
            <div className='flex justify-center items-center mb-[8vh]'>
                <div className=' font-clashDisplay text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1]'>
                    Top Collections
                </div>
            </div>

            <div className='flex space-x-5 justify-center'>
                {
                    articleData.map((data, index) => {
                        return (
                            <ArticleCard key={index}
                                image={data.img}
                                title={data.title}
                                time={data.time} />
                        )
                    })
                }
            </div>

            <div className="flex justify-center items-center mt-[8vh] ">
                <Button>
                    see more
                </Button>
            </div>


        </div>
    )
}

export default ArticleSection