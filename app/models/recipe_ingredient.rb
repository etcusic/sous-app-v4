class RecipeIngredient < ApplicationRecord
  belongs_to :recipe
  belongs_to :ingredient

  def self.createRecipeIngredientsFromPantry(new_ingredients, recipe_id)
    new_ingredients.each { | ing | self.create(quantity: ing[:id], recipe_id: recipe_id, ingredient_id: Pantry.find_by_id(ing[:id]).ingredient_id) }
  end

end
