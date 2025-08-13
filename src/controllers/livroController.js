import livro from "../models/Livro.js"

export default class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({ message: `Falha na requisição - ${erro}` })
        }
    };

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `Falha na requisição - ${erro}` })
        }
    };

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "Criado com sucesso!", livro: novoLivro });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao cadastrar livro.` });
        };
    };

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado", livro: await livro.findById(id) });
        } catch (erro) {
            res.status(500).json({ message: `Falha na requisição - ${erro}` })
        }
    };

    static async deletarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id)
            res.status(200).json({ message: "Livro deletado" })
        } catch (erro) {
            res.status(500).json({ message: `Falha na requisição - ${erro}` })
        }
    }
};