const jwt = require("jsonwebtoken");

module.exports = (role) => {
    return (req, res, next) => {
        if (req.method === "OPTIONS") {
            next()
        }

        try {
            const token = req.headers.authorization.split(" ")[1];
            if (!token) {
                return res.status(401).json({message: "User does not authorize1"})
            }

            const decode = jwt.verify(token, process.env.SECRET_KEY)
            if (decode.role !== role) {
                return res.status(403).json({message: "Access denied"})
            }
            req.user = decode.user
            next()
        } catch (error) {
            res.status(401).json({message: "User does not authorize"})
        }
    }
}