"use client";

import React from 'react'

const Loader = ({color}) => {
  return (
    <div className={`loader animate-spin p-[8px] border-t-[3px] border-[3px] border-transparent rounded-[100%] ${color ? color : 'border-t-white'}`}></div>
  )
}

export default Loader