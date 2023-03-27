import mongoose from "mongoose";

// um schema, modelo de atributos
const livroSchema = new mongoose.Schema(
    {
        id: { type: String },
        titulo: { type: String, required: true },
        autor: { type: String, required: true },
        editora: { type: String, required: true },
        numeroPaginas: { type: Number },
    }
)

// criar uma variavel para permitir que seja exportada em outro lugar e ser usada
// const livros= mongoose.model()

// criar uma coleção chamada livros 
// const livros= mongoose.model('livros');
const livros = mongoose.model('livros', livroSchema);

export default livros;

