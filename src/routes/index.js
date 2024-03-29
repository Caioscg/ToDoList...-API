const { Router } = require("express")

const userRoutes = require("./user.routes")
const scheduleRoutes = require("./schedule.routes")
const taskRoutes = require("./task.routes")
const sessionsRoutes = require("./sessions.routes")

const routes = Router()

routes.use("/users", userRoutes)
routes.use("/schedule", scheduleRoutes)
routes.use("/task", taskRoutes)
routes.use("/sessions", sessionsRoutes)

module.exports = routes