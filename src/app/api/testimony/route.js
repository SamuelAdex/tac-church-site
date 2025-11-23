import Testimony from '@/models/Testimony.model';
import { connectToDB } from '@/utils/database'
import { jsonRes } from '@/utils/stringifyResponse'
import { NextResponse, NextRequest } from 'next/server'


export async function OPTIONS(request) {
    return new Response(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': 'https://thearenaofchampions.org', // Or your frontend URL
            'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
}


export async function POST(request, route) {
    const { by, message, file, publicId } = await request.json();
    if (!by || !message) {
        return new Response(jsonRes({ msg: "Fields can't be empty" }), { status: 400 })
    }
    // console.log({title, desc})
    try {
        await connectToDB();
        let _testimony = await Testimony({
            by: by,
            message: message,
            fileLink: file,
            filePublicId: publicId
        });

        const res = await _testimony.save();
        if (res) {
            return new Response(jsonRes({ msg: "success" }), {
                status: 200,
            })
        } else {
            return new Response(jsonRes({ msg: "Unable to submit request" }), { status: 400 })
        }
    } catch (error) {
        console.log(error.message)
        return new Response(jsonRes({ msg: error.message }), { status: 500 })
    }
}


export async function GET(request, route) {
    try {
        await connectToDB();

        let res = await Testimony.find().sort({createdAt: -1});
        if (res) {
            return new Response(jsonRes({ msg: "success", res: res }), {
                status: 200, 
            })
        } else {
            return new Response(jsonRes({ msg: "Unable to fetch request" }), { status: 400 })
        }
    } catch (error) {
        return new Response(jsonRes({ msg: error.message }), { status: 500 })
    }
}