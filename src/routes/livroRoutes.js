import express from "express";
import LivroController from "../controllers/livroController.js";

const router = express.Router();

router
    // se houver uma requisição do tipo get em livros faça isso
    .get("/livros", LivroController.listarLivros)
    .get("/livros/:id", LivroController.listarLivroPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
export default router;