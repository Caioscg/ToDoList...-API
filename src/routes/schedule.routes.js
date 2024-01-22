const { Router } = require("express")

const SchedulesControllers = require("../controller/ScheduleController")
const ScheduleController = new  SchedulesControllers()

const scheduleRoutes = Router()

scheduleRoutes.post("/:user_id", ScheduleController.create)
scheduleRoutes.get("/:id", ScheduleController.show)

module.exports = scheduleRoutes