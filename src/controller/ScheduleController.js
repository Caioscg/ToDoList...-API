const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class ScheduleController {
    async create(req, res) {
        const { task } = req.body
        const user_id = req.params

        const data = new Date()

        const month = data.getMonth() + 1
        const day = data.getDate()

        const [ schedule_id ] = await knex("schedule").insert({
            user_id,
            day,
            month
        })

        const taskInsert = task.map(description => {
            return {
                schedule_id,
                description,
                user_id,
                status: 0
            }
        })

        await knex("task").insert(taskInsert)

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

        const tags = await knex("tags").where({ note_id: id }).orderBy("name")

        return res.json({
            tags
        })
    }
}

module.exports = ScheduleController