const pool = require("../sql/connection")

const list = (req, res) => {console.log(pool)
    pool.query("SELECT * FROM visitedParks", (err, rows, fields) => {
        res.json(rows)

    })
}

module.exports = {
    list
}