exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          firstname: 'Xena',
          lastname: 'Veel',
          email: 'xveel0@studiopress.com',
          gender: 'Female',
          age: 50,
          password: 'test',
          username: 'xveel0',
          city: 'Norfolk',
          state: 'Virginia',
          zipcode: '23504'
        },
        {
          firstname: 'Chloe',
          lastname: 'Czaple',
          email: 'cczaple1@flickr.com',
          gender: 'Female',
          age: 4,
          password: 'test',
          username: 'cczaple1',
          city: 'Riverside',
          state: 'California',
          zipcode: '92505'
        },
        {
          firstname: 'Willa',
          lastname: 'Charlon',
          email: 'wcharlon2@sun.com',
          gender: 'Female',
          age: 84,
          password: 'test',
          username: 'wcharlon2',
          city: 'Charleston',
          state: 'South Carolina',
          zipcode: '29416'
        }
      ]);
    });
};
