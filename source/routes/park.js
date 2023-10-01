const express = require("express")
const router = express.Router()
const parkControllers = require("../controllers/park")
const {authenticateJWT} = require("../auth")
// const auth = require("../auth")

router.post("/park", authenticateJWT, parkControllers.park )
// router.post("/signin", auth.authenticateJWT, signinControllers.signin )

module.exports = router