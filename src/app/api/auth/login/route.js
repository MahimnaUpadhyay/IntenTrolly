import DB_Config from "@/DB/DB_Config.js";
import UserModel from "@/Models/User.js";
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

DB_Config()

export async function POST(request) {
    try {
        const body = await request.json()
        const { Email, Password } = body

        const ExistingUser = await UserModel.findOne({ Email })

        if (!ExistingUser) {
            return NextResponse.json({ message: "User Doesnot Exists ", ExistingUser }, { status: 404 });
        }

        const CorrectPassword = await bcrypt.compare(Password, ExistingUser.Password);

        if (!CorrectPassword) {
            return NextResponse.json({ message: "Wrong Credentials ", CorrectPassword }, { status: 404 })
        } else {
            return NextResponse.json({ message: "Welcome User. ", ExistingUser }, { status: 200 })
        }

    } catch (error) {
        return NextResponse.json({ message: "There is an error while loging in ", error }, { status: 500 })
    }
}
