const express = require("express");
const Ingredients = require("./ingredients.model");

const route = express.Router();

route.get("/", (req, res) => {
  Ingredients.get()
    .then(ingredients => {
      res.json(ingredients);
    })
    .catch(() => res.status(500).json({ message: "Server Error" }));
});

module.exports = route;
