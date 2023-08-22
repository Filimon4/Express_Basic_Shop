const {Brand} = require("../models/model.js")
const ApiError = require("../Errors/ApiError.js")

class BrandController {

    create = async (req, res, next) => {
        const {name} = req.body
        if (!name || name.length <= 2) return next(ApiError.badRequest("Name was not specified or invalid"))
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    getAll = async (req, res, next) => {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

}

module.exports = new BrandController();