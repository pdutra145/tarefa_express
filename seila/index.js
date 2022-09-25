const express = require("express")
const path = require("path")

const router = express.Router()

const basePath = path.join(__dirname, "../templates")

// lendo o body do post
router.use(express.urlencoded({extended:true}))
router.use(express.json())

// configurando rotas

router.get("/home", (req, res) => {
    res.sendFile(`${basePath}/seila.html`)
})

router.post("/save", (req, res) => {
    const info = req.body

    console.log(`Nome: ${info.name}, Idade: ${info.idade}`)

    res.sendFile(`${basePath}/seila.html`)
})

module.exports = router