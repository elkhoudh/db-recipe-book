const db = require("../data/dbConfig");

const get = () => db("recipes");

const add = item => db("recipes").insert(item);

const getById = id =>
  db("recipes")
    .where({ id })
    .first();

const remove = id =>
  db("recipes")
    .where({ id })
    .del();

const update = (id, update) =>
  db("recipes")
    .where({ id })
    .update(update);

module.exports = {
  get,
  add,
  getById,
  remove,
  update
};
