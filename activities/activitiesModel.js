const db = require('../database/dbConfig');

module.exports = {
  insert,
  find,
  findBy,
  findById,
  update,
  remove
};

async function insert(activity) {
  const [id] = await db('activities').insert(activity);
  return findById(id);
}

function find() {
  return db('activities');
}

function findBy(filter) {
  return db('activities').where(filter);
}

function findById(id) {
  return db('activities').where({ user_id: id });
}

function findById(id) {
  return db('activities')
    .where({ user_id: id })
    .first()
    .then(activity => {
      const average_rating = Math.round(
        (activity.activity_energy +
          activity.activity_enjoyment +
          activity.activity_engagement) /
          3
      );
      console.log(average_rating);
      return { ...activity, average_rating };
    });
}

function update(id, changes) {
  return db('activities')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('activities')
    .where({ id })
    .del();
}
