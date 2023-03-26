import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livros.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso!")
}
)
const App = express();
App.use(express.json());

routes(App);

//App.get("/livros/:id", (req, res) => {
// const result = livros[req.params.id];
//if (result) res.status(200).json(result);
//else
// res.status(404).json({
// error: true,
//message: "Livro não encontrado",
//});
//});

App.delete("/livros/:id", (req, res) => {
  let { position } = buscaLivro(req.params.id);
  console.log(position);
  if (position >= 0) {
    livros.splice(position, 1);
    res.status(200).json({
      message: "produto apagado com sucesso!",
    });
  } else {
    res.status(404).json({
      error: true,
      message: " seu produto não foi encontrado",
    });
  }
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
