const db = require("../data/dbConfig");

const get = () => db("dishes");

const add = item => db("dishes").insert({ item });

module.exports = {
  get,
  add
};
