//TODO arq criado com 'npx knex migrate:make createUsers' (precisa do migrations criado corretamente no knexfile)
//! cria tabelas de forma automatizada
exports.up = knex => knex.schema.createTable("users", table => {
    table.increments("id")
    table.text("name")     
    table.text("email") 
    table.text("password")
    table.bool("is_admin").nullable()
    table.timestamp("create_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("users")


//TODO 'npx knex migrate:latest' para criar a table
//TODO após criar o atalho no package.json é só rodar npm run migrate