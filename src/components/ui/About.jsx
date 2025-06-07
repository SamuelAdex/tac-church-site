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
                <p className='md:text-[16px] text-[14px]'>{"Empowering individuals to become global champoions, unleashing their full potential, and making a lasting impact on the world. Raising up a generation of champions who walk in divine purpose, empowered by faith, and fueled by passion to impact the world for God's glory."}</p>
            </div>
            <div className='flex-[1.5] space-y-4'>
                <div className='md:text-[35px] semibold font-[700]'><span className='text-orange-200 semibold'>We Believe In</span> Our Vision and Our Mission</div>
                <div className='flex md:flex-row flex-col gap-[20px]'>
                    {/* <Image src={imgBg} alt="" className='md:w-[300px] w-full object-cover shadow-md' /> */}
                    <div style={{backgroundImage: "linear-gradient(-180deg, rgba(0, 0, 0, 0.2) 60.31%, rgba(0, 0, 0, 0.9) 100%), url('https://res.cloudinary.com/samueladexcloudinary/image/upload/v1749296051/IMG-20250104-WA0057_copy_16_m8502e.png')", backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPositionY: "40px"}} className='relative bg-black md:flex-[1] md:w-[300px] w-full h-[400px]'></div>
                    <div className='space-y-3 md:flex-[1.6]'>
                        <p className='md:text-[16px] text-[14px]'>{"To provide a platform for prsonal and spiritual growth, skill development/mastery, and mentorship. Enquipping individuals to become champions in their fields, and ambassadors of hope and love in a world in need of God's presence."}</p>
                        <div style={{backgroundImage: "linear-gradient(-180deg, rgba(0, 0, 0, 0.2) 60.31%, rgba(0, 0, 0, 0.9) 100%), url('https://res.cloudinary.com/samueladexcloudinary/image/upload/v1749296054/WhatsApp_Image_2024-08-29_at_13.12.17_a44be71e_copy_10_mvsfei.png')", backgroundSize: 'cover'}} className='relative w-full bg-black md:h-[315px] h-[250px]'>
                        
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