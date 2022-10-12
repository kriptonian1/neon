import React from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { nftUploadLogo } from '../assets'
import { Navbar } from '../components'
import { Button } from '../components/common'

const CreateNFt = () => {

    const [picture, setPicture] = useState();

    const handelUpload = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setPicture(URL.createObjectURL(img));
        }

    }

    return (
        <div>
            <Helmet>
                <title>Create Nft</title>
            </Helmet>
            <Navbar />
            <div className='flex justify-evenly m-5'>
                <div>
                    <div className='flex'>
                        <div className='text-5xl md:text-4xl font-clashDisplay font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3F51B1] via-[#A86AA4]  to-[#FFCB70]'>
                            Create New Item
                        </div>
                    </div>

                    <div className='m-6 text-sm'>
                        <span className='text-red-600'>*</span> Required fields
                    </div>
                    <div>
                        <div className='text-2xl'>
                            Image, Video, Audio, or 3D Model <span className='text-red-600'>*</span>
                        </div>
                        <div className='text-xs text-[#C9C3C3]'>
                            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
                        </div>
                        <div className='flex my-6'>
                            <label className='flex items-center cursor-pointer justify-center rounded-lg bg-gradient-to-br from-transparent to-[#131313] p-14  border border-dashed border-white'>
                                {
                                    picture ?

                                        <img src={picture} className='w-full h-[250px]' />


                                        :
                                        <img className='w-[20vw] md:w-[5vw]' src={nftUploadLogo} alt="" />
                                }


                                <input className='hidden' onChange={(e) => handelUpload(e)} type="file" accept='image/*' id="" />
                            </label>
                        </div>

                        {/* {console.log(picture)}
                        <div className='m-5 bg-white'>
                            <img src={picture} alt="" />
                        </div> */}

                    </div>

                    <div className='my-6'>
                        <div className='text-2xl '>
                            Name  <span className='text-red-600'>*</span>
                        </div>
                        <input className='rounded-xl bg-[#FFFFFF24] my-6' placeholder='Item Name ' type="text" />
                    </div>

                    <div className='my-6'>
                        <div className='text-2xl '>
                            External link
                        </div>
                        <div className='text-xs text-[#C9C3C3]'>
                            OpenSea will include a link to this URL on this item's detail page, so that users can click to learn more about it. <br />
                            You are welcome to link to your own webpage with more details.
                        </div>
                        <input className='rounded-xl bg-[#FFFFFF24] my-6' placeholder='https://yoursite.io/item/69' type="text" />
                    </div>

                    <div className='my-6'>
                        <div className='text-2xl '>
                            Description
                        </div>
                        <div className='text-xs text-[#C9C3C3]'>
                            The description will be included on the item's detail page underneath its image. Markdown syntax is supported.
                        </div>
                        {/* <input className='rounded-xl bg-[#FFFFFF24] my-6' placeholder='Describe your NFT' type='text' /> */}
                        <textarea className='rounded-xl bg-[#FFFFFF24] my-6 h-[10vh]' placeholder='Describe your NFT' name="description" cols="30" rows="10" />
                    </div>

                    <button className='py-3 px-11 rounded-xl mt-10 font-semibold bg-[#2F80ED] hover:bg-[#2E8EEE]'>
                        Create
                    </button>


                </div>
            </div>
        </div>
    )
}

export default CreateNFt