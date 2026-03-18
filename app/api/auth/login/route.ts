import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const bcrypt = require("bcryptjs");

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json({ error: "Missing email or password" }, { status: 400 });
        }

        await dbConnect();

        const user = await User.findOne({ email: email.toLowerCase() });

        if (!user) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        if (!user.isVerified) {
            return NextResponse.json({ error: "Please verify your email first", unverified: true }, { status: 403 });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        // Generate response with user data (simplified for now as we don't have a session library)
        const userData = {
            id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
        };

        const response = NextResponse.json({ success: true, user: userData });
        
        // Set a simple cookie for "auth" (In a real app, use JWT or next-auth)
        response.cookies.set("auth_user", JSON.stringify(userData), {
            httpOnly: false, // Accessible by client for simplicity in this demo
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: "/",
        });

        return response;
    } catch (error: any) {
        console.error("Login Error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
