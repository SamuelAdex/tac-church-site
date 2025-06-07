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
                    <p className=''>{"Our Unified Services (Combined Services) take place on rare occasions, especially during our mid-year or end-of-year thanksgiving services, and also during the grand finale of any of our programs. It's usually two services: First Service - 7:30 AM, and Second Service - 9:30 AM."}</p>
                    <Button 
                        text={"LEARN MORE"}
                        btnStyle={"bg-orange-200 text-black p-3"}
                    />
                </div>
                <div style={{background: "linear-gradient(-180deg, rgba(0, 0, 0, 0.4) 60.31%, rgba(0, 0, 0, 0.9) 100%), url('https://res.cloudinary.com/samueladexcloudinary/image/upload/v1748796521/FB_IMG_1748600940909_rdtzlu.jpg')", backgroundSize: 'cover'}} className='relative md:flex-[1.3] md:w-auto w-full h-[350px]'>
                    <div className='absolute p-6 md:w-[350px] w-full text-white'>
                        <div className='md:text-[40px] text-[28px] md:leading-[40px] leading-[30px] bold'>Two Services: 2hrs For Each Service</div>
                    </div>
                    {/* <Image src={imgBg} alt='' className='' /> */}
                </div>
            </div>
            <div className='flex md:flex-row flex-col-reverse items-center justify-center gap-[30px]'>
                <div style={{background: "linear-gradient(-180deg, rgba(0, 0, 0, 0.4) 60.31%, rgba(0, 0, 0, 0.9) 100%), url('https://res.cloudinary.com/samueladexcloudinary/image/upload/v1748796495/FB_IMG_1748600157726_sltztm.jpg')", backgroundSize: "80%", backgroundRepeat: 'no-repeat'}} className='relative md:flex-[1.3] md:w-auto w-full h-[350px]'>
                    <div className='absolute p-6 md:w-[400px] w-full text-white'>
                        <div className='md:text-[40px] text-[28px] md:leading-[40px] leading-[30px] bold'>FIVE Services: 1hr:10mins for Each Service</div>
                    </div>
                    {/* <Image src={imgBg} alt='' className='' /> */}
                </div>
                <div className='flex-[1] space-y-2'>
                    <div className='md:text-[32px] semibold'>FIVE SERVICES</div>
                    <p className=''>Our five power-packed impartation services were initiated to establish a system where the church becomes convenient and accommodating to as many people as possible. The services are scheduled as follows:
                        <li className="ml-[2rem]">First Service - 7:00 AM (our Wisdom Class, where we receive wisdom to stand out in every sphere of life)</li>
                        <li className="ml-[2rem]">Second Service - 8:00 AM</li>
                        <li className="ml-[2rem]">Third Service - 9:10 AM</li>
                        <li className="ml-[2rem]">Fourth Service - 10:20 AM</li>
                        <li className="ml-[2rem]">Fifth Service - 11:20 AM</li>
                        Each service is a maximum of 1 hour and 10 minutes.</p>
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