exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments();
      tbl.string('password', 255).notNullable();
      tbl
        .string('username', 255)
        .unique()
        .notNullable();
    })
    .createTable('journal_entries', tbl => {
      tbl.increments();
      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.string('journal_content', 255).notNullable();
      tbl.string('journal_title', 128).notNullable();
      tbl.string('journal_type', 128).notNullable();
      tbl.string('journal_date');
      tbl.string('journal_update');
    })
    .createTable('activities', tbl => {
      tbl.increments();
      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl
        .string('activity_name', 255)
        .notNullable()
        .unique();
      tbl.integer('activity_energy').notNullable();
      tbl.integer('activity_enjoyment').notNullable();
      tbl.integer('activity_engagement').notNullable();
      tbl.date('activity_date');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('journal_entries')
    .dropTableIfExists('activities');
};
