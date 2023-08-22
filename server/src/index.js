require("dotenv").config()

const path = require("path");
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload")
const {sequelize} = require("./database.js")
const model = require("../models/model.js")
const router = require("../Router/index.js");
const errorHandler = require("../Middleware/ErrorHandlingMiddleware.js")

const PORT = process.env.PORT || 5000
const app = express();

app.use(cors())
app.use(express.json())
app.use(fileUpload())
app.use(express.static(path.resolve(__dirname, "..","static")))
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
