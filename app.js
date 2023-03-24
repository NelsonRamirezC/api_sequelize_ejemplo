const express = require('express')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

let { Comentario, Post, Usuario } = require("./models");

app.listen(3000, () => console.log("http://localhost:3000/"))


//rutas

app.get("/usuarios", async (req, res) => {
    try {
        let usuarios = await Usuario.findAll({
            include: "publicaciones"
        });
        res.status(200).json({code:200, data: usuarios})
    } catch (error) {
        res.status(500).json({code: 500, error: "Error al buscar los usuarios."})
    }

})

app.get("/comentarios", async (req, res) => {
    try {
        let comentarios = await Comentario.findAll({
            include: {
                model: Usuario,
                as: "autor",
                attributes: ['nombre', 'email']
            },
            attributes: ['id', 'comentario']
        });
        res.status(200).json({code:200, data: comentarios})
    } catch (error) {
        console.log(error)
        res.status(500).json({code: 500, error: "Error al buscar los comentarios."})
    }
  
})

app.get("/posts", async (req, res) => {
    try {
        let posts = await Post.findAll({
            include:{
                model: Comentario,
                as:"comentarios",
            },
        });
        res.status(200).json({code:200, data: posts})
    } catch (error) {
        res.status(500).json({code: 500, error: "Error al buscar los posts."})
    }
})