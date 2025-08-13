import mongoose from "mongoose";

export default async function conectaNaDB() {
    mongoose.connect(process.env.DB_CONECTION_STRING);
    return mongoose.connection;
};