const express = require("express")
const app = express()
const path = require("path")

const seila = require("./seila")

const port = 5000

const basePath = path.join(__dirname, "templates")

app.use(express.static("public"))

app.use("/seila", seila)

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.use(function(req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {console.log(`app rodando na porta ${port}`)})