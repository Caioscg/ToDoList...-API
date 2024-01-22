const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class ScheduleController {
    async create(req, res) {
        const { tasks } = req.body
        const { user_id } = req.params  

        const data = new Date()

        const month = data.getMonth() + 1
        const day = data.getDate()
        
        const [ schedule_id ] = await knex("schedule").insert({
            user_id,
            day,
            month
        })
        
        const tasksInsert = tasks.map(description => {
            return {
                schedule_id,
                description,
                user_id,
                status: 0
            }
        })
        
        await knex("task").insert(tasksInsert)

        return res.status(201).json()
    }

    async update(req, res) {
        const { tasks } = req.body
        const user_id = req.params

        const data = new Date()

        const month = data.getMonth() + 1
        const day = data.getDate()
    }

    async show(req, res) {
        const { id } = req.params

        const tasks = await knex("task").where({ schedule_id: id }).orderBy("name")
        console.log(tasks)

        return res.json({
            tasks
        })
    }
}

module.exports = ScheduleController