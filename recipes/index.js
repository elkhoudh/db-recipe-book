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

route.get("/:id", (req, res) => {
  const { id } = req.params;

  Recipes.getById(id)
    .then(recipe => {
      if (recipe) {
        res.json(recipe);
      } else {
        res.json({ message: "Recipe not found" });
      }
    })
    .catch(() => res.status(500).json({ message: "Server Error" }));
});

route.delete("/:id", (req, res) => {
  const { id } = req.params;

  Recipes.remove(id)
    .then(result => {
      if (result) {
        Recipes.get().then(recipes => {
          res.json(recipes);
        });
      } else {
        res.status(400).json({ message: "Failed to delete dish" });
      }
    })
    .catch(() => res.status(500).json({ message: "Server Error" }));
});

route.post("/", (req, res) => {
  const { name, dish_id } = req.body;

  if (!name || !dish_id) {
    res.status(422).json({ message: "Dish Name is required!" });
  } else {
    Recipes.add({ name, dish_id })
      .then(result => {
        if (result) {
          Recipes.get().then(recipes => {
            res.json(recipes);
          });
        } else {
          res.status(400).json({ message: "Failed to add dish" });
        }
      })
      .catch(() => res.status(500).json({ message: "Server Error" }));
  }
});

route.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, dish_id } = req.body;

  if (!name || !dish_id) {
    res.status(422).json({ message: "Name Required" });
  } else {
    Recipes.getById(id)
      .then(recipe => {
        if (recipe) {
          Recipes.update(id, { name, dish_id }).then(result => {
            if (result) {
              Recipes.get().then(recipes => res.json(recipes));
            } else {
              res.status(400).json({ message: "Failed to update dish" });
            }
          });
        } else {
          res.status(404).json({ message: "Dish not found" });
        }
      })
      .catch(() => {
        res.status(500).json({ message: "Server Error" });
      });
  }
});

module.exports = route;
