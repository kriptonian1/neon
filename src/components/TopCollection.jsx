import React, { useState } from 'react'
import topCollData from '../../testData/topCollData';
import { Button, CardsTop } from './common'

const TopCollection = () => {

    const [isSelected, setIsSelected] = useState(true);

    const changeColorSelected = isSelected ? "blue" : "transparent";

    return (
        <div className='mt-[27vh]'>
            <div className='flex justify-center items-center'>
                <div className=' font-clashDisplay text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1]'>
                    Top Collections
                </div>
            </div>

            <div className='flex justify-center items-center space-x-7 m-[8vh]'>
                <Button color="blue">
                    Art
                </Button>
                <Button color="transparent">
                    Collectibles
                </Button>
                <Button color="transparent">
                    Metaverse
                </Button>
                <Button color="transparent">
                    Virtual Worlds
                </Button>
                <Button color="transparent">
                    Sports
                </Button>
                <Button color="transparent">
                    Music
                </Button>
            </div>

            <div className='flex justify-center items-center '>
                <div className='inline-grid grid-cols-4 gap-5'>
                    {topCollData.map((data, index) => {
                        return (
                            <CardsTop key={index}
                                image={data.image}
                                title={data.title}
                                creator={data.creator}
                                eth={data.eth}
                                value={data.value}
                                price={data.price} />
                        )
                    })}
                </div>
            </div>

            <div className='flex justify-center my-10'>
                <Button >
                    see more
                </Button>
            </div>

        </div>
    )
}

export default TopCollection