const pool = require("../sql/connection")


const park = (req,res) => {
    const{id, park_id, user_id} = req.body
    pool.query(`INSERT INTO visitedParks (id, park_id, user_id) VALUES (?, ?, ?)`, 
    [id, park_id, user_id],
    (err, rows, fields) => {
        if(err) {
            return res.status(500).json({message: err.message})
        }

        res.json({visitedParks})
    })
}

module.exports = {
    park,
}