const express = require("express")
const router = express.Router()
const SQLusersController = require("../controllers/SQLusers")

router.get("/SQLusers", SQLusersController.list)

module.exports = router