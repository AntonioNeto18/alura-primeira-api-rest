import mongoose from "mongoose";

const autorScheama = new mongoose.Schema({
    id: { type: mongoose.Types.ObjectId },
    nome: { type: String, required: true },
    nacionalidade: { type: String }
}, { versionKey: false });

const autor = mongoose.model("autores", autorScheama);

export { autor, autorScheama };