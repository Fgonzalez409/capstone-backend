const express = require("express")
const router = express.Router()
const getParksControllers = require("../controllers/getParks")

router.get("/getParks", usersControllers.list )

module.exports = router