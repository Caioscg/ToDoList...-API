const { json } = require("express")
const knex = require("../database/knex")

class TaskController {
    async delete(req, res) {
        const { id } = req.params

        await knex("task").where({ id }).delete()

        return res.json()
    }
}

module.exports = TaskController