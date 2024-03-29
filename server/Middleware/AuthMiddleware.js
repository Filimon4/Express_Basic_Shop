const jwt = require("jsonwebtoken")


module.exports = (req, res, next) => {
    if (req.method === "OPTIONS") {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
        if (!token) {
            return res.status(401).json({message: "Invalid Token"})
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY)

        req.user = decoded
        next()
    } catch (error) {
        res.status(401).json({message: "User does not authorize"})
    }
}