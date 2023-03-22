import express from "express";

const App = express();
App.use(express.json());
const livros = [
  { id: 1, título: "Senhor dos aneis" },
  { id: 2, título: "O Hobiit" },
];

App.get("/", (req, res) => {
  res.status(200).send("Curso de Node");
});

App.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

App.get("/livros/:id", (req, res) => {
  const result = livros[req.params.id];
  if (result) res.status(200).json(result);
  else
    res.status(404).json({
      error: true,
      message: "Livro não encontrado",
    });
});

App.post("/livros", (req, res) => {
  livros.push({
    id: livros.length + 1,
    ...req.body,
  });

  res.status(201).send("Livro foi cadastrado com sucesso!");
});

App.put("/livros/:id", (req, res) => {
  let { livro, position} = buscaLivro(req.params.id);
  livro = {
    id: livro.id,
    ...req.body,
  };
  livros[position] = livro;
  res.status(200).json(livros[position]);
});

function buscaLivro(id) {
  const livro = livros.find((livros) => livros.id == id);
  const position = livros.findIndex((livros) => livros.id == id);
  return {
    livro: livro,
    position: position,
  };
}
export default App;
