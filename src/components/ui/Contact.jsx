"use client";

import Image from 'next/image';
import React from 'react'
import Button from '../elements/Button';

const Contact = () => {
  return (
    <div className='bg-black md:px-14 md:py-24 py-14 px-8 space-y-24' id='contact'>
        <div className='m-auto md:w-[90%] grid place-items-center'>
            <div className='flex md:flex-row flex-col items-center md:text-left text-center justify-center md:gap-8 gap-16'>
                <div className='flex-[1]'>
                    <Image style={{boxShadow: '-35px 40px 2px 5px #fed7aa'}} src={'https://res.cloudinary.com/samueladexcloudinary/image/upload/v1739556400/Group_19_uuyz7i.png'} width={500} height={500} alt='' className='w-[300px] m-auto' />
                </div>

                <div className='flex-[1]'>
                    <div className='text-white md:w-[500px] md:leading-[60px] leading-[35px] md:text-[60px] text-[32px] bold'>Our Father. Our Covering. Our Mentor</div>
                    <p className='text-gray-200 md:w-[500px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid maiores vel nulla magni facere maxime dolor autem iste qui, sapiente,</p>
                </div>
            </div>
        </div>
        <div className='m-auto flex justify-center'>
            <div className='md:w-[80%] w-full space-y-6'>
                <div className='flex md:flex-row flex-col items-center gap-3'>
                    <div className='flex flex-col gap-3 w-full'>
                        <label className='text-white'>Name</label>
                        <input className='border-b-[1px] py-2 focus:outline-none text-white font-mono text-[12px] w-full border-gray-300 bg-transparent' type='text' placeholder='Enter your name' />
                    </div>
                    <div className='flex flex-col gap-3 w-full'>
                        <label className='text-white'>Email</label>
                        <input className='border-b-[1px] py-2 focus:outline-none text-white font-mono text-[12px] w-full border-gray-300 bg-transparent' type='email' placeholder='Enter your email address' />
                    </div>
                </div>
                <div className='flex flex-col gap-3 w-full'>
                    <label className='text-white'>Phone Number</label>
                    <input className='border-b-[1px] py-2 focus:outline-none text-white font-mono text-[12px] w-full border-gray-300 bg-transparent' type='text' placeholder='Enter phone number' />
                </div>
                <div className='flex flex-col gap-3 w-full'>
                    <label className='text-white'>Prayer Request</label>
                    <textarea className='border-b-[1px] py-2 focus:outline-none text-white font-mono text-[12px] w-full border-gray-300 bg-transparent' type='text' placeholder='Request...'></textarea>
                </div>

                <Button 
                    text={"Send Prayer Request"}
                    btnStyle={"bg-orange-200 text-black p-4 semibold"}
                />
            </div>
        </div>
    </div>
  )
}

export default Contact