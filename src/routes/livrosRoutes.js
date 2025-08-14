import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();
routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/search", LivroController.listarLivroPorEditora);
routes.get("/livros/:id", LivroController.listarLivroPorId);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/all", LivroController.deletarTodosOsLivros);
routes.delete("/livros/:id", LivroController.deletarLivro);

export default routes;