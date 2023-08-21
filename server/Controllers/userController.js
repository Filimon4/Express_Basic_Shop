const ApiError = require("../Errors/ApiError")

class User {

    registration = async (req, res, next) => {

    }

    login = async (req, res, next) => {

    }

    auth = async (req, res, next) => {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest("There is no id"))
        }
        res.json({message: id})
    }
}

module.exports = new User();
