import express from "express";
import livros from "./livroRoutes.js"

const routes = (App) => {

    App.route("/").get((req, res) => {
        res.status(200).send({ titulo: "Curso de node" })
    })

    App.use(
        express.json(),
        livros
    )
}

export default routes;