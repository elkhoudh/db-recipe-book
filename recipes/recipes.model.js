const db = require("../data/dbConfig");

const get = () => db("recipes");

module.exports = {
  get
};
