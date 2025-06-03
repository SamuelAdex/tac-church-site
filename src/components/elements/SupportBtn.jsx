// components/SupportUsButton.jsx
'use client';

import { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { toast } from 'react-toastify';

const SupportUsButton = ({ setIsPaymentModal }) => {
    const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY;
    const [amount, setAmount] = useState(""); // Amount in kobo (10000 kobo = 100 NGN)
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

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
        },
        onClose: () => alert("Payment closed."),
    };

    const handleSupport = async () => {
        setLoading(true);
        const res = await fetch('/api/paystack', {
            method: 'POST',
            body: JSON.stringify({ email, amount: parseInt(amount) * 100 }),
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await res.json();
        setLoading(false);

        if (data?.data?.authorization_url) {
            if (typeof window !== 'undefined') {
                window.location.href = data.data.authorization_url;
            }
        } else {
            toast('Failed to initialize payment.');
        }
    };

    return (
        <div className="flex flex-col gap-4 bg-black md:w-[600px] w-full p-6 rounded-lg">
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
            {/* <button
        onClick={handleSupport}
        disabled={loading || !email}
        className="p-3 bg-orange-200 font-[500] text-black"
      >
        {loading ? 'Processing...' : 'Support Us'}
      </button> */}
            <PaystackButton {...componentProps} className="p-3 bg-orange-200 font-[500] text-black" />
        </div>
    );
};

export default SupportUsButton;
