import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            requried:true,
            unique:true,
        },
        password:{
            type:String,
            requried:true,
            minlength:[6,"Password must be atleast 6 characters"]
        },
        lastLogin:{
            type:Date,
            default:Date.now()
        },
        isVerified:{
            type:Boolean,
            default:false,
        },
        resetPasswordToken:String,
        resetPasswordExpiresAt:Date,
        verificationToken:String,
        verificationTokenExpiresAt:Date
    },
    {
        timestamps:true
    }
)

const User = mongoose.model("User", userSchema);
export default User