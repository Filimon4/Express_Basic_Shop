const {Device, DeviceInfo} = require("../models/model.js")
const ApiError = require("../Errors/ApiError.js")
const uuid = require("uuid")
const path = require("path")

class DeviceController {

    create = async (req, res, next) => {
        let device;
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, "..", "static", fileName))

            device = await Device.create({name, price, brandId, typeId, img: fileName})

            if (info) {
                info = JSON.parse(info)
                console.log(info)
                info.forEach(elem => {
                    DeviceInfo.create({
                        title: elem.title,
                        description: elem.description,
                        deviceId: device.id
                    })
                });
            }

        } catch (error) {
            console.log(error)
            next(ApiError.badRequest(error))
        }
        return res.json(device)
    }

    getAll = async (req, res, next) => {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})

        } else if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset})

        } else if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset})

        } else if (brandId && typeId) {
            devices = await Device.findAndCountAll({where: {brandId, typeId}, limit, offset})

        }
        return res.json(devices)
    }

    getOne = async (req, res, next) => {
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: "info"}]
            }
        )
        return res.json(device)
    }

}

module.exports = new DeviceController();