class RecipeIngredient < ApplicationRecord
  belongs_to :recipe
  belongs_to :ingredient

  def self.createRecipeIngredientsFromPantry(new_ingredients, recipe_id)
    new_ingredients.map do | ing | 
      self.create(
        quantity: ing[:id], 
        recipe_id: recipe_id, 
        ingredient_id: PantryIngredient.find_by_id(ing[:id]).ingredient_id
      )
    end
  end

end
