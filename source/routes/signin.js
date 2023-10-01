const express = require("express")
const router = express.Router()
const signinControllers = require("../controllers/signin")
// const auth = require("../auth")

router.post("/signin", signinControllers.signin )
// router.post("/signin", auth.authenticateJWT, signinControllers.signin )

module.exports = router
