exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          password: 'test',
          username: 'test'
        },
        {
          password: 'test1',
          username: 'test'
        }        {
          password: 'test2',
          username: 'test',

        },
      ]);
    });
};
