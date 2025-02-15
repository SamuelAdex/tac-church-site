"use client";

import React, { useRef } from 'react';
import { TbPlayerPause, TbPlayerPlay } from 'react-icons/tb';
// import intro from '@/public/assets/vid/church-logo 2_1.mp4'

const Showcase = () => {
    let vidRef = useRef();
    const [isPlaying, setIsPlaying] = React.useState(false);

    const handlePlayPause = () => {
        if (isPlaying) {
            vidRef.current.pause();
        } else {
            vidRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

  return (
    <div className='bg-black py-20 relative'>
        <div className='text-center absolute h-[70vh] grid place-items-center w-full z-10'>
            <div className='text-center mt-14'>
               <div onClick={()=>{
                    handlePlayPause()
               }} className='m-auto border-[1px] rounded-full grid place-items-center cursor-pointer bg-orange-200 w-[80px] h-[80px]'>
{isPlaying ? <TbPlayerPause className='text-[2rem]' /> : <TbPlayerPlay className='text-[2rem]' />}
               </div>
                <div className='text-orange-200 bold md:text-[42px]'>Watch Past Sermons</div>
                <p>voluptate consequatur quam fugit nulla veritatis odio. Fuga, illo illum consectetur sunt amet cumque distinctio consequatur.</p>
            </div>
        </div>
        <video ref={vidRef} width={60} height={57.27} className="video min-w-[100%] filter grayscale-50 h-[70vh] object-cover">
            <source src={'https://res.cloudinary.com/samueladexcloudinary/video/upload/v1739544209/church-logo_2_1_gie6v3.mp4'} type="video/mp4" />
        </video>
    </div>
  )
}

export default Showcase