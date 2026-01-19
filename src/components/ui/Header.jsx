"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '@/public/assets/img/ch logo.png'
import Link from 'next/link';
import Button from '../elements/Button';
import {MdClose, MdMenu} from 'react-icons/md';

const Header = () => {
    const [bgColor, setBgColor] = useState(false);

    const [isNav, setIsNav] = useState(false)

  const changebgColor = ()=>{
    if(window.scrollY >= 60){
        setBgColor(true)
    }else{
        setBgColor(false)
    }
  }


  useEffect(() => {
    changebgColor()

    window.addEventListener('scroll', changebgColor)
  }, [])


  return (
    <div className={`fixed top-0 w-full p-2 z-20 ${bgColor ? 'backdrop-blur-md bg-[rgba(25,24,24,0.53)]' : ''}`}>
        <div className='flex md:w-[90%] m-auto w-full items-center justify-between'>
            <Link href={'/'} className=''>
                <Image src={logo} alt="" className='w-[64px] h-[64px]' />
            </Link>
            <div className='md:flex hidden items-center gap-[30px] justify-between'>
                <div className='flex md:text-[14px] uppercase text-white font-[600] items-center gap-[60px] justify-between'>
                    <Link href={"/#about"}>About</Link>
                    <Link href={"/#events"}>Events</Link>
                    <Link href={"/school-of-ministry"}>Ministry School</Link>
                    {/* <Link href={"/#contact"}>Location</Link> */}
                </div>

                <Link href="#contact" className=''>
                    <Button
                        text={"PRAYER REQUEST"}
                        btnStyle={"p-3 rounded-full bg-orange-200 w-[200px] text-black semibold"}
                    />
                </Link>
            </div>
            <MdMenu onClick={()=> setIsNav(!isNav)} className='md:hidden flex text-white text-4xl cursor-pointer' />
        </div>
        {isNav && <div className='w-[300px] slide-left bg-white h-[100dvh] absolute right-0 top-0'>
            <div className='flex justify-end p-3'>
                <MdClose onClick={()=> setIsNav(!isNav)} className='text-3xl cursor-pointer' />
            </div>
            <div className='flex flex-col p-8 gap-8'>
                <div className='text-[14px] regular uppercase text-black font-[600] flex flex-col gap-6'>
                    <Link href={"/#about"}>About</Link>
                    <Link href={"/#events"}>Events</Link>
                    <Link href={"/school-of-ministry"}>Ministry School</Link>
                    {/* <Link href={"/#contact"}>Location</Link> */}
                </div>

                <Link href="#contact" className=''>
                    <Button
                        text={"PRAYER REQUEST"}
                        btnStyle={"p-3 rounded-full bg-orange-200 w-[200px] text-black semibold"}
                    />
                </Link>
            </div>
        </div>}
    </div>
  )
}

export default Header