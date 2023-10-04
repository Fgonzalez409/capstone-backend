const express = require("express")
const router = express.Router()
const getParksControllers = require("../controllers/getParks")

router.get("/getParks", async(req, res)=> {
    const user_id = req.user_id
    try {
        const parks = await getParksControllers.list(user_id)
        res.json(parks)
    } catch {
        console.error("error retrieving park", error)
        res.status(500).json({error: "Server Error"})
    }
})

module.exports = router