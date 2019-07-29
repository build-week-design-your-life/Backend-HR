exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments('user_id');
      tbl.string('password', 255).notNullable();
      tbl
        .string('username', 255)
        .unique()
        .notNullable();
    })
    .createTable('daily_journal_entries', tbl => {
      tbl.increments('journal_entry_id');
      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.string('daily_journal_title').notNullable();
      tbl.text('daily_journal_content').notNullable();
      tbl.timestamp('daily_journal_date');
    })
    .createTable('weekly_reflection_entries', tbl => {
      tbl.increments('weekly_entry_id');
      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.string('weekly_reflection_title').notNullable();
      tbl.text('weekly_reflection_content').notNullable();
      tbl.timestamp('weekly_reflection_date');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('daily_journal_entries')
    .dropTableIfExists('weekly_reflection_entries');
};
