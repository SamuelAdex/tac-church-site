"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { TbApple, TbBrandFacebook, TbBrandInstagram, TbBrandTiktok, TbBrandYoutube } from 'react-icons/tb';
import { IoLogoGooglePlaystore, IoLogoApple  } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='bg-orange-200 py-12 md:px-0 px-8'>
        <div className='md:w-[90%] m-auto flex md:flex-row flex-col md:items-center md:gap-0 gap-8 justify-between'>
            <div className='md:flex-[1]'>
                <div className='flex items-center md:justify-start justify-center'>
                    <Image src={'https://res.cloudinary.com/samueladexcloudinary/image/upload/v1739623613/ch_logo_1_hfktmh.png'} width={200} height={200} alt='' className='w-[80px] animate-pulse' />
                    <div className='leading-[20px]'>
                        <div className='semibold'>THE ARENA OF CHAMPIONS</div>
                        <div className='text-[12px]'>HOME OF CHAMPIONS</div>
                    </div>
                </div>
                <div className='md:text-[16px] md:w-[300px] md:text-left text-center md:px-3 text-[14px] text-black'>The Church with the difference, raising Champions for Global Impact.</div>
                <div className='flex items-center md:justify-start justify-center gap-[30px] md:px-3 mt-4'>
                    <Link href={"https://www.facebook.com/theChampionshousechurch?mibextid=ZbWKwL"} target='_blank'> 
                        <TbBrandFacebook className='md:text-2xl text-[25px] animate-pulse' />
                    </Link>
                    <Link href={"https://vm.tiktok.com/ZMSk5fgDD/"} target='_blank'>
                        <TbBrandTiktok className='md:text-2xl text-[25px] animate-pulse' />
                    </Link>
                    <Link href={"https://www.instagram.com/thearenaofchampionstac?igsh=MnV2NXR6a2ZtemM4"} target='_blank'>
                        <TbBrandInstagram className='md:text-2xl text-[25px] animate-pulse' />
                    </Link>
                    <Link href={"https://youtube.com/@thearenaofchampions-cw2rl?si=KGVyfEQPiCmd10KP"} target='_blank'>
                        <TbBrandYoutube className='md:text-2xl text-[25px] animate-pulse' />
                    </Link>
                </div>
            </div>
            <div className='flex md:justify-between md:gap-0 gap-6 md:flex-[1.5] md:flex-row flex-col'>
                <div className='flex flex-col space-y-2'>
                    <div className='semibold md:text-[14px] text-[12px]'>QUICK LINKS</div>
                    <Link href={"#about"} className='md:text-[13px] text-[11px] font-[500]'>About</Link>
                    <Link href={"#events"} className='md:text-[13px] text-[11px] font-[500]'>Events</Link>
                    <Link href={"#contact"} className='md:text-[13px] text-[11px] font-[500]'>Prayer Request</Link>
                    <Link href={"/privacy"} className='md:text-[13px] text-[11px] font-[500]'>Privacy Policy</Link>
                    <Link href={"/terms-and-conditions"} className='md:text-[13px] text-[11px] font-[500]'>Terms and Conditions</Link>
                </div>
                <div className='flex flex-col space-y-2'>
                    <div className='semibold md:text-[14px] text-[12px]'>SPECIALS</div>
                    <Link href={"#events"} className='md:text-[13px] text-[11px] font-[500]'>Young Ministers Hangout</Link>
                    <Link href={"#events"} className='md:text-[13px] text-[11px] font-[500]'>Singles & Married Timeout</Link>
                    <Link href={"#events"} className='md:text-[13px] text-[11px] font-[500]'>Lyric Praise Concert</Link>
                </div>
                <div className=''>
                    <div className='md:text-[14px] text-[12px] semibold uppercase'>Download Our Digital Library App</div>
                    <div className='flex md:flex-row flex-col items-center gap-2 mt-2'>
                        <Link target="_blank" href={"https://play.google.com/store/apps/details?id=com.samueladex.tcdl&hl=en"} className='flex items-center md:w-auto w-full cursor-pointer text-white gap-2 bg-black rounded-[12px] p-4'>
                            <IoLogoGooglePlaystore className='text-4xl' />
                            <div className='md:leading-[18px]'>
                                <div className='md:text-[12px] text-[10px]'>GET IT ON</div>
                                <div className='md:text-[20px] semibold'>Google Play</div>
                            </div>
                        </Link>
                        <div className='flex items-center md:w-auto w-full cursor-pointer text-white gap-2 bg-black rounded-[12px] p-4'>
                            <IoLogoApple  className='text-4xl' />
                            <div className='md:leading-[18px]'>
                                <div className='md:text-[12px] text-[10px]'>Download on the</div>
                                <div className='md:text-[20px] semibold'>App Store</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer