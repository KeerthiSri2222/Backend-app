import mongoose from "mongoose";
const dbConnect= async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
    }
    catch(err){
        console.log(err);
    }
}

export default dbConnect;