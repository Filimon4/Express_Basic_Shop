require("dotenv").config()

const express = require("express");
const cors = require("cors");
const {sequelize} = require("./database.js")
const model = require("../models/model.js")
const router = require("../Router/index.js");
const errorHandler = require("../Middleware/ErrorHandlingMiddleware.js")

const PORT = process.env.PORT || 5000
const app = express();

app.use(cors())
app.use(express.json())
app.use("/api", router)
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log("listening on port " + PORT))
    } catch (error) {
        console.log(error);
    }
}

start();
