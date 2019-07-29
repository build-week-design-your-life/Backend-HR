exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'Xena',
          last_name: 'Veel',
          email_address: 'xveel0@studiopress.com',
          gender: 'Female',
          age: 50,
          password: 'test',
          username: 'xveel0',
          city: 'Norfolk',
          state: 'Virginia',
          zip_code: '23504'
        },
        {
          first_name: 'Chloe',
          last_name: 'Czaple',
          email_address: 'cczaple1@flickr.com',
          gender: 'Female',
          age: 4,
          password: 'test',
          username: 'cczaple1',
          city: 'Riverside',
          state: 'California',
          zip_code: '92505'
        },
        {
          first_name: 'Willa',
          last_name: 'Charlon',
          email_address: 'wcharlon2@sun.com',
          gender: 'Female',
          age: 84,
          password: 'test',
          username: 'wcharlon2',
          city: 'Charleston',
          state: 'South Carolina',
          zip_code: '29416'
        }
      ]);
    });
};
