"use client";

import Image from 'next/image';
import React from 'react'
import imgBg from '@/public/assets/img/1.jpeg'

const About = () => {
  return (
    <div className='bg-white py-24 md:px-0 px-8' id='about'>
        <div className='md:w-[90%] w-full m-auto flex md:flex-row flex-col gap-[30px] items-center'>
            <div className='space-y-3 flex-[1]'>
                <div className='md:text-[62px] text-[35px] font-[700] md:w-[300px] md:leading-[60px] bold text-black'>Who We Are</div>
                <p className='md:text-[16px] text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellat esse aut, veritatis sed corporis explicabo sequi delectus! Assumenda, expedita! Non sunt soluta fugit, delectus minus sit doloribus illum molestiae.</p>
            </div>
            <div className='flex-[1.5] space-y-4'>
                <div className='md:text-[35px] semibold font-[700]'><span className='text-orange-200 semibold'>We Believe</span> Our Vision & Our Mission</div>
                <div className='flex md:flex-row flex-col gap-[20px]'>
                    {/* <Image src={imgBg} alt="" className='md:w-[300px] w-full object-cover shadow-md' /> */}
                    <div style={{background: "linear-gradient(-180deg, rgba(0, 0, 0, 0.4) 20.31%, rgba(0, 0, 0, 0.9) 100%), url('https://res.cloudinary.com/samueladexcloudinary/image/upload/v1739630097/IMG_9215_w8ophl.jpg')", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}} className='relative md:flex-[1] md:w-[300px] w-full h-[400px]'></div>
                    <div className='space-y-3 md:flex-[1.6]'>
                        <p className='md:text-[16px] text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique debitis non illum doloribus eius exercitationem ut ea, </p>
                        <div style={{background: "linear-gradient(-180deg, rgba(0, 0, 0, 0.4) 20.31%, rgba(0, 0, 0, 0.9) 100%), url('https://res.cloudinary.com/samueladexcloudinary/image/upload/v1739548970/WhatsApp_Image_2024-09-26_at_11.30.07_PM_2_zaq9me.jpg')", backgroundSize: 'cover'}} className='relative w-full h-[315px]'>
                        
                        </div>
                        {/* <Image src={imgBg} alt='' className='h-[200px] object-cover shadow-md' /> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About