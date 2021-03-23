class IngredientsController < ApplicationController

    def create_with_pantry
        # check for valid inputs
        # @ingredient = Ingredient.create(ingredient_params)
        # @pantry_ingredient = PantryIngredient.create(ingredient_id: @ingredient.id, pantry_id: pantry_info[:pantry_id], quantity: pantry_info[:quantity])
        binding.pry
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
