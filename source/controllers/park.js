const pool = require("../sql/connection")


const park = (req,res) => {
    const{park_id} = req.body
    const {user_id} = req.user
    pool.query(`INSERT INTO visitedParks ( park_id, user_id) VALUES ( ?, ?)`, 
    [park_id, user_id],
    (err, rows, fields) => {
        if(err) {
            return res.status(500).json({message: err.message})
        }

        res.json(rows)
    })
}

module.exports = {
    park,
}