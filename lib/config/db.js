import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect(import.meta.env.MONGO_DB);
    console.log('DB Connected');
}