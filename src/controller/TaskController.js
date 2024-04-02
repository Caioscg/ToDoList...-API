const { json } = require("express")
const knex = require("../database/knex")

class TaskController {
    async delete(req, res) {
        const { id } = req.params

        await knex("task").where({ id }).delete()

        return res.json()
    }
    async update(req, res) {
        const { id } = req.params
        
        const [ task ] = await knex("task").where({ id })

        await knex("task").where({ id }).update({ status: !task.status })

        return res.json()
    }
}

module.exports = TaskController