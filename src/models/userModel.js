import mongoose from "mongoose";
import { type } from "os";


const UserSchema = mongoose.Schema({
    username : {
        type: String,
        required: [true, "please enter a username"] ,
        unique: true
    },
    email:{
        type: String,
        required: [true, "please enter an email"] ,
    },
    password:{
        type: String,
        required: [true, "please enter a password"] ,
    },
    isVerified:{
        type: Boolean,
        default : false
    },
    isVerified:{
        type: Boolean,
        default : false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry : Date,
    verifyToken: String,
    verifyTokenExpiry: Date,

})

const User = mongoose.models.users || mongoose.model("users", UserSchema);

export default User