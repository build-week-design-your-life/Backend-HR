const db = require('../database/dbConfig');

module.exports = {
  insert,
  find,
  findBy,
  findById,
  update,
  remove
};

async function insert(user) {
  const [id] = await db('users').insert(user);
  return findById(id);
}

function find() {
  return db('users').select('username');
}

function findBy(filter) {
  return db('users').where(filter);
}

function findById(id) {
  return db('users')
    .where({ user_id: id })
    .first()
    .select('username', 'user_id');
}

function update(id, changes) {
  //
}

function remove(id) {
  //
}
