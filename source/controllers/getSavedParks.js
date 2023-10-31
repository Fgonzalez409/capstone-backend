const pool = require("../sql/connection")



const getSavedParks = () => {

    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM visitedParks where user_id = ?"

        pool.query(query,[user_id], (err, results) => {
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