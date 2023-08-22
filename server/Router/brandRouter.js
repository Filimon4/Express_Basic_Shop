const Router = require("express");
const router = new Router();
const brandController = require("../Controllers/brandController.js")
const checkRoleMiddleware = require("../Middleware/checkRoleMiddleware.js")

router.post("/", checkRoleMiddleware("ADMIN"), brandController.create)
router.get("/", brandController.getAll)

module.exports = router