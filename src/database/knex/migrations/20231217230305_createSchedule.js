exports.up = knex => knex.schema.createTable("schedule", table => {
    table.increments("id")
    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE")
    table.integer("day")
    table.integer("month")
})

exports.down = knex => knex.schema.dropTable("schedule")