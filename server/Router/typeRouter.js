const Router = require("express");
const router = new Router();
const typeControlloer = require("../Controllers/typeController.js");

router.post("/", typeControlloer.create)
router.get("/", typeControlloer.get)

module.exports = router