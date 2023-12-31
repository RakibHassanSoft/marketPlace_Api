const mongoose= require('mongoose')
const {Schema} =mongoose

const userSchema = new Schema(
    {
    username:
        {
            type:String,
            required:true,
            unique:true
        },
    email:
        {
            type:String,
            required:true,
            unique:true
        },
    password:
        {
            type:String,
            required:true
        },
    img:
        {
            type:String,
            required:false
        },
    country:
        {
            type:String,
            required:true
        },
    phone:
        {
            type:String,
            required:false
        },
    decs:
        {
            type:String,
            required:false
        },
    isSeller:
        {
            type:Boolean,
            required:false
        }
    },
    {
        timestamps:true
    })


const User = mongoose.model('User', userSchema); // Create the model using the schema
module.exports = User; // Export the model