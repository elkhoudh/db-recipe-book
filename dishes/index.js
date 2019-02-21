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

route.post("/", (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(422).json({ message: "Dish Name is required!" });
  } else {
    Dishes.add({ name })
      .then(result => {
        if (result) {
          Dishes.get().then(dishes => {
            res.json(dishes);
          });
        } else {
          res.status(400).json({ message: "Failed to add dish" });
        }
      })
      .catch(() => res.status(500).json({ message: "Server Error" }));
  }
});

module.exports = route;
