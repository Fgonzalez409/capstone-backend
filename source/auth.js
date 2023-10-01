const jwt = require("jsonwebtoken")
require("dotenv").config()

function authenticateJWT(req, res, next){
    console.log(req)
    const authHeader = req.headers.authorization
    //check if bearer token exists
    if(authHeader){
        const token = authHeader.split(" ")[1] //throws away the bearer word
        
        jwt.verify(token, process.env.DB_JWT_SECRET, (err, user) => {
            if(err){
                res.sendStatus(403)
            }
            req.user = user
            next()
        })
    }
            else {
                res.sendStatus(403)
            }
}

module.exports = {authenticateJWT}