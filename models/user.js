const mongoose = require("mongoose")
const validator =require("validator")
const Schema = mongoose.Schema

const UserModel= new Schema(
    {
        name:{
            type:String,
            required:[true,"Please provide a name"] //send custom message
        },
        email:{
            type:String,
            required:true,
            validate(value){ //validate the email with validator module  
                if(!validator.isEmail(value)){
                    throw Error("Not a valid Email")
                }
            }
        },
        password:{
            type:String,
            required:true,
        },
        createdAt:{
            type:Date,
            default: Date.now()
        },
        updatedAt:{
            type:Date,
            default: Date.now()
        }
    }
)

module.exports=mongoose.model("users",UserModel)