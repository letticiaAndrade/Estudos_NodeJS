import express from "express";
import LivroController from "../controllers/livroController.js";

const router = express.Router();

router
    // se houver uma requisição do tipo get em livros faça isso
    .get("/livros", LivroController.listarLivros)
    .post("/livros", LivroController.cadastrarLivro)
export default router;