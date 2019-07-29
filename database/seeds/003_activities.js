exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('activities')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('activities').insert([
        {
          user_id: 1,
          activity_name: 'Fundamental',
          activity_duration: 47,
          activity_date: '10/20/2018',
          activity_added: '5/11/2019',
          activity_category: 'capacity',
          activity_time: '06:30PM'
        },
        {
          user_id: 2,
          activity_name: 'framework',
          activity_duration: 26,
          activity_date: '9/21/2018',
          activity_added: '1/9/2019',
          activity_category: 'infrastructure',
          activity_time: '06:30PM'
        },
        {
          user_id: 3,
          activity_name: 'artificial intelligence',
          activity_duration: 68,
          activity_date: '12/30/2018',
          activity_added: '9/25/2018',
          activity_category: 'analyzing',
          activity_time: '06:30PM'
        }
      ]);
    });
};
