"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { IoMdQuote } from 'react-icons/io';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const declarations = [
    {
        id: 2,
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
    },
    {
        id: 1,
        text: `DAY 7: ARRESTING AND BREAKING OUT FROM THE SPIRIT OF DELAY

IN THE NAME OF JESUS CHRIST, I DECLARE THAT EVERY SPIRIT OF DELAY WORKING AGAINST MY LIFE, DESTINY, AND PURPOSE IS ARRESTED AND BROKEN NOW. I STEP OUT OF WAITING INTO DIVINE TIMING.
SCRIPTURE: “FOR THE VISION IS YET FOR AN APPOINTED TIME; BUT AT THE END IT WILL SPEAK, AND IT WILL NOT LIE. THOUGH IT TARRIES, WAIT FOR IT; BECAUSE IT WILL SURELY COME, IT WILL NOT TARRY.” — HABAKKUK 2:3

I COMMAND EVERY POWER ASSIGNED TO POSTPONE MY RESULTS, MY TESTIMONIES, AND MY ANSWERS TO LOSE AUTHORITY OVER ME THIS YEAR.
SCRIPTURE: “THE LORD WILL HASTEN IT IN ITS TIME.” — ISAIAH 60:22
I DECLARE THAT I BREAK OUT OF EVERY CYCLE OF ALMOST-THERE, NEAR-SUCCESS, AND REPEATED SETBACKS. I MOVE FORWARD WITH SPEED.
SCRIPTURE: “AND DAVID ENQUIRED OF THE LORD… AND THE LORD SAID, GO UP; FOR I WILL DOUBTLESS DELIVER.” — 2 SAMUEL 5:19
I PROPHESY THAT WHAT HAS BEEN HELD BACK IS RELEASED NOW. MY ANSWERS WILL NO LONGER BE STUCK IN THE REALM OF WAITING.
SCRIPTURE: “FROM THE FIRST DAY THAT YOU SET YOUR HEART TO UNDERSTAND… YOUR WORDS WERE HEARD.” — DANIEL 10:12
I DECLARE THAT EVERY MOUNTAIN OF DELAY IS LEVELLED BEFORE ME. NOTHING STANDS BETWEEN ME AND MY PROMISED RESULTS.
SCRIPTURE: “WHO ARE YOU, O GREAT MOUNTAIN? BEFORE ZERUBBABEL YOU SHALL BECOME A PLAIN.” — ZECHARIAH 4:7

I COMMAND SUPERNATURAL SPEED TO REPLACE SLOWNESS IN MY LIFE, MY BUSINESS, AND MY DESTINY JOURNEY.
SCRIPTURE: “AND ELIJAH GIRD UP HIS LOINS, AND RAN AHEAD OF AHAB.” — 1 KINGS 18:46
I DECLARE THAT I WILL NO LONGER LABOR WITHOUT RESULTS. MY EFFORTS WILL PRODUCE TIMELY HARVESTS.
SCRIPTURE: “YOU SHALL NOT LABOR IN VAIN, NOR BRING FORTH CHILDREN FOR TROUBLE.” — ISAIAH 65:23
I PROPHESY THAT MY STEPS ARE ORDERED, AND I WILL NOT MISS GOD’S WINDOWS OF OPPORTUNITY THIS YEAR.
SCRIPTURE: “THE STEPS OF A GOOD MAN ARE ORDERED BY THE LORD.” — PSALM 37:23
I DECLARE THAT DELAY WILL NOT TURN INTO DENIAL IN MY LIFE. GOD’S PROMISES CONCERNING ME ARE COMING TO PASS.
SCRIPTURE: “FOR ALL THE PROMISES OF GOD IN HIM ARE YES, AND IN HIM AMEN.” — 2 CORINTHIANS 1:20
I DECREE THAT FROM THIS DAY FORWARD, I OPERATE IN DIVINE ACCELERATION, TIMELY HELP, AND SPEEDY TESTIMONIES.
SCRIPTURE: “BEHOLD, I WILL DO A NEW THING; NOW IT SHALL SPRING FORTH.” — ISAIAH 43:19`,
        reference: "Habakkuk 2:3"
    },
];

const Declaration = () => {
    return (
        <section id="declaration" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
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

                <div className="relative px-4 md:px-12">
                    <Swiper
                        spaceBetween={30}
                        navigation={{
                            nextEl: '.custom-button-next',
                            prevEl: '.custom-button-prev',
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                            el: '.custom-pagination',
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper !pb-20"
                    >
                        {declarations.map((dec) => (
                            <SwiperSlide key={dec.id}>
                                <div className="bg-gradient-to-br h-[500px] overflow-y-auto custom-scrollbar from-neutral-900 to-black border border-white/5 p-6 md:p-16 rounded-3xl text-center shadow-2xl relative">
                                    <IoMdQuote className="text-4xl md:text-6xl text-orange-200/10 absolute top-4 left-4 md:top-8 md:left-8" />
                                    
                                    <div className="relative z-10 pt-4 md:pt-0">
                                        <p className="text-lg md:text-2xl text-white font-medium leading-relaxed mb-8 italic whitespace-pre-line text-left md:text-center">
                                            &quot;{dec.text}&quot;
                                        </p>
                                        <div className="h-1 w-20 bg-orange-200 mx-auto mb-6"></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons Container */}
                    <div className="flex items-center justify-center gap-8 mt-4 md:mt-0">
                        <button className="custom-button-prev md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 z-30 w-12 h-12 bg-orange-200/10 border border-orange-200/20 text-orange-200 rounded-full flex items-center justify-center hover:bg-orange-200 hover:text-black transition-all duration-300 shadow-xl backdrop-blur-sm active:scale-95">
                            <FaChevronLeft className="text-lg" />
                        </button>
                        
                        <div className="custom-pagination !static !w-auto flex gap-2"></div>

                        <button className="custom-button-next md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 z-30 w-12 h-12 bg-orange-200/10 border border-orange-200/20 text-orange-200 rounded-full flex items-center justify-center hover:bg-orange-200 hover:text-black transition-all duration-300 shadow-xl backdrop-blur-sm active:scale-95">
                            <FaChevronRight className="text-lg" />
                        </button>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-500 text-sm">
                        &quot;For with the heart man believeth unto righteousness; and with the mouth confession is made unto salvation.&quot; - Romans 10:10
                    </p>
                </div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(254, 215, 170, 0.2);
                    border-radius: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(254, 215, 170, 0.4);
                }
                .swiper-pagination-bullet {
                    background: #fed7aa !important;
                    opacity: 0.3 !important;
                }
                .swiper-pagination-bullet-active {
                    opacity: 1 !important;
                    width: 20px !important;
                    border-radius: 4px !important;
                }
            `}</style>
        </section>
    );
}

export default Declaration;