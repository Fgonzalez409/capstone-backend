const express = require("express")
const router = express.Router()
const usersControllers = require("../controllers/users")

router.get("/users", usersControllers.list )

module.exports = router