const pool = require("../sql/connection")



const list = (userID) => {

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
    list
}