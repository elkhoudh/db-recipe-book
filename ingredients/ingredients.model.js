const db = require("../data/dbConfig");

const get = () => db("ingredients");

const add = item => db("ingredients").insert(item);

const getById = id =>
  db("ingredients")
    .where({ id })
    .first();

const remove = id =>
  db("ingredients")
    .where({ id })
    .del();

const update = (id, update) =>
  db("ingredients")
    .where({ id })
    .update(update);

module.exports = {
  get,
  add,
  getById,
  remove,
  update
};
