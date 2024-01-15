const { Router } = require("express")

const userRoutes = require("./user.routes")
const scheduleRoutes = require("./schedule.routes")

const routes = Router()

routes.use("/users", userRoutes)
routes.use("/schedule", scheduleRoutes)

module.exports = routes