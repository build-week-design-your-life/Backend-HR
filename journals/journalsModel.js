const db = require('../database/dbConfig');

module.exports = {
  insert,
  find,
  findBy,
  findById,
  update,
  remove
};

async function insert(entry) {
  const [id] = await db('journal_entries').insert(entry);
  return findById(id);
}

function find() {
  return db('journal_entries');
}

function findBy(filter, id) {
  return db('journal_entries').where({ journal_type: filter, user_id: id });
}

function findById(id) {
  return db('journal_entries').where({ id });
}

function update(id, changes) {
  return db('journal_entries')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('journal_entries')
    .where({ journal_id: id })
    .del();
}
