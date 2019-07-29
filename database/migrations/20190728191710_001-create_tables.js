exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl
      .string('username', 255)
      .unique()
      .notNullable();
    tbl.string('password', 255).notNullable();
    tbl
      .string('email_address', 255)
      .notNullable()
      .unique();
    tbl.string('firstname', 255).notNullable();
    tbl.string('lastname', 255).notNullable();
    tbl.string('gender', 6).notNullable();
    tbl.integer('age', 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
