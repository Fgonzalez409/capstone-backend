const pool = require("../sql/connection")

//save park to DB
const comments = (req,res) => {
    const{parkCode} = req.body
    const{comment} = req.body
    console.log(req.user)
    const {id: user_id} = req.user
    pool.query(`INSERT INTO comments (parkCodeComment, comment,user_id) VALUES ( ?, ?, ?)`, 
    [parkCode, comment, user_id],
    (err, rows, fields) => {
        if(err) {
            return res.status(500).json({message: err.message})
        }

        res.json(rows)
    })
}

module.exports = {
    comments,
}