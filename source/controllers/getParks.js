const pool = require("../sql/connection")



const list = (req, res) => {console.log(pool)
    const {user_id} = req.body
    pool.query(`SELECT * FROM visitedPark WHERE user_id = ?`, 
    [user_id],
    (err, rows, fields) => {
        res.json(rows)

    })
}

module.exports = {
    list
}