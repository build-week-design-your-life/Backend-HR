exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'test1',
          password: 'test'
        },
        {
          username: 'test2',
          password: 'test'
        },
        {
          username: 'test3',
          password: 'test'
        }
      ]);
    });
};
