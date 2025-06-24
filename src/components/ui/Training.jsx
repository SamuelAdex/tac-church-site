"use client";

import React, { useRef, useState } from 'react'
import Button from '../elements/Button';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { featureData } from '@/utils/data';

const Training = () => {
    const swiper = useSwiper();
    const swiperSlide = useSwiperSlide();
    const swiperRef = useRef();
    const swiper1Ref = useRef();
    const [activeIndex, setActiveIndex] = useState(0);


    return (
        <div className='bg-black md:h-[1053px] h-[637.89px] grid relative overflow-hidden md:px-10 px-5 md:py-16 py-8 place-items-center'>
            <div className='w-full flex md:flex-row flex-col md:items-center overflow-hidden'>
                <div className='space-y-6 flex-[3] 2xl:relative 2xl:left-[250px]'>
                    <div style={{ fontFamily: "GeneralSansBold" }} className='uppercase 2xl:text-[64px] md:text-[48px] text-white text-[32px] text-left md:leading-[60px] md:w-[500px] w-[307px] leading-[34px]'>Acquiring Ministerial Knowledge</div>
                    <div className='md:flex hidden items-center gap-4'>
                        <Button
                            onBtnClick={() => swiperRef.current.slidePrev()}
                            type={'outline'}
                            btnStyle={`border-white hover:text-black text-white hover:bg-white border-[1px] active:bg-white md:p-[1.1rem] p-[0.8rem] rounded-full`}
                            iconName={<GoArrowLeft fontSize={'25px'} />}
                        />
                        <Button
                            onBtnClick={() => {
                                swiperRef.current.slideNext()
                                // alert("Normal Level")
                                console.log(swiperRef.current)
                            }}
                            type={'outline'}
                            btnStyle={`border-white hover:text-black text-white hover:bg-white active:bg-white border-[1px] md:p-[1.1rem] p-[0.8rem] rounded-full`}
                            iconName={<GoArrowRight fontSize={'25px'} />}
                        />
                    </div>
                </div>

                <div className='flex-[2] 2xl:w-[71%] custom-range:w-[85%] custom-range:right-[-600px] w-[105%] 2xl:right-[-350px] md:right-[-570px] absolute overflow-hidden md:flex hidden'>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={5}
                        // pagination={{
                        // clickable: true,
                        // }}
                        // modules={[Pagination]}
                        // centeredSlides={true}
                        // loop={true}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        className="mySwiper"
                        autoplay={true}
                    // onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    >
                        {featureData.map((feature, index) => (
                            <SwiperSlide key={index}>
                                <div className='relative overflow-hidden w-[439px] h-[604px] bg-[rgba(255,255,255,0.09)] rounded-[30px]'>
                                    <div className='p-8 space-y-2'>
                                        <div className='text-white md:leading-[38px] md:text-[36px] text-[18px] semibold'>{feature.title}</div>
                                        <p className='text-white md:text-[16px] text-[12px] font-[500]'>{feature.desc}</p>
                                    </div>
                                    <div className='absolute bottom-0 w-full'>
                                        <Image src={feature.img} alt='' width={feature.width} height={feature.height} className='w-full h-full object-cover' />
                                        <div className="absolute bottom-0 left-0 w-full h-[55%] bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <SwiperSlide>
                            <div className="w-[439px] h-[360px]"></div>
                        </SwiperSlide>
                    </Swiper>
                </div>


                <div className='flex-[2] 2xl:w-[71%] w-[255%] overflow-hidden md:hidden flex mt-6 mb-2'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={80}
                        // pagination={{
                        // clickable: true,
                        // }}
                        // modules={[Pagination]}
                        // centeredSlides={true}
                        // loop={true}
                        onSwiper={(swiper) => {
                            swiper1Ref.current = swiper;
                        }}
                        className="mySwiper"
                        autoplay={true}
                    >
                        {featureData.map((feature, index) => (
                            <SwiperSlide key={index}>
                                <div className='relative overflow-hidden w-[286.51px] h-[394.19px] bg-[rgba(255,255,255,0.09)] rounded-[19.58px]'>
                                    <div className='p-8 space-y-2'>
                                        <div className='text-white md:leading-[38px] text-[23.49px] leading-[24px] semibold'>{feature.title}</div>
                                        <p className='text-white text-[10px] font-[500]'>{feature.desc}</p>
                                    </div>
                                    <div className='absolute bottom-0 w-full'>
                                        <Image src={feature.img} alt='' width={feature.width} height={feature.height} className='w-full h-full object-cover' />
                                        <div className="absolute bottom-0 left-0 w-full h-[55%] bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <SwiperSlide>
                            <div className="w-[286.51px] h-[360px]"></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-[286.51px] h-[360px]"></div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* <SwiperSlide>
                <Image src={'https://res.cloudinary.com/dzvqoypcs/image/upload/f_auto/q_auto/v1731588315/feature1_w0vffm.svg'} alt='' width={439} height={604} className='rounded-[20px] w-[439px] h-[604px]' />
            </SwiperSlide> */}

                <div className='md:hidden mt-3 justify-end flex items-center gap-4'>
                    <Button
                        onBtnClick={() => swiper1Ref.current.slidePrev()}
                        type={'outline'}
                        btnStyle={`border-white hover:text-black text-white hover:bg-white border-[1px] active:bg-white md:p-[1.1rem] p-[0.8rem] rounded-full`}
                        iconName={<GoArrowLeft fontSize={'25px'} />}
                    />
                    <Button
                        onBtnClick={() => {
                            swiper1Ref.current.slideNext()
                            // alert("Normal Level")
                            console.log(swiper1Ref.current)
                        }}
                        type={'outline'}
                        btnStyle={`border-white hover:text-black text-white hover:bg-white active:bg-white border-[1px] md:p-[1.1rem] p-[0.8rem] rounded-full`}
                        iconName={<GoArrowRight fontSize={'25px'} />}
                    />
                </div>
            </div>
        </div>
    )
}

export default Training;