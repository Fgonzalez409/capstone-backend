const express = require("express")
const router = express.Router()
const getSavedParksControllers = require("../controllers/getSavedParks")
const {authenticateJWT} = require("../auth")

router.get("/getSavedParks",authenticateJWT, getSavedParksControllers.getSavedParks)

module.exports = router