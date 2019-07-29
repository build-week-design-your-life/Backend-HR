exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('activity_ratings')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('activity_ratings').insert([
        {
          user_id: 1,
          activity_id: 1,
          activity_rating_engagement: 5,
          activity_rating_enjoyment: 5,
          activity_rating_energy: 5,
          activity_rating_date: '07-28-19',
          activity_rating_average: 4.2
        },
        {
          user_id: 2,
          activity_id: 2,
          activity_rating_engagement: 5,
          activity_rating_enjoyment: 5,
          activity_rating_energy: 5,
          activity_rating_date: '07-28-19',
          activity_rating_average: 4.2
        },
        {
          user_id: 3,
          activity_id: 3,
          activity_rating_engagement: 5,
          activity_rating_enjoyment: 5,
          activity_rating_energy: 5,
          activity_rating_date: '07-28-19',
          activity_rating_average: 4.2
        }
      ]);
    });
};
