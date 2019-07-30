exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('journal_entries')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('journal_entries').insert([
        {
          user_id: 1,
          journal_title: 'entry title 1',
          journal_content: 'test content okay 1',
          journal_date: '01919394',
          journal_type: 'daily'
        },
        {
          user_id: 2,
          journal_title: 'entry title 2',
          journal_content: 'test content okay 2',
          journal_date: '01919394',
          journal_type: 'daily'
        },
        {
          user_id: 3,
          journal_title: 'entry title 3',
          journal_content: 'test content okay 3',
          journal_date: '01919394',
          journal_type: 'daily'
        },
        {
          user_id: 1,
          journal_title: 'entry title 1',
          journal_content: 'test content okay 1',
          journal_date: '01919394',
          journal_type: 'weekly'
        },
        {
          user_id: 2,
          journal_title: 'entry title 2',
          journal_content: 'test content okay 2',
          journal_date: '01919394',
          journal_type: 'weekly'
        },
        {
          user_id: 3,
          journal_title: 'entry title 3',
          journal_content: 'test content okay 3',
          journal_date: '01919394',
          journal_type: 'weekly'
        }
      ]);
    });
};
