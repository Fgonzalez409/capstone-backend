const express =  require('express')
const {movies} = require("./mockdata")
const app = express()
const authenticateJWT = require("./source/auth")
const users = require("./source/routes/users")
const signin = require("./source/routes/signin")
const signup = require("./source/routes/signup")
app.use(express.json())
const PORT = process.env.PORT || 8080

app.use("/", users)
app.use("/", signin)
app.use("/", signup)


app.get("/", (req,res) => {
    res.json({
        message: "Welcome to the API"
    })
})

app.get("/movies", authenticateJWT, (req,res) => {
    res.json(movies)
})

app.get("/movies/:id", (req,res) => {
    const {id} = req.params
    const foundMovie = movies.find((movie) => movie.id === +id)
    res.json(foundMovie)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})