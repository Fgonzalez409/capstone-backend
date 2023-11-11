const express = require("express")
const router = express.Router()
const commentsControllers = require("../controllers/comments")
const {authenticateJWT} = require("../auth")

router.post("/comments", authenticateJWT, commentsControllers.comments )

module.exports = router