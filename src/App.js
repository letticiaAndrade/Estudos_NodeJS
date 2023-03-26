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

export default App;
