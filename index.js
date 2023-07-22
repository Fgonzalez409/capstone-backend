const express =  require('express')

//routes
const users = require("./source/routes/users")
const signin = require("./source/routes/signin")
const signup = require("./source/routes/signup")
const SQLusers = require("./source/routes/SQLusers")


const app = express()

//middleware
const authenticateJWT = require("./source/auth")

app.use(express.json())
const PORT = process.env.PORT || 8080

app.use("/", users)
app.use("/", signin)
app.use("/", signup)
app.use("/", authenticateJWT, SQLusers)



app.get("/", (req,res) => {
    res.json({
        message: "Welcome to the API"
    })
})



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})