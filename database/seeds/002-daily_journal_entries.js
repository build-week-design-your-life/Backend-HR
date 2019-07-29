exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('daily_journal_entries')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('daily_journal_entries').insert([
        {
          user_id: 1,
          daily_journal_title: 'entry title 1',
          daily_journal_content: 'test content okay 1',
          daily_journal_date: 01919394
        },
        {
          user_id: 2,
          daily_journal_title: 'entry title 2',
          daily_journal_content: 'test content okay 2',
          daily_journal_date: 01919394
        },
        {
          user_id: 3,
          daily_journal_title: 'entry title 3',
          daily_journal_content: 'test content okay 3',
          daily_journal_date: 01919394
        }
      ]);
    });
};
