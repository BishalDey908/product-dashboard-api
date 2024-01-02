const { registerUser, loginUser } = require("../controllers/userController")

const router = require("express").Router()

// /user/register
router.post("/register",registerUser)
router.post("/login",loginUser)
module.exports = router