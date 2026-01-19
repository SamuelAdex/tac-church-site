import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import Application from "@/models/Application.model";

export async function POST(req) {
  console.log(">>> API POST RECEIVED: /api/school-of-ministry");
  try {
    const body = await req.json();
    console.log("Body parsed. Connecting to DB...");
    
    await connectToDB();
    console.log("Connected. Saving application for:", body.fullName);

    // Create new application in the database
    const newApplication = new Application({
      ...body,
      status: "paid"
    });

    await newApplication.save();

    console.log(">>> SUCCESS: Application saved to MongoDB.");
    return NextResponse.json({ 
      success: true, 
      message: "Application submitted and stored successfully!" 
    });
  } catch (error) {
    console.error("Database Storage Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to store application in database", 
        error: error.message 
      },
      { status: 500 }
    );
  }
}
