const { Router } = require("express")

const TasksControllers = require("../controller/TaskController")
const TaskController = new  TasksControllers()

const taskRoutes = Router()

taskRoutes.delete("/:id", TaskController.delete)

module.exports = taskRoutes