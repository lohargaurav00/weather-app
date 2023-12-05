import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";

import { connectMongoDB } from "@/lib/monogdb";
import User from "@/models/user";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    await connectMongoDB();

    const user = await User.findOne({ email });

    if (user) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 400,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword });

    return new Response(
      JSON.stringify({ message: "User registered successfully" }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
