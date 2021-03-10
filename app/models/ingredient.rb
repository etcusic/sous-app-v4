class Ingredient < ApplicationRecord
    self.abstract_class = true

    def self.createRecipeIngredientsFromPantry(ingredientsArray, recipe_id)
        # array format => [ { :id, :quantity, :unit } ] - :id == pantry_ingredient.id
        ingredientsArray.each do |ingredient|
            pantry_ingredient = PantryIngredient.find_by_id(ingredient[:id])
            RecipeIngredient.create(
                recipe_id: recipe_id,
                name: pantry_ingredient.name,
                quantity: ingredient[:quantity],
                unit: pantry_ingredient.unit,
                cost_per_unit: pantry_ingredient.cost_per_unit
            )
        end
    end

end
