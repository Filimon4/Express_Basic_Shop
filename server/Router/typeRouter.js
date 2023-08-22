const Router = require("express");
const router = new Router();
const typeControlloer = require("../Controllers/typeController.js");
const checkRoleMiddleware = require("../Middleware/checkRoleMiddleware.js")

router.post("/", checkRoleMiddleware("ADMIN"), typeControlloer.create)
router.get("/", typeControlloer.get)

module.exports = router