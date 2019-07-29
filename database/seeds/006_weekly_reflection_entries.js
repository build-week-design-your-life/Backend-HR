exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('weekly_reflection_entries')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('weekly_reflection_entries').insert([
        {
          user_id: 1,
          weekly_reflection_title: 'entry title 1',
          weekly_reflection_content: 'test content okay 1',
          weekly_reflection_date: 01919394
        },
        {
          user_id: 2,
          weekly_reflection_title: 'entry title 2',
          weekly_reflection_content: 'test content okay 2',
          weekly_reflection_date: 01919394
        },
        {
          user_id: 3,
          weekly_reflection_title: 'entry title 3',
          weekly_reflection_content: 'test content okay 3',
          weekly_reflection_date: 01919394
        }
      ]);
    });
};
