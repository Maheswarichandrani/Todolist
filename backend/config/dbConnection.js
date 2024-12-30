import mongoose from "mongoose";

const connectDB = async(req,res) => {
    try {
        const connect = await mongoose.connect("mongodb://localhost:27017");
        console.log(`DataBase Connected to ${connect.connection.host} and ${connect.connection.name}`)
    } catch (error) {
        console.log(error.message);
        console.log(`Failed to Connect Database`);
    }
}

export default connectDB

