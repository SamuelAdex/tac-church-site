"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { IoMdQuote } from 'react-icons/io';

const declarations = [
    {
        id: 1,
        text: `DAY 8: ENJOYING DIVINE SPEED IN 2026

IN THE NAME OF JESUS CHRIST, I DECLARE THAT 2026 IS MY YEAR OF DIVINE SPEED. EVERY GOD-ORDAINED MATTER IN MY LIFE MOVES FORWARD WITHOUT DELAY OR RESISTANCE.

SCRIPTURE: “THE LORD WILL HASTEN IT IN ITS TIME.” — ISAIAH 60:22
I COMMAND SUPERNATURAL ACCELERATION UPON MY DESTINY. WHAT TOOK OTHERS YEARS WILL HAPPEN FOR ME BY GOD’S HAND.

I DECLARE THAT I WILL NOT WALK SLOWLY INTO MY BREAKTHROUGHS. I RUN ON GOD’S PATH WITH STRENGTH AND CLARITY.
SCRIPTURE: “HE MAKES MY FEET LIKE THE FEET OF DEER, AND SETS ME ON MY HIGH PLACES.” — HABAKKUK 3:19
I PROPHESY THAT DIVINE SPEED WILL DISTINGUISH ME IN MY CAREER, MY BUSINESS, AND MY MINISTRY THIS YEAR.

I DECLARE THAT EVERY SLOWDOWN, EVERY UNNECESSARY PROCESS, AND EVERY SYSTEM DESIGNED TO WASTE MY TIME IS OVERRULED BY GOD.
SCRIPTURE: “HE SENDS HIS COMMAND TO THE EARTH; HIS WORD RUNS VERY SWIFTLY.” — PSALM 147:15
I COMMAND MY HELPERS, OPPORTUNITIES, AND ANSWERS TO LOCATE ME QUICKLY. I WILL NOT MISS MY APPOINTED MOMENTS.
SCRIPTURE: “BEHOLD, I STAND AT THE DOOR AND KNOCK.” — REVELATION 3:20
I DECLARE THAT I WILL NOT LABOR LONG WITHOUT RESULTS. MY HARVESTS WILL BE TIMELY AND PLENTIFUL.
SCRIPTURE: “LET US NOT GROW WEARY WHILE DOING GOOD, FOR IN DUE SEASON WE SHALL REAP IF WE DO NOT LOSE HEART.” — GALATIANS 6:9
I PROPHESY THAT DIVINE SPEED WILL BRING ME INTO COMPLETIONS, NOT JUST STARTS. I FINISH WHAT I BEGIN.
SCRIPTURE: “BEING CONFIDENT OF THIS VERY THING, THAT HE WHO HAS BEGUN A GOOD WORK IN YOU WILL COMPLETE IT.” — PHILIPPIANS 1:6
I DECLARE THAT 2026 WILL NOT DRAG FOR ME. EACH MONTH WILL PRODUCE CLEAR RESULTS AND TESTIMONIES.
SCRIPTURE: “YOU CROWN THE YEAR WITH YOUR GOODNESS, AND YOUR PATHS DRIP WITH ABUNDANCE.” — PSALM 65:11
I DECREE THAT I MOVE AHEAD OF COMPETITION, AHEAD OF LIMITATIONS, AND AHEAD OF PREVIOUS VERSIONS OF MYSELF BY GOD’S SPEED.
SCRIPTURE: “FOR NOT BY MIGHT NOR BY POWER, BUT BY MY SPIRIT, SAYS THE LORD OF HOSTS.” — ZECHARIAH 4:6`,
        reference: "Philippians 4:13"
    }
];

const Declaration = () => {
    return (
        <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-orange-200/20 rounded-full text-orange-200 text-sm font-semibold uppercase tracking-wider mb-4 animate-pulse">
                        <HiOutlineSpeakerphone className="text-lg" />
                        21 Days of Declaration, Fasting, Worship and Praise
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
                        Declare God&apos;s Word <span className="text-orange-200">Over Your Life</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Death and life are in the power of the tongue. Speak these words of faith and watch God transform your reality.
                    </p>
                </div>

                <div className="relative group">
                    <Swiper
                        spaceBetween={30}
                        navigation={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper !pb-16"
                    >
                        {declarations.map((dec) => (
                            <SwiperSlide key={dec.id}>
                                <div className="bg-gradient-to-br h-[400px] overflow-y-scroll from-neutral-900 to-black border border-white/5 p-8 md:p-16 rounded-3xl text-center shadow-2xl relative">
                                    <IoMdQuote className="text-6xl text-orange-200/10 absolute top-8 left-8" />
                                    
                                    <div className="relative z-10">
                                        <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8 italic whitespace-pre-line">
                                            &quot;{dec.text}&quot;
                                        </p>
                                        <div className="h-1 w-20 bg-orange-200 mx-auto mb-6"></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="text-center mt-8">
                    <p className="text-gray-500 text-sm">
                        &quot;For with the heart man believeth unto righteousness; and with the mouth confession is made unto salvation.&quot; - Romans 10:10
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Declaration;