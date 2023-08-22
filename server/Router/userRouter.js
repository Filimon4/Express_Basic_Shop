const Router = require("express");
const router = new Router();
const {body} = require("express-validator")
const userController = require("../Controllers/userController.js")
const authMiddleware = require("../Middleware/AuthMiddleware.js")

router.post(
    "/registration",
    [body("email").isEmail(), body("password").isLength({min:3, max: 32})],
    userController.registration
)

router.post("/login", userController.login)
router.get("/auth", authMiddleware, userController.auth)

module.exports = router