import {connect} from "@/db/dbconfig";
import User from "@/models/userModel";
import { NextRequest,  NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"
connect()
export async function POST(request:NextRequest){

    try {
     const reqBody = await request.json()
     const {email, password} = reqBody
     console.log(reqBody)

     const user = await User.findOne({email})

     if(!user){
        return NextResponse.json({error: "user does not exists"}, {status:400})
     }
     console.log('user exits')

     const verifiedPassword = await bcryptjs.compare(password, user.password);
     if(!verifiedPassword){
        return NextResponse.json({error : "incorrect password"}, 
            {status: 400}
        )
     }
     console.log(user)
      
     // create token data

     const tokenData = {
        id : user._id,
        username : user.username,
        email: user.email

     }

     //create token 

     const token = await jwt.sign(tokenData, process.env.TOKEN!,{expiresIn: '1d'})
     const response = NextResponse.json(
        {message: "login successful",
        success:true,
        
        })

    response.cookies.set("token", token,
        {httpOnly: true,}
    )
     return response
    } catch (error :  any) {
        console.log(error)
        return NextResponse.json(
            {error: error.message},
            {status:500}
        )
        
    }

}




