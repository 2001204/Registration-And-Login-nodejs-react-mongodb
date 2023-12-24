import mongoose, { Schema } from "mongoose";

const studentSchema=new Schema({
    username:String,
    email:String,
    password:String,
    confirmpassword:String,
    gender:String
    
    
});

export const User=mongoose.model("user",studentSchema);