const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const pool = require('../sql/connection')

const signup = async (req, res) => {
    const { first_name, email, password} = req.body;
  
    const hashedPassword = await bcrypt.hash(password, 8);
  
    pool.query(`INSERT INTO ?? (??, ??, ??)   VALUES (?, ?, ?)`,
     ["users","first_name","email", "password" , 
     first_name, email, hashedPassword ], 
     (err, rows, fields) => {
      res.json("user created")  
    })
    };

module.exports = {
    signup
}



  