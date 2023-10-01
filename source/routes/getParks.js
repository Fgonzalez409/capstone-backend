const express = require("express")
const router = express.Router()
const usersControllers = require("../controllers/users")

router.get("/park", usersControllers.list )

module.exports = router