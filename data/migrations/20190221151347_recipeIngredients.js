exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipeIngredients", tbl => {
    tbl
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipes");

    tbl
      .integer("ingredient_id")
      .unsigned()
      .references("id")
      .inTable("ingredients");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipeIngredients");
};
