const { Router } = require("express")

const SchedulesControllers = require("../controller/ScheduleController")
const ScheduleController = new  SchedulesControllers()

const ensureAuth = require("../middlewares/ensureAuth")

const scheduleRoutes = Router()

scheduleRoutes.use(ensureAuth)  // middleware passado antes das rotas que precisam do token

scheduleRoutes.post("/", ScheduleController.create)
scheduleRoutes.put("/:id", ScheduleController.update)
scheduleRoutes.get("/:id", ScheduleController.show)

module.exports = scheduleRoutes