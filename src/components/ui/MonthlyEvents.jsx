"use client";

import Image from "next/image";
import React from "react";
import event1 from "@/public/assets/img/his_glory.jpeg";
import event2 from "@/public/assets/img/bridge.jpeg";
import anointing from "@/public/assets/img/anointing_nov.jpeg";
import lyrics from "@/public/assets/img/lyrics_nov.jpeg";
import miracle from "@/public/assets/img/miracle_nov.jpeg";
import singles from "@/public/assets/img/singles_nov.jpeg";


const MonthlyEvents = () => {
  return (
    <div className="overflow-hidden py-14 bg-white">
      <div className="w-[90%] m-auto">
        <div className="md:text-[40px] text-[35px] bold text-center">
          Our Monthly Programs
        </div>
        <p className="text-center m-auto md:w-[700px]">
          {
            "Our Monthly programs are events orchestrated to bring God's timely divine move every month."
          }
        </p>
      </div>

      <div className="grid md:grid-cols-2 md:p-0 p-3 grid-cols-1 mt-8 gap-[30px] m-auto md:w-[70%]">
        <div className="">
          <Image src={event2} alt="" className="w-full" />
          <div className="">
            <div className="rounded-lg p-4 shadow-lg mt-4">
              <h3 className="text-2xl bold text-black mb-2">
                The Bridge
              </h3>
              <div className="my-3 md:text-[16px] text-[12px]">
                {"Join us for The Bridge, a transformative church program designed to connect hearts to God’s purpose and inspire believers to live out their faith with impact. This powerful gathering will feature a special guest — Engr. Chidomere Ndubuisi, a dynamic Mechanical Engineer, a speaker, visionary leader, and devoted servant of God."}
              </div>
              <div className="flex md:text-[18px] text-[10px] items-center gap-4">
                <span className="bg-white text-gray-600 px-3 py-1 rounded-full font-semibold shadow">
                  Date: October 26th, 2025 (SUNDAY)
                </span>
                <span className="bg-white text-gray-600 px-3 py-1 rounded-full font-semibold shadow">
                  Time: 7:30 AM - 9:45 AM
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={anointing} alt="" className="w-full" />
          <div className="">
            <div className="rounded-lg p-4 shadow-lg mt-4">
              <h3 className="text-2xl bold text-black mb-2">
                Prophetic & Anointing Service (First Day of the Month)
              </h3>
              {/* <div className="my-3 md:text-[16px] text-[12px]">
                {"Get ready for an unforgettable encounter in God’s presence on November as we gather for Hos Glory Conference 2025! It will be a 3 days divine empowerment, fresh fire, and supernatural release. Don’t miss your moment of impartation! Come with expectation. Come hungry for more of God. Your life will not remain the same! Check flier for more details!"}
              </div> */}
              <div className="flex md:text-[18px] text-[10px] items-center gap-4">
                <span className="bg-white text-gray-600 px-3 py-1 rounded-full font-semibold shadow">
                  Date: November 1st (7:00am)
                </span>
                {/* <span className="bg-white text-gray-600 px-3 py-1 rounded-full font-semibold shadow">
                  Time: 7:30 AM
                </span> */}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={lyrics} alt="" className="w-full" />
          <div className="">
            <div className="rounded-lg p-4 shadow-lg mt-4">
              <h3 className="text-2xl bold text-black mb-2">
                Lyrics Praise Concert (November Editon)
              </h3>
              {/* <div className="my-3 md:text-[16px] text-[12px]">
                {"Get ready for an unforgettable encounter in God’s presence on November as we gather for Hos Glory Conference 2025! It will be a 3 days divine empowerment, fresh fire, and supernatural release. Don’t miss your moment of impartation! Come with expectation. Come hungry for more of God. Your life will not remain the same! Check flier for more details!"}
              </div> */}
              <div className="flex md:text-[18px] text-[10px] items-center gap-4">
                <span className="bg-white text-gray-600 px-3 py-1 rounded-full font-semibold shadow">
                  Date: November 2nd (4:00pm)
                </span>
                {/* <span className="bg-white text-gray-600 px-3 py-1 rounded-full font-semibold shadow">
                  Time: 7:30 AM
                </span> */}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={miracle} alt="" className="w-full" />
          <div className="">
            <div className="rounded-lg p-4 shadow-lg mt-4">
              <h3 className="text-2xl bold text-black mb-2">
                Miracle Service
              </h3>
              {/* <div className="my-3 md:text-[16px] text-[12px]">
                {"Get ready for an unforgettable encounter in God’s presence on November as we gather for Hos Glory Conference 2025! It will be a 3 days divine empowerment, fresh fire, and supernatural release. Don’t miss your moment of impartation! Come with expectation. Come hungry for more of God. Your life will not remain the same! Check flier for more details!"}
              </div> */}
              <div className="flex md:text-[18px] text-[10px] items-center gap-4">
                <span className="bg-white text-gray-600 px-3 py-1 rounded-full font-semibold shadow">
                  Date: November 5th (5:00pm)
                </span>
                {/* <span className="bg-white text-gray-600 px-3 py-1 rounded-full font-semibold shadow">
                  Time: 7:30 AM
                </span> */}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={singles} alt="" className="w-full" />
          <div className="">
            <div className="rounded-lg p-4 shadow-lg mt-4">
              <h3 className="text-2xl bold text-black mb-2">
                Singles & Married Timeout
              </h3>
              {/* <div className="my-3 md:text-[16px] text-[12px]">
                {"Get ready for an unforgettable encounter in God’s presence on November as we gather for Hos Glory Conference 2025! It will be a 3 days divine empowerment, fresh fire, and supernatural release. Don’t miss your moment of impartation! Come with expectation. Come hungry for more of God. Your life will not remain the same! Check flier for more details!"}
              </div> */}
              <div className="flex md:text-[18px] text-[10px] items-center gap-4">
                <span className="bg-white text-gray-600 px-3 py-1 rounded-full font-semibold shadow">
                  Date: November 28th (4:00pm)
                </span>
                {/* <span className="bg-white text-gray-600 px-3 py-1 rounded-full font-semibold shadow">
                  Time: 7:30 AM
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyEvents;
