import mongoose from "mongoose";

const connectDB  = mongoose.connect(process.env.MONGO_URL,{
    appName: "JobsAPI",
})


export default connectDB;