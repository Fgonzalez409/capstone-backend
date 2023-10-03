const express = require("express")
const router = express.Router()
const parkControllers = require("../controllers/park")
const {authenticateJWT} = require("../auth")

router.post("/park", authenticateJWT, parkControllers.park )

module.exports = router