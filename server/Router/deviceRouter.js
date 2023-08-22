const Router = require("express");
const router = new Router();
const deviceController = require("../Controllers/deviceController.js")
const checkRoleMiddleware = require("../Middleware/checkRoleMiddleware.js")

router.post("/", checkRoleMiddleware("ADMIN"), deviceController.create)
router.get("/", deviceController.getAll)
router.get("/:id", deviceController.getOne)

module.exports = router