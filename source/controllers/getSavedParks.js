const pool = require("../sql/connection")



const getSavedParks = (req,res) => {
    const userID = req.user.id

    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM visitedParks where user_id = ?"

        pool.query(query,[userID], (err, results) => {
            if(err){
                console.error("Error retrieving park", err)
                reject(err)
            }else {
                console.log("Parks retrieved successfully", results)
                resolve(results)
            }
        })
    })
}

module.exports = {
    getSavedParks
}