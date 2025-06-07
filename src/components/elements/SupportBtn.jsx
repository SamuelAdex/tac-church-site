'use client';

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import dynamic from 'next/dynamic';
import { AccountCard } from './AccountCard';

// Dynamically import PaystackButton with ssr option set to false
const PaystackButton = dynamic(
    () => import('react-paystack').then((mod) => mod.PaystackButton),
    { ssr: false }
);

const SupportUsButton = ({ setIsPaymentModal }) => {
    const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY;
    const [amount, setAmount] = useState(""); // Amount in kobo (10000 kobo = 100 NGN)
    const [email, setEmail] = useState('');
    const [isClient, setIsClient] = useState(false);
    const [tab, setTab] = useState(0);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const componentProps = {
        email,
        amount: amount * 100, // Convert to kobo
        reference: new Date().getTime().toString(),
        currency: 'NGN',
        publicKey,
        text: 'Support Us',
        onSuccess: () => {
            toast("Thanks for the support!")
            setIsPaymentModal(false);
            if (typeof window !== 'undefined') {
                window.location = "#contact";
            }
        },
        onClose: () => alert("Payment closed."),
    };

    return (
        <div className="flex flex-col gap-4 bg-black md:w-[600px] w-full p-6 rounded-lg">
            <div className='flex items-center gap-5 font-[600] md:text-[16px] text-[12px]'>
                <span className={`${tab == 0 ? 'text-white border-b-[2px] border-orange-200' : 'text-gray-400'} pb-2 cursor-pointer`} onClick={() => setTab(0)}>For Support</span>
                <span className={`${tab == 1 ? 'text-white border-b-[2px] border-orange-200' : 'text-gray-400'} pb-2 cursor-pointer`} onClick={() => setTab(1)}>Foreign</span>
            </div>
            {tab == 0 ? (
                <>
                    <div className="mt-4">
                        <div className='text-white font-[600] text-[24px]'>Welcome to Our Support Form</div>
                        <p className='text-gray-400 text-[14px] font-[500]'>Please fill in the below form to send us your Support.</p>
                    </div>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 rounded-md w-full focus:outline-none bg-transparent text-white"
                    />
                    <input
                        type="text"
                        placeholder="Enter desired amount (in NGN)"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="border p-2 rounded-md w-full focus:outline-none bg-transparent text-white"
                    />
                    {isClient && <PaystackButton {...componentProps} className="p-3 bg-orange-200 font-[500] text-black" />}
                </>
            ) : (
                <div className='space-y-2 overflow-auto h-[400px]'>
                    <AccountCard accountName={"THE ARENA OF CHAMPIONS"} accountNumber={"0895422175"} bankName={"NUBAN: Dollar Acc."} />
                    <AccountCard accountName={"THE ARENA OF CHAMPIONS"} accountNumber={"0895422182"} bankName={"NUBAN: Pounds Sterling"} />
                    <AccountCard accountName={"THE ARENA OF CHAMPIONS"} accountNumber={"0895422199"} bankName={"NUBAN: EURO"} />
                    <AccountCard accountName={"THE ARENA OF CHAMPIONS"} accountNumber={"0913759153"} bankName={"NUBAN: Partnership"} />
                    <AccountCard accountName={"THE ARENA OF CHAMPIONS"} accountNumber={"0913759146"} bankName={"NUBAN: Church Buidling Project"} />
                </div>
            )}
        </div>
    );
};

export default SupportUsButton;