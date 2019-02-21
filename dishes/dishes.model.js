const db = require("../data/dbConfig");

const get = () => db("dishes");

const add = item => db("dishes").insert(item);

const getById = id =>
  db("dishes")
    .where({ id })
    .first();

const remove = id =>
  db("dishes")
    .where({ id })
    .del();

const update = (id, update) =>
  db("dishes")
    .where({ id })
    .update(update);

module.exports = {
  get,
  add,
  getById,
  remove,
  update
};
