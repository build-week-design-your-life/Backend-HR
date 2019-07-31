const db = require('../database/dbConfig');

module.exports = {
  insert,
  find,
  findBy,
  findById,
  update,
  remove
};

function insert(activity) {
  //
}

function find() {
  return db('activities');
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
