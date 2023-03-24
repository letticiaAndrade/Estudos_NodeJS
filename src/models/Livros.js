import mongoose from "mongoose";


// um schema, modelo de atributos
const livroSchema = new mongoose.Schema(
    {
    id: {type:String}, 
    titulo: {type:String, require: true},
    autor: {type:String, require: true},
    editora: {type:String, require: true},
    numeroPaginas: {type: Number},
}
)

// criar uma variavel para permitir que seja exportada em outro lugar e ser usada
// const livros= mongoose.model()

// criar uma coleção chamada livros 
// const livros= mongoose.model('livros');
const livros= mongoose.model('livros', livroSchema);

export default livros;

