exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { id: 1, name: "Orange Chicken", dish_id: 1 },
        { id: 2, name: "GR Recipe", dish_id: 2 },
        { id: 3, name: "WEB16", dish_id: 3 }
      ]);
    });
};
