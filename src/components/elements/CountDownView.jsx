"use client"

import Image from "next/image"
import { useState, useEffect, useMemo } from "react"
import Button from "./Button"
import Link from "next/link"
import { TbUsersGroup } from "react-icons/tb";
import { useRouter } from "next/navigation"


export default function CountDownView({days, hours, minutes, seconds}){
    // const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    // const NOW_IN_MS = new Date().getTime();  
    // const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    // const targetDate = new Date('December 15, 2023 23:59:59');
    const router = useRouter()


    return (
        <div className="m-[0px] m-auto md:py-0 py-3 flex flex-col justify-center items-center mt-4 border-[1px] border-[#bdbdbd] rounded-[27px] md:h-[237px] md:w-[600px] w-full">
            <p className="text-[#1e1e1e] md:text-[20px] text-[10px] text-center font-[400]">Count Down To Launch</p>
            <div className="text-[#1e1e1e] md:text-[64px] text-[40px] font-bold flex justify-center items-center gap-3">
                <DateTimeDisplay value={days} type={"Days"} />
                <span className="mt-[-30px]">:</span>
                <DateTimeDisplay value={hours} type={"Hours"} />
                <span className="mt-[-30px]">:</span>
                <DateTimeDisplay value={minutes} type={"Mins"} />
                <span className="mt-[-30px]">:</span>
                <DateTimeDisplay value={seconds} type={"Secs"} />
            </div>
        </div>
    )
}



function DateTimeDisplay({value, type}){
    return (
        <div className="flex flex-col text-[#1e1e1e] items-center">
            <div style={{fontFamily: "GeneralSans"}} className="md:text-[85.25px] text-[39.52px]">{value}</div>
            <div className="md:text-[20px] text-[9.96px] font-[500]">{type}</div>
        </div>
    )
}