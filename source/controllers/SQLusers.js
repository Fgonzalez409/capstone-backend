const pool = require("../sql/connection")

const list = (req,res) => {
    pool.query(`SELECT * FROM users`, (err, SQLusers, fields) => {
        if(err) {
            return res.status(500).json({message: err.message})
        }

        res.json({SQLusers})
    })
}

module.exports = {
    list,
}