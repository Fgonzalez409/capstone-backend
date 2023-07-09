const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const {users} = require("../../mockdata")

const signup = async (req, res) => {
    console.log("Hello world");
    const { email, password } = req.body;
  
    const hashedPassword = await bcrypt.hash(password, 8);
  
    users.push({
      email,
      password: hashedPassword,
    });
  
    res.json(users.at(-1));
  };

module.exports = {
    signup
}



  