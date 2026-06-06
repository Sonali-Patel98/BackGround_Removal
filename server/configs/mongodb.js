import mongoose from "mongoose";

const connectDB = async ()=>{

    mongoose.connection.on('connected',()=>{
        console.log("DataBase is Connected");
        
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/BG_Remove`)
}

export default connectDB