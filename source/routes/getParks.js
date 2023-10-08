const express = require("express")
const router = express.Router()
const getParksControllers = require("../controllers/getParks")
const {authenticateJWT} = require("../auth")

router.get("/getParks", authenticateJWT, async(req, res)=> {
    const userID = req.user.id
    console.log(userID)
    try {
        const parks = await getParksControllers.list(userID)
        res.json(parks)
    } catch {
        console.error("error retrieving park", error)
        res.status(500).json({error: "Server Error"})
    }
})

module.exports = router