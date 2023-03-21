const http = require("http")
const port = 3000


const rotas = {
    '/': 'Curso node',
    '/livros':  'Entrei na página de livros',
    '/autores': 'Listagem de autores',
    '/editores': 'Pag de editora',
    '/sobre' : 'Página de sobre',
}
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);

})


server.listen(port, ()=> {
    console.log(`Servidor escutando em http://localhost:${port}`)
}
);