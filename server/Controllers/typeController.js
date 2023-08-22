const {Type} = require("../models/model.js")
const ApiError = require("../Errors/ApiError.js")

class TypeController {
    
    create = async (req, res, next) => {
        const {name} = req.body
        if (!name || name.length <= 2) return next(ApiError.badRequest("Name was not provided or invalid"))
        const type = await Type.create({name})
        return res.json(type)
    }

    get = async (req, res, next) => {
        const types = await Type.findAll()
        return res.json(types)
    }
}

module.exports = new TypeController();