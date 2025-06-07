"use client";

import React, { useState } from 'react'
import Button from '../elements/Button';
import SupportUsButton from '../elements/SupportBtn';
import Modal from '../elements/Modal';
import Link from 'next/link';

const Hero = () => {
  const [isPaymentModal, setIsPaymentmodal] = useState(false);
  return (
    <div className='hero h-[100vh] grid place-items-center'>
        <div className='md:w-[90%] md:p-0 p-5 m-auto space-y-3'>
            <div className='text-white md:text-[18px] text-[14px] semibold'>WELCOME TO THE ARENA OF CHAMPIONS</div>
            <div style={{fontWeight: 'GeneralSansBold', fontWeight: 'bolder'}} className='md:text-[62px] text-[32px] md:w-[950px] w-full uppercase text-white md:leading-[65px] leading-[40px] bold'>The Church with a difference, raising Champions for Global Impact</div>
            <p className='md:text-[18px] font-[500] md:w-[350px] text-white'>POINTING PEOPLE TO THE LIFE OF A CHAMPION</p>
            {/* <p className='md:text-[18px] font-[500] md:w-[350px] text-white'>Know God, find location, discover purpose and make a difference.</p> */}

            <div className='flex items-center gap-5 mt-8'>
                <Button
                     text={"FOR SUPPORT"}
                     btnStyle={"p-3 bg-orange-200 font-[500] text-black"}
                     onBtnClick={()=> setIsPaymentmodal(true)}
                />
                <Link target="_blank" href={"https://www.facebook.com/theChampionshousechurch?mibextid=ZbWKwL"}>
                  <Button
                      text={"WATCH ONLINE"}
                      btnStyle={"p-3 bg-transparent text-orange-200 font-[500]"}
                  />
                </Link>
            </div>
        </div>

        {isPaymentModal && (
          <Modal isOpen={isPaymentModal} onCloseModal={()=>setIsPaymentmodal(false)}>
            <SupportUsButton setIsPaymentModal={setIsPaymentmodal} />
          </Modal>
        )}
    </div>
  )
}

export default Hero;