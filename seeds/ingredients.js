exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, name: "Tomato sauce" },
        { id: 2, name: "Flour" },
        { id: 3, name: "Onions" }
      ]);
    });
};
