import livros from "../models/Livros.js";

const LivroController = () => {

    const listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }
}

export default LivroController;