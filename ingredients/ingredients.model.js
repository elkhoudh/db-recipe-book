const db = require("../data/dbConfig");

const get = () => db("ingredients");

module.exports = {
  get
};
