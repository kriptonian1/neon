import React, { useState } from 'react'
import topCollData from '../../testData/topCollData';
import { Button, CardsTop } from './common'
import { Tab } from '@headlessui/react'

const TopCollection = () => {

    const btn = ["Art", "Collectibles", " Metaverse", "Virtual Worlds", "Sports", "Music"];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className='mt-[27vh]'>
            <div className='flex justify-center items-center'>
                <div className=' font-clashDisplay text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1]'>
                    Top Collections
                </div>
            </div>

            <Tab.Group >
                <Tab.List className='flex justify-center items-center space-x-7 m-[8vh]'>
                    {/* {btn.map(item => {
                        <Tab  className={({ selected }) =>
                            classNames(
                                'bg-[#2F80ED] hover:bg-[#2E8EEE]',
                                'py-3 px-11 rounded-full font-semibold',
                                selected
                                    ? 'bg-[#2F80ED] hover:bg-[#2E8EEE]'
                                    : 'bg-transparent border-[1px] border-white hover:bg-[#ffffff21]'
                            )
                        }>

                            {console.log(item)}
                            {item}

                        </Tab>
                    })} */}
                    <Tab className={({ selected }) =>
                        classNames(
                            'bg-[#2F80ED] hover:bg-[#2E8EEE]',
                            'py-3 px-11 rounded-full font-semibold',
                            selected
                                ? 'bg-[#2F80ED] hover:bg-[#2E8EEE]'
                                : 'bg-transparent border-[1px] border-white hover:bg-[#ffffff21]'
                        )
                    }>

                        Art

                    </Tab>
                    <Tab className={({ selected }) =>
                        classNames(
                            'bg-[#2F80ED] hover:bg-[#2E8EEE]',
                            'py-3 px-11 rounded-full font-semibold',
                            selected
                                ? 'bg-[#2F80ED] hover:bg-[#2E8EEE]'
                                : 'bg-transparent border-[1px] border-white hover:bg-[#ffffff21]'
                        )
                    }>
                        Collectibles

                    </Tab>
                    <Tab className={({ selected }) =>
                        classNames(
                            'bg-[#2F80ED] hover:bg-[#2E8EEE]',
                            'py-3 px-11 rounded-full font-semibold',
                            selected
                                ? 'bg-[#2F80ED] hover:bg-[#2E8EEE]'
                                : 'bg-transparent border-[1px] border-white hover:bg-[#ffffff21]'
                        )
                    }>

                        Metaverse

                    </Tab>
                    <Tab className={({ selected }) =>
                        classNames(
                            'bg-[#2F80ED] hover:bg-[#2E8EEE]',
                            'py-3 px-11 rounded-full font-semibold',
                            selected
                                ? 'bg-[#2F80ED] hover:bg-[#2E8EEE]'
                                : 'bg-transparent border-[1px] border-white hover:bg-[#ffffff21]'
                        )
                    }>

                        Virtual Worlds

                    </Tab>
                    <Tab className={({ selected }) =>
                        classNames(
                            'bg-[#2F80ED] hover:bg-[#2E8EEE]',
                            'py-3 px-11 rounded-full font-semibold',
                            selected
                                ? 'bg-[#2F80ED] hover:bg-[#2E8EEE]'
                                : 'bg-transparent border-[1px] border-white hover:bg-[#ffffff21]'
                        )
                    }>

                        Sports
                    </Tab>
                    <Tab className={({ selected }) =>
                        classNames(
                            'bg-[#2F80ED] hover:bg-[#2E8EEE]',
                            'py-3 px-11 rounded-full font-semibold',
                            selected
                                ? 'bg-[#2F80ED]  hover:bg-[#2E8EEE]'
                                : 'bg-transparent border-[1px] border-white hover:bg-[#ffffff21]'
                        )
                    }>

                        Music

                    </Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
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
                    </Tab.Panel>
                    <Tab.Panel>
                        {/* {setSelected(2)} */}
                        Content 2
                    </Tab.Panel>
                    <Tab.Panel>Content 3</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>

            {/* <div className='flex justify-center items-center space-x-7 m-[8vh]'>
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
            </div> */}

            {/* <div className='flex justify-center items-center '>
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
            </div> */}

            <div className='flex justify-center my-10'>
                <Button >
                    see more
                </Button>
            </div>

        </div>
    )
}

export default TopCollection