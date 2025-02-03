import mongoose from "mongoose";


export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://mounikanelluri28:mounikanelluri@cluster0.ve4nk.mongodb.net/FONTEND').then(()=>console.log("DB Connected"))
}