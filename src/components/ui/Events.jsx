"use client";

import Image from 'next/image';
import React from 'react'

const Events = () => {
  return (
    <div className='overflow-hidden py-14' id='events'>
        <div className='w-[90%] m-auto'>
            <div className='md:text-[40px] text-[35px] bold text-center'>Our Yearly Events</div>
            <p className='text-center m-auto md:w-[600px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus odit cupiditate ab magni molestiae illum nulla ipsam.</p>
        </div>
        <div className='slides flex items-center gap-3 mt-8'>
            {[1,2,3,4,5,6,7,8,9,10,11,12].map((_, i)=>(
                <div style={{background: "linear-gradient(-180deg, rgba(0, 0, 0, 0.4) 60.31%, rgba(0, 0, 0, 0.9) 100%), url('https://res.cloudinary.com/samueladexcloudinary/image/upload/v1739548970/WhatsApp_Image_2024-09-26_at_11.30.07_PM_2_zaq9me.jpg')", backgroundSize: 'cover'}} className='relative w-[400px] h-[300px] object-cover' key={i}>
                    <div className='absolute h-[300px] bg-[rgba(0,0,0,0.15)] w-full grid place-items-center'>
                        <div className='semibold md:w-[200px] md:leading-[18px] text-white text-center'>LYRICS PRAISE CONCERT</div>
                    </div>
                    {/* <Image src={'https://res.cloudinary.com/samueladexcloudinary/image/upload/v1739548970/WhatsApp_Image_2024-09-26_at_11.30.07_PM_2_zaq9me.jpg'} width={100} height={100} alt='' className='w-[300px] object-cover h-[200px]' /> */}
                </div>
            ))}
        </div>
        <div className='slides-1 flex items-center gap-3 mt-4'>
            {[1,2,3,4,5,6,7,8,9,10,11,12].map((_, i)=>(
                <div style={{background: "linear-gradient(-180deg, rgba(0, 0, 0, 0.4) 60.31%, rgba(0, 0, 0, 0.9) 100%), url('https://res.cloudinary.com/samueladexcloudinary/image/upload/v1739548970/Screenshot_2024-09-27_at_07-24-00_20_Facebook_nfofvv.png')", backgroundPosition: '20%', backgroundSize: 'cover'}} className='relative w-[400px] h-[300px] object-cover' key={i}>
                    <div className='absolute h-[300px] bg-[rgba(0,0,0,0.15)] w-full grid place-items-center'>
                        <div className='semibold md:w-[200px] md:leading-[18px] text-white text-center'>LYRICS PRAISE CONCERT</div>
                    </div>
                </div>
            ))}
        </div>
        <div className='slides flex items-center gap-3 mt-4'>
            {[1,2,3,4,5,6,7,8,9,10,11,12].map((_, i)=>(
                <div style={{background: "linear-gradient(-180deg, rgba(0, 0, 0, 0.4) 60.31%, rgba(0, 0, 0, 0.9) 100%), url('https://res.cloudinary.com/samueladexcloudinary/image/upload/v1739548958/Screenshot_2024-09-27_at_07-29-59_20_Facebook_kqoutc.png')", backgroundPosition: '20%', backgroundSize: 'cover'}} className='relative w-[400px] h-[300px] object-cover' key={i}>
                    <div className='absolute h-[300px] bg-[rgba(0,0,0,0.15)] w-full grid place-items-center'>
                        <div className='semibold md:w-[200px] md:leading-[18px] text-white text-center'>LYRICS PRAISE CONCERT</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Events