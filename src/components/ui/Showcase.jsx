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
        <div className='bg-black py-20 relative md:h-[100vh] h-[40vh]'>
            <div className='text-center absolute grid place-items-center w-full z-10'>
                <div className='text-center m:mt-[3rem] mt-6'>
                    <div onClick={() => {
                        handlePlayPause()
                    }} className='m-auto border-[1px] rounded-full grid place-items-center cursor-pointer bg-orange-200 md:w-[80px] w-[50px] md:h-[80px] h-[50px]'>
                        {isPlaying ? <TbPlayerPause className='md:text-[2rem] text-[1rem]' /> : <TbPlayerPlay className='md:text-[2rem] text-[1rem]' />}
                    </div>
                    {isPlaying == false && (
                        <>
                            <div className='text-orange-200 bold md:text-[42px]'>Watch An extract of Our Sermon</div>
                            <p style={{textShadow: '2px 2px 2px black'}} className='text-white md:text-[18px] text-[14px]'>Experience the power of faith and community through our inspiring stories.</p>
                        </>
                    )}
                </div>
            </div>
            <video ref={vidRef} width={60} height={57.27} className="video min-w-[100%] w-full filter grayscale-50 md:h-[70vh]">
                <source className='rounded-[30px]' src={'https://res.cloudinary.com/samueladexcloudinary/video/upload/f_auto/q_auto/v1749299759/WhatsApp_Video_2025-06-07_at_1.19.01_PM_syqcd2.mp4'} type="video/mp4" />
                {/* <source src={'https://res.cloudinary.com/samueladexcloudinary/video/upload/f_auto/q_auto/v1749028222/tac-watch-vid_pkzxxf.mp4'} type="video/mp4" /> */}
                {/* <source src={'https://res.cloudinary.com/samueladexcloudinary/video/upload/v1739544209/church-logo_2_1_gie6v3.mp4'} type="video/mp4" /> */}
            </video>
        </div>
    )
}

export default Showcase