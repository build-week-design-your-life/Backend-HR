exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('activity_categories')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('activity_categories').insert([
        {
          category_name: 'category 1',
          category_description: 'here are some test descriptions'
        },
        {
          category_name: 'category 2',
          category_description: 'here are some test descriptions'
        },
        {
          category_name: 'category 2',
          category_description: 'here are some test descriptions'
        }
      ]);
    });
};
