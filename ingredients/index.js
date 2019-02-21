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

route.get("/:id", (req, res) => {
  const { id } = req.params;

  Ingredients.getById(id)
    .then(ingredient => {
      if (ingredient) {
        res.json(ingredient);
      } else {
        res.json({ message: "Ingredient not found" });
      }
    })
    .catch(() => res.status(500).json({ message: "Server Error" }));
});

route.delete("/:id", (req, res) => {
  const { id } = req.params;

  Ingredients.remove(id)
    .then(result => {
      if (result) {
        Ingredients.get().then(ingredients => {
          res.json(ingredients);
        });
      } else {
        res.status(400).json({ message: "Failed to delete Ingredient" });
      }
    })
    .catch(() => res.status(500).json({ message: "Server Error" }));
});

route.post("/", (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(422).json({ message: "Ingredient Name is required!" });
  } else {
    Ingredients.add({ name })
      .then(result => {
        if (result) {
          Ingredients.get().then(ingredients => {
            res.json(ingredients);
          });
        } else {
          res.status(400).json({ message: "Failed to add Ingredient" });
        }
      })
      .catch(() => res.status(500).json({ message: "Server Error" }));
  }
});

route.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    res.status(422).json({ message: "Name Required" });
  } else {
    Ingredients.getById(id)
      .then(ingredient => {
        if (ingredient) {
          Ingredients.update(id, { name }).then(result => {
            if (result) {
              Ingredients.get().then(ingredients => res.json(ingredients));
            } else {
              res.status(400).json({ message: "Failed to update Ingredient" });
            }
          });
        } else {
          res.status(404).json({ message: "Ingredient not found" });
        }
      })
      .catch(() => {
        res.status(500).json({ message: "Server Error" });
      });
  }
});

module.exports = route;
