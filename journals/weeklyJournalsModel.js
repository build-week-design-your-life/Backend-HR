const db = require('../database/dbConfig');

module.exports = {
  insert,
  find,
  findBy,
  findById,
  update,
  remove
};

function insert(user) {
  //
}

function find() {
  return db('weekly_reflection_entries');
}

function findBy(filter) {
  //
}

function findById(id) {
  //
}

function update(id, changes) {
  //
}

function remove(id) {
  //
}
