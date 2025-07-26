"use client";

import Image from "next/image";
import React from "react";
import event1 from "@/public/assets/img/August-2025-1.jpeg";
import event2 from "@/public/assets/img/August-2025-2.jpeg";
import event3 from "@/public/assets/img/August-2025-3.jpeg";
import event4 from "@/public/assets/img/August-2025-4.jpeg";

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
          <Image src={event4} alt="" className="w-full" />
          <div className="">
            <div className="rounded-lg p-4 shadow-lg mt-4">
              <h3 className="text-2xl bold text-black mb-2">
                Prophetic & Anointing Service
              </h3>
              <div className="my-3 md:text-[16px] text-[12px]">
                Step into a powerful atmosphere of prophecy and anointing, held on the first day of every month. This service is designed to usher you into the new month with divine direction, fresh empowerment, and spiritual breakthroughs. Experience uplifting worship, prophetic declarations, and receive anointing for the journey ahead.
              </div>
              <div className="flex md:text-[18px] text-[10px] items-center gap-4">
                <span className="bg-white text-gray-600 px-3 py-1 rounded-full font-semibold shadow">
                  Date: August 1, 2025
                </span>
                <span className="bg-white text-gray-600 px-3 py-1 rounded-full font-semibold shadow">
                  Time: 7:30 AM
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={event1} alt="" className="w-full" />
          <div className="">
            <div className="rounded-lg p-4 shadow-lg mt-4">
              <h3 className="text-2xl bold text-black mb-2">
                Uncommon Favour
              </h3>
              <div className="my-3 md:text-[16px] text-[12px]">
                Step into a night of divine encounter, vibrant worship, and
                powerful prayer. Experience a fresh move of God and ignite your spirit for the new month!
              </div>
              <div className="flex md:text-[18px] text-[10px] items-center gap-4">
                <span className="bg-white text-gray-600 px-3 py-1 rounded-full font-semibold shadow">
                  Date: August 10, 2025
                </span>
                <span className="bg-white text-gray-600 px-3 py-1 rounded-full font-semibold shadow">
                  Time: 7:30 AM & 9:00 AM
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={event2} alt="" className="w-full" />
          <div className="">
            <div className="rounded-lg p-4 shadow-lg mt-4">
              <h3 className="text-2xl bold text-black mb-2">
                Refined
              </h3>
              <div className="my-3 md:text-[16px] text-[12px]">
                Experience an atmosphere charged with faith, uplifting music, and heartfelt prayers. Come expecting transformation, inspiration, and a renewed sense of purpose for the month of August.
              </div>
              <div className="flex md:text-[18px] text-[10px] items-center gap-4">
                <span className="bg-white text-gray-600 px-3 py-1 rounded-full font-semibold shadow">
                  Date: August 22 - 24, 2025
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={event3} alt="" className="w-full" />
          <div className="">
            <div className="rounded-lg p-4 shadow-lg mt-4">
              <h3 className="text-2xl bold text-black mb-2">
                Against All Odds
              </h3>
              <div className="my-3 md:text-[16px] text-[12px]">
                A celebration of resilience and faith, this program empowers you to rise above challenges and embrace victory. Join us for inspiring worship, uplifting messages, and a powerful atmosphere where impossibilities become testimonies.
              </div>
              <div className="flex md:text-[18px] text-[10px] items-center gap-4">
                <span className="bg-white text-gray-600 px-3 py-1 rounded-full font-semibold shadow">
                  Date: August 31, 2025
                </span>
                <span className="bg-white text-gray-600 px-3 py-1 rounded-full font-semibold shadow">
                  Time: 7:30 AM & 9:00 AM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyEvents;
