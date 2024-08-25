import DB_Config from "@/DB/DB_Config.js";
import UserModel from "@/Models/User.js";
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

DB_Config()

export async function POST(request) {
    try {
        const body = await request.json()
        const { Username, Password, Email } = body

        const ExistingUser = await UserModel.findOne({ Email })
        if (ExistingUser) {
            return NextResponse.json({ message: "User already exists." }, { status: 400 })
        }

        const Salt = await bcrypt.genSalt(10)
        const HashedPassword = await bcrypt.hash(Password, Salt)

        const NewUser = new UserModel({ Username, Email, Password: HashedPassword })

        const SaveUser = await NewUser.save()

        return NextResponse.json({ message: "User Register Successfully!!", user: SaveUser }, { status: 200 })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "There is an error while creating a user" }, { status: 500 })
    }
}
