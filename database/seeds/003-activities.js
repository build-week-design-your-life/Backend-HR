exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('activities')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('activities').insert([
        {
          user_id: 1,
          activity_name: 'Running',
          activity_energy: 5,
          activity_enjoyment: 3,
          activity_engagement: 3,
          activity_date: 093093093
        },
        {
          user_id: 2,
          activity_name: 'Hiking',
          activity_energy: 5,
          activity_enjoyment: 3,
          activity_engagement: 3,
          activity_date: 093093093
        },
        {
          user_id: 3,
          activity_name: 'Walking',
          activity_energy: 5,
          activity_enjoyment: 3,
          activity_engagement: 3,
          activity_date: 093093093
        }
      ]);
    });
};
