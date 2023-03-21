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

export default App;