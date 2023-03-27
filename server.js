import App from "./src/App.js";

// cria uma constante para guardar a porta
const port = process.env.PORT || 3000;

App.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
