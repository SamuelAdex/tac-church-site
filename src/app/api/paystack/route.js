// app/api/paystack/initialize/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
    const body = await req.json();

    try {
        const response = await fetch('https://api.paystack.co/transaction/initialize', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${'sk_live_8123456ytrghu654bc30c460f1f4a1c453cc2301a'}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: body.email,
                amount: body.amount,
                currency: 'NGN',
            }),
        });
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to initialize payment' }, { status: 500 });
    }

}
