import express from "express";
import conectaNaDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDB();
conexao.on("error", (erro) => console.error(erro));
conexao.once("open", () => console.log("Conexão com banco de dados feita com sucesso"));

const app = express();
routes(app);

export default app;