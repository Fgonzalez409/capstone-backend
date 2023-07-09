const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const {users} = require("../../mockdata")

const signin = async(req,res) => {
    const {email, password} = req.body
    const foundUser = users.find((user) => user.email === email )

    const hashedPassword = await bcrypt.compare(password, foundUser.password)

    if(hashedPassword){
        const token = jwt.sign(foundUser, 'ilovetacos')    
        res.json({token})
    }
    else {
        res.json("invalid credentials")
    }
}

module.exports = {
    signin
}



  