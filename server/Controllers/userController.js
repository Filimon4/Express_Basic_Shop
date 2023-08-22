const {User, Basket} = require("../models/model.js")
const {validationResult} = require("express-validator")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const ApiError = require("../Errors/ApiError")

const generateJWT = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: "24h"}
    )
}

class UserController {

    registration = async (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return next(ApiError.badRequest("Invalid"))
        }
        const {email, password, role} = req.body
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest("There is already a user with this email"))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJWT(user.id, email, role)
        return res.json({token})
    }

    login = async (req, res, next) => {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal("There is no user"))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        console.log(comparePassword, password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal("Invalid password"))
        }
        const token = generateJWT(user.id, user.email, user.role)
        return res.json({token})
    }

    auth = async (req, res, next) => {
        const token = generateJWT(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }

}

module.exports = new UserController();
