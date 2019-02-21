const express = require("express");
const Recipes = require("./recipes.model");

const route = express.Router();

route.get("/", (req, res) => {
  Recipes.get()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(() => res.status(500).json({ message: "Server Error" }));
});

module.exports = route;
