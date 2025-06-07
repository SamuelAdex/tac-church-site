'use client';

import React from "react";

export function AccountCard({ accountName, accountNumber, bankName }) {
  return (
    <div className="relative bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#24243e] rounded-2xl p-6 shadow-2xl overflow-hidden border border-[#fed7aa]/30 backdrop-blur-md">
      {/* Glow effect */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#fed7aa]/30 via-transparent to-[#7f53ac]/30 blur-2xl opacity-60 pointer-events-none"></div>
      {/* Card Content */}
      <div className="relative z-10 flex flex-col items-start gap-2">
        <h3 className="md:text-xl text-sm font-extrabold tracking-wide text-[#fed7aa] drop-shadow-lg uppercase">{accountName}</h3>
        <p className="text-sm text-white/80 font-mono tracking-wider">
          <span className="text-[#fed7aa]">Account Number:</span> {accountNumber}
        </p>
        <p className="text-sm text-white/80 font-mono tracking-wider">
          <span className="text-[#fed7aa]">Bank:</span> {bankName}
        </p>
      </div>
      {/* Futuristic lines */}
      <div className="absolute right-4 top-4 w-8 h-8 border-t-2 border-r-2 border-[#fed7aa]/50 rounded-tr-2xl"></div>
      <div className="absolute left-4 bottom-4 w-8 h-8 border-b-2 border-l-2 border-[#fed7aa]/50 rounded-bl-2xl"></div>
    </div>
  );
}