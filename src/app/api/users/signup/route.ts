import {connect} from "@/db/dbconfig";
import User from "@/models/userModel";
import { NextRequest, NextMiddleware, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const {email, username , password} = reqBody
        console.log(reqBody);
        //check if user already exists
        const user = await User.findOne({email});
        if(user){
            return NextResponse.json({error: "user already exists"}, {status: 400})
        }

        //hashinf pw

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        //creating user

        const newUser = new User({
            email,
            username, 
            password: hashedPassword
        })

        const savedUser = await newUser.save()

        return NextResponse.json({
            message: "user created successfuly",
            success:  true,
            savedUser
        })


    } catch (error:any) {
        return NextResponse.json({error: error.message},
            {status: 500}
        )
        
    }
    
}



connect();