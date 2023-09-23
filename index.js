//run on vercel using npx vercel --prod

const express =  require('express')

//routes
const cors = require("cors")
const app = express()
const users = require("./source/routes/users")
const signin = require("./source/routes/signin")
const signup = require("./source/routes/signup")
const SQLusers = require("./source/routes/SQLusers")


//middleware
const authenticateJWT = require("./source/auth")

app.use(express.json())
app.use(cors())

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    // !!THiS IS FOR DEV - We replace this once we have our production URL in place.


//******************************************************************************************************************************************************* */
    res.setHeader("Access-Control-Allow-Origin", "https://capstone-backend-blush.vercel.app");
//*****************************************************************************************************************************************************

    // res.setHeader(
    //   "Access-Control-Allow-Origin",
    //   "https://melodious-churros-bab5cd.netlify.app"
    // );
  
    // Request methods you wish to allow
    res.setHeader("Access-Control-Allow-Methods", "POST");
  
    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
  
    // Pass to next layer of middleware
    next();
  });
const PORT = process.env.PORT || 8080

app.use("/", users)
// app.use("/", authenticateJWT, SQLusers)
app.use("/", signin)
app.use("/", signup)




app.get("/", (req,res) => {
    res.json({
        message: "Welcome to the API"
    })
})



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})