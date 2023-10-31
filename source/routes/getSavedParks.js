const express = require("express")
const router = express.Router()
const getSavedParksControllers = require("../controllers/getSavedParks")
const {authenticateJWT} = require("../auth")

router.get("/getSavedParks", getSavedParksControllers.getSavedParks)

module.exports = router


// , authenticateJWT, async(req, res)=> {
//     // const userID = req.user.id
//     // console.log(userID)
//     // try {
//     //     const parks = await getSavedParksControllers.list(userID)
//     //     res.json(parks)
//     // } catch {
//     //     console.error("error retrieving park", error)
//     //     res.status(500).json({error: "Server Error"})
//     // }
// }