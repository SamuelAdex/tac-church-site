"use client";

import Image from 'next/image';
import React from 'react';
import imgBg from '@/public/assets/img/1.jpeg';
import Button from '../elements/Button';

const Services = () => {
  return (
    <div className='bg-white grid place-items-center md:p-16'>
        <div className='bg-gray-100 md:w-[90%] w-full space-y-24 p-12 rounded-[20px]'>
            <div className='flex md:flex-row flex-col items-center justify-center gap-[30px]'>
                <div className='flex-[1] space-y-5'>
                    <div className='md:text-[32px] semibold'>UNIFIED SERVICE</div>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora est expedita et sed nulla placeat iure voluptatum ducimus consectetur, quidem accusamus? Velit sequi omnis corrupti accusantium? Dicta expedita quae repellendus.</p>
                    <Button 
                        text={"LEARN MORE"}
                        btnStyle={"bg-orange-200 text-black p-3"}
                    />
                </div>
                <div style={{background: "linear-gradient(-180deg, rgba(0, 0, 0, 0.4) 60.31%, rgba(0, 0, 0, 0.9) 100%), url('https://res.cloudinary.com/samueladexcloudinary/image/upload/v1739548970/WhatsApp_Image_2024-09-27_at_7.38.51_AM_ht4rsk.jpg')", backgroundSize: 'cover'}} className='relative md:flex-[1.3] md:w-auto w-full h-[350px]'>
                    <div className='absolute p-6 md:w-[350px] w-full text-white'>
                        <div className='md:text-[40px] text-[28px] md:leading-[40px] leading-[30px] bold'>This Sunday. Two Services. 7:30AM - 12PM.</div>
                    </div>
                    {/* <Image src={imgBg} alt='' className='' /> */}
                </div>
            </div>
            <div className='flex md:flex-row flex-col-reverse items-center justify-center gap-[30px]'>
                <div style={{background: "linear-gradient(-180deg, rgba(0, 0, 0, 0.4) 60.31%, rgba(0, 0, 0, 0.9) 100%), url('https://res.cloudinary.com/samueladexcloudinary/image/upload/v1739548970/WhatsApp_Image_2024-09-26_at_11.30.07_PM_2_zaq9me.jpg')", backgroundSize: 'cover'}} className='relative md:flex-[1.3] md:w-auto w-full h-[350px]'>
                    <div className='absolute p-6 md:w-[400px] w-full text-white'>
                        <div className='md:text-[40px] text-[28px] md:leading-[40px] leading-[30px] bold'>This Sunday. FOUR Services. 7:00AM - 12PM.</div>
                    </div>
                    {/* <Image src={imgBg} alt='' className='' /> */}
                </div>
                <div className='flex-[1] space-y-5'>
                    <div className='md:text-[32px] semibold'>FOUR SERVICES</div>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora est expedita et sed nulla placeat iure voluptatum ducimus consectetur, quidem accusamus? Velit sequi omnis corrupti accusantium? Dicta expedita quae repellendus.</p>
                    <Button 
                        text={"LEARN MORE"}
                        btnStyle={"bg-orange-200 text-black p-3"}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services