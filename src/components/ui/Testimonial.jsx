"use client";

import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from '../elements/Button';
import Modal from '../elements/Modal';
import { MdClose } from 'react-icons/md';

const Testimonial = () => {
    let [tag, setTag] = useState(0);
    const [isTestimonyModal, setIsTestimonyModal] = useState(false);

    let testimonies = [
        {
            id: 1,
            testimony: "I was struggling to pay my rent, but after praying with my church community, I received a surprise check in the mail that covered my expenses. God is faithful",
            createdAt: "2024-10-01",
        },
        {
            id: 2,
            testimony: "I was diagnosed with a chronic illness, but after prayer and anointing with oil by my church leaders, I was healed. I'm now living a healthy life, and I'm grateful for God's mercy.",
            createdAt: "2023-10-21",
        },
        {
            id: 3,
            testimony: "I had been searching for a job for months, but after praying with my church community, I received a call from a company that was a perfect fit for my skills. I'm now working in my dream job, and it's amazing!",
            createdAt: "2026-11-01",
        },
        {
            id: 4,
            testimony: "I was overwhelmed with debt, but after praying and seeking guidance from my church leaders, I received a surprise offer to consolidate my debt and pay off my creditors. God is my provider!",
            createdAt: "2025-06-01",
        },
        {
            id: 5,
            testimony: "I was in a financial bind and didn't know how I would feed my family. But after praying with my church community, a kind stranger donated groceries to our family, and we were able to eat for the week. God is our provider!",
            createdAt: "2025-06-01",
        },
        {
            id: 6,
            testimony: "I was going through a tough time in my life, but after praying and receiving support from my church community, I experienced restoration in my relationships, finances, and overall well-being. God is my healer!",
            createdAt: "2025-06-01",
        },
    ]

    const [isAnimating, setIsAnimating] = useState(false); // Tracks animation state

    // Function to handle manual tag switching
    const handleTagSwitch = (index) => {
        if (index === tag) return; // Prevent redundant animations
        setIsAnimating(true); // Start animation
        setTimeout(() => {
            setTag(index);
            setIsAnimating(false); // Reset animation
        }, 300); // Match animation duration
    };

    // Function to handle previous testimony
    const handlePrev = () => {
        handleTagSwitch((tag - 1 + testimonies.length) % testimonies.length);
    };

    // Function to handle next testimony
    const handleNext = () => {
        handleTagSwitch((tag + 1) % testimonies.length);
    };

    return (
        <>        
            <div className='grid place-items-center z-40 bg-black md:h-[120vh] py-24 relative md:px-12 px-8'>
                <div className='flex md:flex-row flex-col items-center gap-2 justify-center w-full py-4'>
                    <p className='text-gray-400 md:text-[20px] text-[12px] text-center'>Your Appreciate what the Lord has done for You?</p>
                    <Button 
                        text={"Please share with Us!!!"} 
                        btnStyle={'bg-orange-200 text-black p-2 md:text-[14px] text-[12px] font-[500]'} 
                        onBtnClick={()=> setIsTestimonyModal(true)}
                    />
                </div>
                <div className={`transition-transform duration-500 ease-in-out display items-center justify-center ${isAnimating ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
                    }`}>
                    <div className='flex md:flex-row flex-col items-center justify-between w-full m-auto gap-[30px]'>
                        <div className='text-center md:flex-[3]'>
                            <p className='font-[700] text-orange-200 md:text-[30px]'>By ~ Sis. Debbie</p>
                            <div className='text-white md:text-[50px] font-[600 ] text-[16px] overflow-auto md:h-[50vh] h-[30vh]'><q>{testimonies[tag].testimony}</q></div>
                        </div>
                        <div className='md:flex-[2] md:flex hidden'>
                            <div className='bg-gray-500 w-full h-[500px]'></div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-[30px] md:mt-0 mt-[20px]'>
                    <div onClick={handlePrev} className='cursor-pointer w-[70px] h-[70px] grid place-items-center bg-orange-200 rounded-full'>
                        <IoIosArrowBack className='text-black md:text-3xl text-2xl' />
                    </div>
                    <div onClick={handleNext} className='cursor-pointer w-[70px] h-[70px] grid place-items-center bg-orange-200 rounded-full'>
                        <IoIosArrowForward className='text-black md:text-3xl text-2xl' />
                    </div>
                </div>
            </div>

            {isTestimonyModal && (
                <Modal isOpen={isTestimonyModal} onCloseModal={()=> setIsTestimonyModal(false)}>
                    <div className='md:w-[600px] scale-up-center w-full rounded-[12px] p-8 bg-black'>
                        <div className="relative">
                            <MdClose onClick={()=> setIsTestimonyModal(false)} className="text-orange-200 absolute right-[-20px] top-[-20px] text-[30px] cursor-pointer" />
                            <div className="text-white text-[16px] font-[600]">Dearly Beloved, Share Your Testimony With Us</div>
                            <p className="text-[20px] font-[500] text-gray-400">Let others be inspired by the Goodness of the Lord in your Life and Everything that concerns you.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-col gap-1">
                                <label>Full Name</label>
                                <input placeholder='Enter your name' className='p-3 bg-transparent border-[1px] focus:outline-none text-white' />
                            </div>
                            <textarea className='w-full h-[200px] bg-transparent border-[1px] p-3 focus:outline-none text-white' />
                            <Button 
                                text={"Submit"}
                                btnStyle={"bg-orange-200 text-black text-[14px] font-[500] w-full p-3"} 
                            />
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default Testimonial;