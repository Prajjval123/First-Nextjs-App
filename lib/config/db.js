import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://prajjvalmishra123:mguuQB9KkCSfFoCk@cluster0.3vr6lh2.mongodb.net/todo-app');
    console.log('DB Connected');
}