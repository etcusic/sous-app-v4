class IngredientsController < ApplicationController

    def create_with_pantry
        # check for valid inputs
        new_ingredients = ingredient_params.map do |obj|
            ingredient = Ingredient.create(obj[:ingredient])
            attrs = {ingredient_id: ingredient.id, pantry_id: obj[:pantry_ingredient][:pantry_id], quantity: obj[:pantry_ingredient][:quantity]}
            pantry_ingredient = PantryIngredient.create(attrs)
        end
        @pantry = Pantry.find_by_id(ingredient_params[0][:pantry_ingredient][:pantry_id])
        binding.pry
        render json: @pantry.ingredients_with_quantities
    end

    private

    def ingredient_params
        info = params["_json"] .map do |ing| 
            obj = {
                ingredient: {
                    category: ing[:category],
                    name: ing[:name], 
                    unit: ing[:unit], 
                    cost_per_unit: ing[:cost_per_unit]
                },
                pantry_ingredient: {
                    pantry_id: ing[:pantry_id],
                    quantity: ing[:quantity]
                }    
            }
        end
    end

end
