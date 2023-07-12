const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const pool = require("../sql/connection")

require("dotenv").config()


const signin = (req,res) => {
    console.log("helloworld")
    const {email, password} = req.body

    pool.query(`SELECT * FROM users WHERE email = ?`, 
    [email],
    async (err,user, fields) => {
        console.log(err,user)
        const hashedPassword = await bcrypt.compare(password, user[0].password)

        if(hashedPassword){
            const token = jwt.sign(user[0], process.env.DB_JWT_SECRET)    
            console.log(token)
            res.json({token})
        }
        else {
            res.json("invalid credentials")
        }
    })
}
module.exports = {
    signin
}



  