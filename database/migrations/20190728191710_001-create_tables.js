exports.up = function (knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments('user_id');
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
    })
    .createTable('activity_categories', tbl => {
      tbl.increments('category_id');
      tbl.string('category_name', 255).notNullable();
      tbl.text('category_description').notNullable();
    })
    .createTable('activities', tbl => {
      tbl.increments('activity_id');
      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.string('activity_name', 255).notNullable();
      tbl.integer('activity_duration').notNullable();
      tbl.date('activity_date').notNullable();
      tbl.text('activity_description').notNullable();
      tbl.timestamp('activity_added');
      tbl.string('activity_category');
      tbl.datetime('activity_time');
    })
    .createTable('daily_journal_entries', tbl => {
      tbl.increments('journal_entry_id');
      tbl.integer('user_id')
      .unsigned()
      .notNullable()
      .references('user_id')
      .inTable('activities')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      tbl.string('daily_journal_title').notNullable();
      tbl.text('daily_journal_content').notNullable();
      tbl.timestamp('daily_journal_date');
    })
    .createTable('weekly_journal_entries', tbl => {
      tbl.increments('weekly_entry_id');
      tbl.integer('user_id')
      .unsigned()
      .notNullable()
      .references('user_id')
      .inTable('activities')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      tbl.string('weekly_journal_title').notNullable();
      tbl.text('weekly_journal_content').notNullable();
      tbl.timestamp('weekly_journal_date');
    })
    .createTable('activity_ratings', tbl => {
      tbl.increments('rating_id');
      tbl.integer('user_id')
      .unsigned()
      .notNullable()
      .references('user_id')
      .inTable('activities')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      tbl.integer('activity_id')
      .unsigned()
      .notNullable()
      .references('activity_id')
      .inTable('activities')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      tbl.integer('activity_rating_engagement').notNullable();
      tbl.integer('activity_rating_enjoyment').notNullable();
      tbl.integer('activity_rating_energy').notNullable();
      tbl.date('activity_rating_date').notNullable();
      tbl.float('activity_rating_rating');
  })
};

exports.up = function(knex) {
  return knex.schema.createTable('activity_categories', tbl => {
    tbl.increments('category_id');

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users').dropTableIfExists('activity_categories');
};
