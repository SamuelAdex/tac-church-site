"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

// Dynamically import the form with SSR disabled to prevent 'window is not defined' 
// of Paystack or other browser-only logic during initial render.
const ApplicationForm = dynamic(() => import('./ApplicationForm'), { 
    ssr: false,
    loading: () => (
        <div className="flex justify-center items-center p-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-400"></div>
        </div>
    )
});

const SchoolOfMinistry = () => {
    return (
        <div className="min-h-screen bg-[#f2f2f2] flex flex-col">
            <Header />
            
            {/* Hero Section */}
            <div className="bg-black text-white py-20 px-5 text-center bg-cover bg-center relative" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}>
                <div className="max-w-4xl mx-auto space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold uppercase" style={{ fontFamily: 'GeneralSansBold' }}>School of Ministry</h1>
                    <p className="text-lg md:text-xl text-orange-200 uppercase tracking-widest font-medium">Equipping Champions for Global Impact</p>
                    <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Form Section - Loaded on Client Only */}
            <div className="flex-grow">
                <ApplicationForm />
            </div>

            <Footer />
        </div>
    );
};

export default SchoolOfMinistry;