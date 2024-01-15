const { Router } = require("express")

const SchedulesControllers = require("../controller/ScheduleController")
const ScheduleController = new  SchedulesControllers()

const scheduleRoutes = Router()

scheduleRoutes.post("/", ScheduleController.create)

module.exports = scheduleRoutes