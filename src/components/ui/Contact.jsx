"use client";

import Image from 'next/image';
import React, { useRef, useState } from 'react'
import Button from '../elements/Button';
import { toast } from 'react-toastify';

import emailjs from '@emailjs/browser';


const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef();


    function handleContactSubmit(e) {
        e.preventDefault();
    const formData = new FormData(form.current);

    // Access individual input values
    const input1Value = formData.get('name');
    const input2Value = formData.get('phone');
    const input3Value = formData.get('message');

    if(input1Value.trim() == "" || input2Value.trim() == "" || input3Value.trim() == ""){
      toast("Fields cannot be empty")
      return;
    }
    setIsLoading(true)
    emailjs
      .sendForm('service_q99lrp6', 'template_zetrjmo', form.current, {
        publicKey: 'PxXnA1_NoXG0BYyKy',
      })
      .then(
        () => {
          setIsLoading(false);
          toast("Prayer Request Sent Successfully");
          console.log('SUCCESS!');
        } 
      )
      .catch((error) => {
        setIsLoading(false)
        toast("An error Occurred, try again")
        console.log('FAILED...', error);
      });

    }
  return (
    <div className='bg-black md:px-14 md:py-24 py-14 px-8 space-y-24' id='contact'>
        <div className='m-auto md:w-[90%] grid place-items-center'>
            <div className='flex md:flex-row flex-col items-center md:text-left text-center justify-center md:gap-8 gap-16'>
                <div className='flex-[1]'>
                    <Image style={{boxShadow: '-35px 40px 2px 5px #fed7aa'}} src={'https://res.cloudinary.com/samueladexcloudinary/image/upload/f_auto/q_auto/v1749301774/Group_19_3_ztpbqi.png'} width={500} height={500} alt='' className='w-[300px] m-auto' />
                </div>

                <div className='flex-[1]'>
                    <div className='text-white md:w-[500px] md:leading-[60px] leading-[35px] md:text-[60px] text-[32px] bold'>Our Father. Our Covering. Our Mentor</div>
                    <p className='text-gray-200 md:w-[500px] mt-2'>Bishop Moses Anozie is a seasoned apostolic voice and a dynamic servant of God, called and anointed to raise global champions for Christ. With decades of impactful ministry, he is known for his uncompromising stand on the Word of God, prophetic accuracy, and a deep passion for souls. As the Presiding Bishop of The Arena Of Champions, Bishop Anozie carries a rare grace for deliverance, revival, and impartation, transforming lives and territories through the power of the Holy Spirit. His ministry is marked by undeniable signs, wonders, and manifestations of God’s glory, making him a trusted father and mentor to many in the body of Christ.</p>
                </div>
            </div>
        </div>
        <div className='m-auto flex justify-center'>
            <form ref={form} onSubmit={handleContactSubmit} className='md:w-[80%] w-full space-y-6'>
                <div className='flex md:flex-row flex-col items-center gap-3'>
                    <div className='flex flex-col gap-3 w-full'>
                        <label className='text-white'>Name</label>
                        <input name='name' className='border-b-[1px] py-2 focus:outline-none text-white font-mono text-[12px] w-full border-gray-300 bg-transparent' type='text' placeholder='Enter your name' />
                    </div>
                    <div className='flex flex-col gap-3 w-full'>
                        <label className='text-white'>Phone Number</label>
                        <input name='phone' className='border-b-[1px] py-2 focus:outline-none text-white font-mono text-[12px] w-full border-gray-300 bg-transparent' type='text' placeholder='Enter your contact' />
                    </div>
                </div>
                <div className='flex flex-col gap-3 w-full'>
                    <label className='text-white'>Prayer Request</label>
                    <textarea name='message' className='border-b-[1px] py-2 focus:outline-none text-white font-mono text-[12px] w-full border-gray-300 bg-transparent' type='text' placeholder='Request...'></textarea>
                </div>

                <Button 
                    text={"Send Prayer Request"}
                    btnStyle={"bg-orange-200 text-black p-4 semibold"}
                    loading={isLoading}
                />
            </form>
        </div>
    </div>
  )
}

export default Contact