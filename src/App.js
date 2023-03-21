import express from "express";

const App = express();

const livros = [
    {id:1,  "título": 'Senhor dos aneis'},
    {id:2,  "título": 'O Hobiit'},
]

App.get('/', (req, res)=>{
    res.status(200).send ("Curso de Node");

})

App.get('/livros', (req, res)=> {
    res.status(200).json(livros)
})

App.post('/livros', (req, res)=>{

    livros.push(req.body)
    res.status(201).send("Livro foi cadastrado com sucesso!")
})

export default App;