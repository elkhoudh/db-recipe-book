const db = require("../data/dbConfig");

const get = () => db("dishes");

module.exports = {
  get
};
