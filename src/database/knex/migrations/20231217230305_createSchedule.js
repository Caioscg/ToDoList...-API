exports.up = knex => knex.schema.createTable("users", table => {
    
})

exports.down = knex => knex.schema.dropTable("users")