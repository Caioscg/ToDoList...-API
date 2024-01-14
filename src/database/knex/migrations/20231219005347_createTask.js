//TODO 'npx knex migrate:make createTask'
exports.up = knex => knex.schema.createTable("task", table => {
    table.increments("id")
    table.integer("schedule_id").references("id").inTable("schedule").onDelete("CASCADE")
    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE")
    table.text("description").notNullable()
    table.bool("status").notNullable()
})

exports.down = knex => knex.schema.dropTable("task")
