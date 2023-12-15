import config from "../../../knexfile"
import knex from "knex"

const connection = knex(config.development)  //*? para conectar o knex com o banco de dados

module.exports = connection
