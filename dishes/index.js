const express = require("express");
const Dishes = require("./dishes.model");

const route = express.Router();

route.get("/", (req, res) => {
  Dishes.get()
    .then(dishes => {
      res.json(dishes);
    })
    .catch(() => res.status(500).json({ message: "Server Error" }));
});

module.exports = route;
