//TODO arq criado com 'npx knex migrate:make createTags' (precisa do migrations criado corretamente no knexfile)
exports.up = knex => knex.schema.createTable("task", table => {
    table.increments("id")
    table.integer("schedule_id").references("id").inTable("schedule").onDelete("CASCADE") //! se deletar a nota, as tags vinculadas ao id da nota tmb é deletado
    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE")
    table.text("description").notNullable()
})

exports.down = knex => knex.schema.dropTable("task")
