import mongoose from "mongoose";

const userModel = mongoose.Schema({
    username: {
        type: String,
        required: [true,"Please Enter the valid username"]
    },
    email: {
        type: String,
        required: [true,"Please Enter the valid Email"]
    },
    password: {
        type: String,
        required: [true,"Please Enter the valid Password"]
    }
},{
    timestamps: true
})

const User = mongoose.model('User',userModel);
export default User;
