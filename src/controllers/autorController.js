import { autor } from "../models/Autor.js";

export default class AutorController {

    static async listarAutores(req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (erro) {
            res.status(500).json({ message: `Falha na requisição - ${erro}` });
        };
    }

    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `Falha na requisição - ${erro}` });
        };
    };

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Criado com sucesso!", autor: novoAutor });
        } catch (erro) {
            res.status(500).json({ message: `Falha na requisição - ${erro}` });
        };
    };

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Autor atualizado", autor: await autor.findById(id) })
        } catch (erro) {
            res.status(500).json({ message: `Falha na requisição - ${erro}` });
        };
    };

    static async deletarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: "Autor deletado" });
        } catch (erro) {
            res.status(500).json({ message: `Falha na requisição - ${erro}` });
        };
    }

    static async deletarTodosOsAutores (req, res) {
        try {
            await autor.deleteMany({});
            res.status(200).json({ message: "Autores deletados" });
        } catch (erro) {
            res.status(500).json({ message: `Falha na requisição - ${erro}` });
        };
    };
};