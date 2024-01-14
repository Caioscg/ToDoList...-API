const { hash } = require("bcryptjs")
const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class UsersControllers {
    async create(req, res) {
        const { name, password, email } = req.body

        if (!name) {
            throw new AppError("O nome é obrigatório!")
        }
        if (!email) {
            throw new AppError("O email é obrigatório!")
        }
        if (!password) {
            throw new AppError("A senha é obrigatória!")
        }

        const [ checkIfEmailExists ] = await knex("users").where({ email })

        if (checkIfEmailExists) {
            throw new AppError("Este e-mail já está em uso!")
        }

        const hashedPassword = await hash(password, 8)

        await knex("users").insert({ name, email, password: hashedPassword })

        return res.status(201).json()
    }
}

module.exports = UsersControllers